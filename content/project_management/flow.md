# Project Management

## Project Flow
Secara umum, setelah melewati fase Pandora, pengerjaan project di RGB melalui proses sebagai berikut:
1. [Project kickstart](# kickstart) dengan semua anggota tim tentang klien, project yang akan dikerjakan, timeline, wireframe, dan role masing-masing anggota tim.
2. Apabila project belum memiliki wireframe, UX designer membuat wireframe sesuai dengan brief dan user insight dari Creative Conceptor (CC) pada fase Pandora.
3. Apabila project belum memiliki style guide dan arahan design, Art Director (AD) membuat style guide yang sesuai dengan arahan klien dan user insight dari CC.
4. Berdasarkan wireframe, dapat ditentukan fitur-fitur/halaman yang akan didevelop untuk project. Project Manager (PM) membuat priority list untuk tiap halaman dan fitur di setiap halaman.
5. Back-end developer membuat struktur database untuk project dengan arahan dari Tech Lead (TL).
6. PM membuat board [Trello](?p=trello) untuk project, setiap halaman memiliki satu card, TL menambahkan card untuk halaman-halaman yang diperlukan di Backend.
7. PM membuat group Telegram dan folder Drive untuk project.
8. Anggota tim project di-invite ke board Trello, grup Telegram, dan folder Drive.
9. Pengerjaan project dilakukan sesuai iterasi yang dijelaskan pada bagian [Design & Implementation Iteration](# iteration).
10. PM memanage [status check-up](# checkup) harian & mingguan dengan tim.
11. AM melakukan check-in ke klien sesuai dengan milestone yang telah ditentukan dalam timeline project.
12. Pada minggu menjelang deadline, status check-up difokuskan untk mengecek kesiapan project untuk dipresentasikan pada klien dan adjustment yang perlu dilakukan.
13. Delivery project ke klien.
14. Pengerjaan revisi dilakukan sesuai proses iterasi.
15. Invoicing.


### <a name="kickstart"></a> Project Kickstart
Project kickstart dilakukan setelah pembentukan tim. Secara garis besar, tujuan briefing ini adalah untuk mengenalkan klien dan menjelaskan bentuk dan tujuan project kepada anggota tim. Agenda yang perlu dibahas dalam briefing ini diantaranya:
1. Klien (siapa, bergerak di bidang apa)
2. Anggota tim & role masing-masing
3. Spesifikasi project
    - Tipe (web, mobile, game, etc.)
    - Target user
    - Garis besar fitur
    - Teknologi yang digunakan
4. User insight (dari Creative Conceptor)
5. Art direction (dari Art Director, jika sudah ada)
6. Wireframe (dari UX, jika sudah ada) atau penjelasan detail halaman dan fitur
7. Timeline 
    - Deadline akhir
    - Fase/milestone sebelum deadline
    - Diskusi dan penyesuaian


### <a name="iteration"></a> Design & Implementation Iteration
Pengerjaan project di Rolling Glory menggunakan metode design-driven development—progress pengerjaan diukur per layar halaman.

Revisi dari proses review dikategorikan menjadi revisi minor dan major. Kategori revisi ditentukan oleh tim review. Contoh revisi minor adalah perubahan warna atau spacing pada design, sementara contoh revisi major adalah perubahan konten pada wireframe atau perubahan layout keseluruhan pada design. Revisi minor bersifat non-blocking; artinya proses iterasi bisa berlanjut tanpa menunggu hasil revisi. Revisi major bersifat blocking; artinya pengerjaan tahap selanjutnya ditunda hingga revisi selesai dan diterima.

1. **Wireframe**
    
    Wireframe dibuat oleh UX designer pada fase awal project. Wireframe berisi gambaran umum layout dan konten halaman yang kemudian dapat diolah designer sesuai dengan arahan design dari AD.

    *Review*&mdash;Wireframe direview oleh AD, CC, dan PM kemudian direview oleh klien.
2. **Design**
    
    Design dibuat oleh UI designer berdasarkan wireframe. Rancangan tampilan halaman dibuat sesuai dengan style guide dari Art Director.
    
    *Review*&mdash;Design direview oleh PM, UX, dan AD.
3. **Prototype**
    
    Prototype dibuat oleh UX designer dari design yang sudah direview. Prototype menggambarkan flow antarhalaman sesuai dengan wireframe.

    *Review*&mdash;Design direview oleh AM, PM, dan AD.    

4. **Implementasi - Back-end**
    
    Implementasi back-end dilakukan oleh developer berdasarkan design. Back-end developer menyiapkan semua model yang perlu ditampilkan pada halaman serta menyediakan API untuk data yang perlu dipanggil.
    
    *Review*&mdash;Implementasi front-end direview oleh PM dan Tech Lead (TL).
5. **Implementasi - Front-end**

    Implementasi front-end dilakukan oleh developer setelah design selesai direview. Front-end developer membuat tampilan dan interaksi halaman sesuai desain, dengan berkonsultasi pada designer dan UX.

    *Review*&mdash;Implementasi front-end direview oleh PM, Designer, Tech Lead (TL), dan QA.
6. **Implementasi - Integrasi Front-end/Back-end**
    
    Integrasi tampilan front-end dengan data dari back-end dilakukan setelah masing-masing implementasi back-end dan front-end selesai. 

    *Mobile Dev*

    Integrasi yang berkaitan dengan penggunaan API diimplementasikan oleh front-end dev.

    *Website Dev*

    Integrasi yang berkaitan dengan penggunaan AJAX dan API diimplementasikan oleh front-end dev sementara migrasi dari kode plain HTML ke PHP/ASP dilakukan oleh back-end dev.
    
    *Review*&mdash;Implementasi integrasi front-end dan back-end direview oleh AM, PM, TL, dan QA.
7. **Client Ready**
    
    Implementasi yang telah selesai direview dinyatakan siap untuk dipresentasikan kepada klien.
    
    *Review*&mdash;Versi client ready direview oleh klien.


### <a name="checkup"></a> Status Check-up
Status check-up adalah laporan rutin dari anggota tim kepada tim project tentang status task yang sedang dikerjakan. Status check-up mencakup tiga hal yaitu:
1. Progress - Apa yang sudah diselesaikan
2. Plan - Apa yang akan dikerjakan selanjutnya
3. Problem - Apakah ada masalah? Bagaimana menyelesaikannya?

Status check-up dilakukan secara rutin melalui telegram dan dalam meeting tatap muka.

#### In Person
Status check-up tatap muka dilakukan maksimal seminggu sekali dan minimal dua minggu sekali bersama seluruh anggota tim. Rapat dipimpin oleh PM dengan tujuan utama meng-align timeline dengan progress.
Untuk memastikan bahwa rapat berjalan dengan efektif, peserta rapat perlu mempersiapkan progress, plan, dan problem masing-masing. Selain itu, PM juga menyiapkan agenda meeting dan file-file terkait:
1. Download semua file terkait:
    - Wireframe
    - Timeline
    - Versi terakhir desain semua halaman yang sudah disubmit
2. Halaman apa saja yang dikerjakan minggu lalu?
3. Apakah ada revisi dari klien? Jika ada, apa saja? Bagaimana prioritasnya? Penyesuaian apa yang harus dilakukan?
4. Halaman apa saja yang akan dikerjakan minggu ini?
5. Apakah ada konten yang harus diminta dari klien?
6. Pembahasan dan penyelesaian problem masing-masing anggota tim
7. Penyesuaian prioritas dan load jika progress project tidak sesuai dengan timeline
8. Update timeline

Setelah rapat, PM mengupdate checklist Trello sesuai hasil rapat.

#### Via Telegram
Status check-up via Telegram dilakukan setiap hari. Masing-masing anggota tim yang sedang aktif mengerjakan project menyebutkan progress, plan, dan problem masing-masing. "Tidak Ada" adalah jawaban yang acceptable, misalnya jika sedang/akan mengerjakan project lain. Plan harian dapat berubah sesuai rekomendasi PM jika ada perubahan prioritas, misalnya apabila klien membutuhkan quick fix.
