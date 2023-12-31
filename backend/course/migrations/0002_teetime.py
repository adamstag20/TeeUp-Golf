# Generated by Django 4.2.7 on 2023-11-26 22:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TeeTime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('owner', models.CharField(default='', max_length=120)),
                ('time', models.DateField()),
                ('players', models.IntegerField(default=1, max_length=4)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='course.course')),
            ],
        ),
    ]
