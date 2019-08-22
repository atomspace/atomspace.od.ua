from django.core.mail import EmailMessage
import threading


class EmailThread(threading.Thread):
    def __init__(self, subject, html_content, from_email, recipient_list):
        self.subject = subject
        self.html_content = html_content
        self.from_email = from_email
        self.recipient_list = recipient_list
        threading.Thread.__init__(self)

    def run(self):
        msg = EmailMessage(self.subject, self.html_content,
                           self.from_email, self.recipient_list)
<<<<<<< HEAD
=======
        # msg.content_subtype = "html"
>>>>>>> 5a91d1ba8d356c84c843bddf110a6ff821086598
        msg.send()
