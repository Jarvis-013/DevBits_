# Generated by Django 5.0.3 on 2024-03-28 13:31

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_patient_age'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('doc_name', models.CharField(max_length=100)),
                ('patient_name', models.CharField(max_length=100)),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('payment_mode', models.CharField(choices=[('Cash', 'Cash'), ('Credit Card', 'Credit Card'), ('Debit Card', 'Debit Card'), ('Online Payment', 'Online Payment'), ('Insurance', 'Insurance'), ('Other', 'Other')], max_length=20)),
                ('problem', models.TextField()),
                ('appointment_id', models.AutoField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('age', models.PositiveIntegerField()),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')], max_length=10)),
                ('specialization', models.CharField(max_length=100)),
                ('qualifications', models.TextField()),
                ('experience', models.PositiveIntegerField(default=0)),
                ('doctor_id', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='MedicalHistory',
            fields=[
                ('patient', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='medical_history', serialize=False, to='base.patient')),
                ('medical_history', models.TextField()),
                ('any_disease', models.CharField(max_length=100)),
            ],
        ),
    ]
