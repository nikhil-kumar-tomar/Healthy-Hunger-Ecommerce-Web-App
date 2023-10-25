# Generated by Django 4.2.6 on 2023-10-23 22:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('healthy_hunger', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Query',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
                ('email', models.EmailField(max_length=500)),
                ('query', models.CharField(max_length=3000)),
            ],
        ),
        migrations.AlterField(
            model_name='product',
            name='nutrition_image',
            field=models.FileField(upload_to='nutrition/'),
        ),
        migrations.AlterField(
            model_name='product',
            name='product_image',
            field=models.FileField(upload_to='product/'),
        ),
    ]
