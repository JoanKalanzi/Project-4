# Generated by Django 3.2.5 on 2021-07-23 19:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('plant_pictures', '0002_rename_user_picture_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='picture',
            name='owner',
        ),
    ]