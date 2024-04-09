from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
# Create your models here.


class Students(models.Model):
    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other')
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True)
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    email = models.EmailField()
    age = models.IntegerField(default=0)
    contact_no = models.CharField(max_length=15)
    student_id = models.AutoField(primary_key=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)

    # Other important fields if exist
    # Add additional fields as needed

    def __str__(self):
        return self.name



class Teacher(models.Model):
    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other')
    )

    DEFAULT_PHOTO_URL = './static/images/fun-3d-cartoon-illustration-indian-doctor.jpg'

    name = models.CharField(max_length=100)
    email = models.EmailField()
    image = models.ImageField(null=True, blank=True,  default=DEFAULT_PHOTO_URL)
    age = models.PositiveIntegerField()
    password = models.CharField(max_length=128, null=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    experience = models.PositiveIntegerField(default=0)
    teacher_id = models.AutoField(primary_key=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)

    # Add additional fields as needed

    def __str__(self):
        return {self.name}


class Course(models.Model):
    course_id = models.AutoField(primary_key=True, editable=False)
    title = models.CharField(max_length=100)
    description = models.TextField()
    instructor = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration_in_weeks = models.IntegerField()
    start_date = models.DateField()

    def __str__(self):
        return self.title

class MyCourse(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    purchase_date = models.DateTimeField(default=datetime.now)

    class Meta:
        unique_together = ('user', 'course')

    def __str__(self):
        return f"{self.user.username} - {self.course.title}"


class Payment(models.Model):
    PAYMENT_MODE_CHOICES = (
        ('Cash', 'Cash'),
        ('Credit Card', 'Credit Card'),
        ('Debit Card', 'Debit Card'),
        ('Online Payment', 'Online Payment'),
        ('Insurance', 'Insurance'),
        ('Other', 'Other')
    )

    course_name = models.CharField(max_length=100)
    student_name = models.CharField(max_length=100)
    student_id = models.CharField(max_length=20)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    time = models.TimeField()
    payment_mode = models.CharField(max_length=20, choices=PAYMENT_MODE_CHOICES)

    # Add additional fields as needed

    def __str__(self):
        return f"Payment for {self.course_name} by {self.student_name}"