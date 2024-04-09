from django.contrib import admin
from .models import Students, Teacher, Course, MyCourse, Payment

admin.site.register(Students)
admin.site.register(Teacher)
admin.site.register(Course)
admin.site.register(MyCourse)
admin.site.register(Payment)


