from django.db import models

# Create your models here.
class Application(models.Model):
    name = models.CharField(max_length=100, verbose_name='Имя')
    email = models.EmailField(verbose_name='Email')
    messanger = models.CharField(max_length=30, verbose_name='Номер телефона')
    content = models.TextField(verbose_name='Ваше обращение')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')

    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'