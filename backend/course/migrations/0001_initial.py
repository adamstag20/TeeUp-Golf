# Generated by Django 4.2.7 on 2023-11-03 00:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=120)),
                ('holes', models.IntegerField(default=18)),
                ('strokes', models.IntegerField(default=100)),
                ('diff', models.CharField(default='', max_length=120)),
                ('description', models.TextField()),
                ('driving_range', models.BooleanField(default=False)),
                ('food', models.BooleanField(default=False)),
                ('address', models.CharField(default='', max_length=120)),
                ('phone', models.CharField(default='', max_length=120)),
            ],
        ),
    ]
