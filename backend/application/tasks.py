from celery import shared_task
from .models import Application
from django.core.mail import EmailMessage
from django.core.mail import send_mail
import re


def sanitize_email(email):
    # Убираем новые строки и пробелы в начале и конце
    return re.sub(r'[\r\n]+', '', email.strip())


@shared_task
def send_application(application_id):
    application = Application.objects.get(pk=application_id)
    email = application.email
    name = application.name
    messanger = application.messanger

    subject = 'Уведомление о новой заявке'
    message = f'{name} оставил заявку на услуги Кыргызгеологии\n\nТекст заявки: "{application.content}"\n\nЕго email: "{email}"\nЕго номер: "{messanger}"'
    from_email = sanitize_email('bagishan040401@yandex.ru')
    recipient_list = [sanitize_email('bagishan01@gmail.com')]

    send_mail(subject, message, from_email, recipient_list)
    # email_message = EmailMessage(subject, message, from_email, recipient_list)

    # email_message.send()