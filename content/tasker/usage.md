# Rolling Tasker

## Usage

Rolling Tasker dapat dilihat pada http://glyph.rollingglory.com/tasker/.

Pengisian dilakukan dengan menggunakan Telegram Bot @rollingtaskerbot

### Join

1. Buka group Super Coaster di Telegram (rekues diinvite oleh admin dulu jika belum)
2. Ketik ```/join@rollingtaskerbot``` dan kirim pesan
3. Akan ada **Rolling Tasker Bot** di daftar teman Telegram

### Logging

**1. Buka chat dengan Rolling Tasker Bot ketikkan command**

Command yang digunakan untuk logging adalah ```/log```, ada beberapa cara penggunaan dari command ini.

Format lengkap dari command ini adalah sebagai berikut

```sh
/log slot D M YYY
```

Dengan slot adalah slot ke-berapa, D, M, YYY berturut-turut adalah tanggal, bulan, dan tahun. *M dan YYY adalah opsional, jika dikosongkan maka akan dianggap bahwa bulan dan tahun saat ini.*

Berikut ini adalah contoh command untuk melakukan logging pada slot ke-2 hari ini

```sh
/log 2
```

Berikut ini adalah contoh command untuk melakukan logging pada slot ke-1, pada tanggal 4 November 2017.

```sh
/log 1 4 11 2017
```


**2. Pilih project yang dikerjakan**

Pada contoh terakhir di atas, bot akan membalas dengan pesan seperti di bawah ini: 

```Project apa yang kamu kerjakan pada slot ke-1 tanggal 7?``` 

Dan akan memberikan pilihan code project yang sedang aktif. Pilih salah satu sesuai dengan yang dikehendaki.


**3. Tulis deskripsi**

Kemudian bot akan membalas lagi untuk menanyakan deskripsi dari apa yang dikerjakan:

```Tuliskan deskripsi singkat apa yang kamu kerjakan.```

Silakan isi sesuai dengan aktivitas pengerjaan yang dilakukan. 

Untuk acuan pengisian silakan cek ke [Best Practices](?p=tasker/practice) dan [Case Studies](?p=tasker/case).

### Copying Command from Web

Command logging seperti di atas bisa di-copy dari website http://glyph.rollingglory.com/tasker/. 

1. Klik slot yang ingin diisi (atau diupdate atau dihapus)
2. Dari popup yang muncul klik tombol **Copy**
3. Di chat Rolling Tasker Bot lakukan paste 




