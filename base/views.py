from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .products import products
from django.contrib.auth.models import User
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST, require_GET
from .models import Students, Teacher, Course,MyCourse, Payment  
from .serializers import StudentsSerializer,MyCourseSerializer, TeacherSerializer, CourseSerializer, UserSerializer, UserSerializerWithToken
from django.shortcuts import get_object_or_404
import stripe
from django.contrib.auth.hashers import make_password
from rest_framework import status
# Create your views here.
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from google.oauth2 import id_token
from google.auth.transport import requests

@api_view(['POST'])
def create_course(request):
    if request.method == 'POST':
        serializer = CourseSerializer(data=request.POST)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@api_view(['GET'])
def get_courses(request):
    if request.method == 'GET':
        courses = Course.objects.all()
        serializer = CourseSerializer(courses, many=True)
        return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def google_signup(request):
    try:
        token = request.data.get('token')
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), '491189374301-mfjrti18qkmbs56efvsvlrjnja83ft07.apps.googleusercontent.com')
        name = idinfo['name']
        email = idinfo['email']
        # You can create a new user account or handle the signup logic here
        # For simplicity, I'm returning the user info
        return JsonResponse({'name': name, 'email': email})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

@api_view(['POST'])
def google_login(request):
    try:
        token = request.data.get('token')
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), '491189374301-mfjrti18qkmbs56efvsvlrjnja83ft07.apps.googleusercontent.com')
        name = idinfo['name']
        email = idinfo['email']
        # You can authenticate the user or handle the login logic here
        # For simplicity, I'm returning the user info
        return JsonResponse({'name': name, 'email': email})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self,attrs):
        data=super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k]=v
        

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user=request.user
   
    serializer = UserSerializer(user,many=False) 
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users ,many=True) 
    return Response(serializer.data)
 

@api_view(['GET'])
def getStudents(request):
    Studentss = Students.objects.all()
    serializer = StudentsSerializer(Studentss,many=True) 
    return Response(serializer.data)
 

@api_view(['GET'])
def getStudent(request, pk):
    Studentss =  Students.objects.get(Students_id=pk)
    serializer = StudentsSerializer(Studentss) 
    return Response(serializer.data)


@api_view(['GET'])
def gettec(request, id):
    Doc =  Teacher.objects.get(Teacher_id=id)
    serializer = TeacherSerializer(Doc) 
    return Response(serializer.data)



@api_view(['GET'])
def getTeachers(request):
    Teachers_ = Teacher.objects.all()
    serializer = TeacherSerializer(Teachers_ ,many=True) 
    return Response(serializer.data)
 
@api_view(['GET'])
def loginTeachers(request, em, pas):
    # Retrieve the Teacher with the given email
    try:
        Teacher = Teacher.objects.get(email=em)
    except Teacher.DoesNotExist:
        return Response("Teacher with the provided email does not exist", status=404)

    # Check if the provided password matches the Teacher's password
    if Teacher.password == pas:
        serializer = TeacherSerializer(Teacher)
        return Response(serializer.data)
    else:
        return Response("Incorrect password", status=400)


@api_view(['POST'])
def create_Student(request):
    serializer = StudentsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['POST'])
def create_Teacher(request):
    serializer = TeacherSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['POST'])
def register_user(request):
    data = request.data

    # Check if the user already exists
    try:
        user = User.objects.get(email=data['email'])
        # If user already exists, update the user's information
        user.first_name = data['name']
        user.username = data['email']
        user.set_password(data['password'])
        user.save()
    except User.DoesNotExist:
        # If user does not exist, create a new user
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )

    # Create or update Students information
    Students_data = {
        'name': data['name'],
        'gender': data.get('gender', ''),
        'email': data['email'],
        'age': data.get('age', 0),
        'contact_no': data.get('contact_no', '')
    }

    # Check if Students exists based on email
    try:
        Students = Students.objects.get(email=data['email'])
        # If Students exists, update the Students's information
        for key, value in Students_data.items():
            setattr(Students, key, value)
        Students.save()
    except Students.DoesNotExist:
        # If Students does not exist, create a new Students
        Students = Students.objects.create(**Students_data)

    # Serialize and return the user data with token
    serializer = UserSerializerWithToken(user, many=False)
    return Response(serializer.data)

    
stripe.api_key = settings.STRIPE_SECRET_KEY

@csrf_exempt
@require_POST
def process_payment(request):
    if request.method == 'POST':
        amount = request.POST.get('amount')
        token = request.POST.get('token')

        try:
            # Create a charge with the amount and token
            charge = stripe.Charge.create(
                amount=amount,
                currency='usd',
                source=token,
                description='Payment for appointment booking'
            )
            # If the charge is successful, return a success response
            return JsonResponse({'success': True})
        except stripe.error.StripeError as e:
            # Handle Stripe errors
            return JsonResponse({'success': False, 'error': str(e)})
        except Exception as e:
            # Handle other errors
            return JsonResponse({'success': False, 'error': 'An error occurred while processing the payment.'})
    else:
        # Return a method not allowed response if the request method is not POST
        return JsonResponse({'error': 'Method not allowed'}, status=405)

 
@api_view(['POST'])  # You can use GET or POST depending on your application's requirements
def logout_view(request):
    logout(request)
    return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)