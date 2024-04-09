from django.contrib import admin
from . import views
from django.urls import path, include

urlpatterns = [
    path('Students/',views.getStudents,name="Students"),
    path('register_user/',views.register_user,name="register"),
    path('users/',views.getUsers,name="Users"),
    path('users/profile',views.getUserProfile,name="user-Profile"),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('Students/<int:pk>/',views.getStudent,name="Students"),
  
    path('Teachers/',views.getTeachers,name="Teachers"),
   
    path('Students/create/',views.create_Student,name="Students_create"),
    path('Teachers/create/',views.create_Teacher,name="Students_create"),
   
    path('process_payment/', views.process_payment, name='process_payment'),
    path('logout/', views.logout_view, name='logout'),
    path('doc/<str:id>/', views.gettec, name='lgetdoc'),
    path('login/<str:em>/<str:pas>/Teacher', views.loginTeachers, name='loginTeacher'),
    path('api/google-signup/',views.google_signup),
    path('api/google-login/', views.google_login),
    path('courses/create/', views.create_course, name='create-course'),
    path('courses/', views.get_courses, name='get-courses'),
    
]