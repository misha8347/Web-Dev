# Generated by Django 4.2 on 2023-04-08 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="News",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=200)),
                ("text", models.CharField(max_length=1500)),
                ("image", models.CharField(max_length=1000)),
                ("likes", models.IntegerField(default=0)),
                ("dislikes", models.IntegerField(default=0)),
            ],
            options={
                "verbose_name": "News",
                "verbose_name_plural": "News",
            },
        ),
    ]