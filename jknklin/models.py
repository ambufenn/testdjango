from django.db import models

# Create your models here.

class Referral(models.Model):
    pasien_id = models.IntegerField()
    rumah_sakit = models.CharField(max_length=255)
    tanggal = models.DateField()
    dokter = models.CharField(max_length=255)
    status = models.CharField(max_length=50)