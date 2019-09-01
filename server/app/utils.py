from email.mime.image import MIMEImage
import threading
import os.path
from django.core.mail import EmailMultiAlternatives


class EmailThread(threading.Thread):
    def __init__(self, subject, html_content, from_email, recipient_list):
        self.subject = subject
        self.html_content = html_content
        self.from_email = from_email
        self.recipient_list = recipient_list
        threading.Thread.__init__(self)

    def run(self):
        msg = EmailMultiAlternatives(self.subject, self.html_content,
                                     self.from_email, self.recipient_list)

        mainFilePath = './app/templates/email/'
        fileInstagram = mainFilePath + 'images/instagram.png'
        fileFacebook = mainFilePath + 'images/facebook.png'
        fileLogo = mainFilePath + 'images/logo.png'
        images_file_path_tuple = [fileInstagram, fileFacebook, fileLogo]

        i = 0
        for image_file_path in images_file_path_tuple:
            if os.path.isfile(image_file_path):
                image_file = open(image_file_path, 'rb')
                image_part = MIMEImage(image_file.read(), name=image_file_path)
                image_part.add_header('Content-ID', '<' + str(i) + '>')
                image_part.add_header(
                    "Content-Disposition", "in-line",
                    filename=image_file_path)
                image_part.add_header('X-Attachment-Id', str(i))
                msg.attach(image_part)
                i += 1
        msg.attach_alternative(self.html_content, "text/html")
        msg.send()
