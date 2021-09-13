# Generated by Django 3.2.5 on 2021-07-29 10:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('plant_family', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Picture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default=None, max_length=50)),
                ('image', models.CharField(default=None, max_length=500)),
                ('family', models.ManyToManyField(related_name='pictures', to='plant_family.Family')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pictures', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
