# Generated by Django 5.0.3 on 2024-04-09 14:55

import datetime
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0016_doctor_password'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('course_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('instructor', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('duration_in_weeks', models.IntegerField()),
                ('start_date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='MyCourse',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('purchase_date', models.DateTimeField(default=datetime.datetime.now)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.course')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('user', 'course')},
            },
        ),
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('image', models.ImageField(blank=True, default='./static/images/fun-3d-cartoon-illustration-indian-doctor.jpg', null=True, upload_to='')),
                ('age', models.PositiveIntegerField()),
                ('password', models.CharField(max_length=128, null=True)),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')], max_length=10)),
                ('experience', models.PositiveIntegerField(default=0)),
                ('teacher_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.RenameModel(
            old_name='Patient',
            new_name='Students',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='patient_id',
        ),
        migrations.DeleteModel(
            name='Doctor',
        ),
        migrations.RemoveField(
            model_name='medicalhistory',
            name='patient',
        ),
        migrations.RenameField(
            model_name='payment',
            old_name='doc_name',
            new_name='course_name',
        ),
        migrations.RenameField(
            model_name='payment',
            old_name='patient_id',
            new_name='student_id',
        ),
        migrations.RenameField(
            model_name='payment',
            old_name='patient_name',
            new_name='student_name',
        ),
        migrations.RenameField(
            model_name='students',
            old_name='patient_id',
            new_name='student_id',
        ),
        migrations.RemoveField(
            model_name='payment',
            name='problem',
        ),
        migrations.DeleteModel(
            name='Appointment',
        ),
        migrations.DeleteModel(
            name='MedicalHistory',
        ),
    ]
