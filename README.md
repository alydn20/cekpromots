# Treasury Popup WhatsApp Bot

## Cara Jalan
1. unzip
2. npm install
3. cp .env.example .env
4. isi token & nomor WhatsApp
5. npm start

Bot akan:
- Cek popup_location = 1 tiap 1 menit
- Jika status berubah:
  OFF -> ON atau ON -> OFF
- Kirim ke WhatsApp

Command manual:
cekpromo