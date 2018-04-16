# Git Best Practices

Development aplikasi di Rolling Glory sering kali melibatkan lebih dari 1 developer. Dalam berkolaborasi antar developer, Rolling Glory menggunakan *Git* sebagai *Version Control System*. Untuk memaksimalkan penggunaan *Git* dan memudahkan *code maintenance*, berikut beberapa best practice yang dapat dilakukan.

## Writing Good Commit Messages

Commit message adalah salah satu cara untuk berkomunikasi. Dengan menulis commit message yang baik developer lain akan lebih mudah mengerti apa maksud dari setiap perubahan kode yang ada. 

Commit message terdiri dari **subject line** dan **body**. Subject line adalah bagian awal commit message yang bertujuan untuk menjelaskan secara singkat dan padat perubahan apa yang dilakukan. Sementara body adalah bagian opsional yang ditambahkan jika diperlukan penjelasan tambahan mengenai commit tersebut.

Berikut adalah beberapa rules yang harus diperhatikan ketika menulis commit message.

1. **Tulis subject dalam bentuk imperatif jika ditulis dalam bahasa Inggris, atau dalam bentuk aktif jika ditulis dalam bahasa Indonesia**

   Bentuk imperatif adalah bentuk kalimat yang bersifat memerintah atau memberi komando. Awali commit message dengan kata "Fix", "Add", atau "Change" dibanding menggunakan "Fixed", "Added", atau "Changed".

   Untuk memudahkan membuat kalimat dalam bentuk imperatif / aktif, commit message harus selalu dapat melengkapi kalimat: **"If applied, this commit will _____"** atau **"Jika ditambahkan, commit ini akan _____"**.  

   Sebagai contoh, 
   * If applied, this commit will **Add login page layout**
   * If applied, this commit will **Remove deprecated methods**
   * If applied, this commit will **Fix a bug where app will crash when user login for the second time** 
   * If applied, this commit will **Fix a bug on the login page**
   * If applied, this commit will **Release version 1.0.0** 
   * Jika ditambahkan, commit ini akan **Memperbaiki bug pada halaman dashboard**
   * Jika ditambahkan, commit ini akan **Menambahkan grafik pada halaman dashboard**

2. **Batasi jumlah karakter pada subject maksimal sebanyak 72**

	Pembatasan jumlah karakter dilakukan karena di dalam beberapa Git UI message commit akan dipotong jika melebihi 72 karakter. Selain itu pembatasan ini akan membuat message lebih mudah untuk dibaca dan memastikan developer tidak menumpukkan perubahan-perubahan yang tidak berkaitan di dalam satu commit.

	contoh subject yang terpotong
	![Gambar subject commit yang terpotong](https://i.imgur.com/27n9O8y.png "Contoh subject yang terpotong")

3. **Pisahkan bagian subject dan body dengan baris kosong**

	Jika terdapat body di dalam commit message, pisahkan bagian subject dan body dengan baris kosong. Dengan begitu bagian body tidak akan terlihat jika kita melakukan command `shortlog` di dalam git.

	contoh:
	```
	Update chat mechanism
	
	- resend pending image
	- add upload progress percentage
	- cache 24 hour chat data
	- show attachment button when chat is ready
	```

	**catatan** : Hal ini sulit dilakukan jika menggunakan command `-m` saat melakukan commit. Gunakan text editor atau Git GUI untuk melakukan ini

4. **Gunakan body message untuk menjelaskan "what" atau "why" dibanding menjelaskan "how"**
	
	Tujuan utama commit message adalah sebagai catatan apa yang dilakukan pada commit tersebut. Tulis secara singkat dan padat apa yang dilakukan (sebagai subject) sesuai dengan 2 aturan sebelumnya. Jika diperlukan penjelasan lebih mengenai commit tersebut jelaskan pada bagian body message.

	Body message bertujuan untuk memberi penjelasan lebih mengenai commit. Penjelasan tersebut harus menjawab pertanyaan *"Apa saja yang dilakukan?"* atau *"mengapa itu dilakukan?"*. Hindari menggunakan body message untuk menjelaskan bagaimana kode bekerja karena hal tersebut seharusnya sudah terjelaskan di dalam kode.

	**Contoh benar**
	* Pada versi sebelumnya log dibuat dengan meng-append ke dalam object String. Hal tersebut bisa mengakibatkan OOM karena melebihi kapasitas penyimpanan String. Untuk menghindari hal tersebut, setiap log disimpan secara terpisah ke dalam database lalu akan digabungkan di dalam satu file di akhir proses.

	**Contoh salah**
	* Penulisan log dilakukan dengan mengiterasi setiap item di dalam database. Setiap item akan ditulis ke dalam file di dalam folder temporary. Jika sebelumnya sudah ada file dengan nama yang sama, tulis ulang file tersebut. Setelah semua proses sudah beres, semua item dihapus dari database.

5. **Tulis huruf pertama pada subject dalam huruf kapital**

	Aturan ini hanya berlaku untuk bagian subject untuk menyeragamkan bentuk penulisan message.

6. **Tidak perlu menambahkan titik di akhir subject**

	Aturan ini juga hanya berlaku untuk bagian subject untuk menghemat karakter (karena dibatasi) dan menyeragamkan bentuk penulisan message.

7. **Wrap setiap baris di dalam body message pada karakter ke 72**

	Hal ini perlu dilakukan karena Git tidak pernah melakukan wrap otomatis pada message. Untuk memudahkan membaca body message saat melakukan log, tulis message pada line baru jika jumlah karakter pada baris tersebut sudah mencapai 72.

## When to Commit

Untuk menjawab pertanyaan *"Kapan dan bagaimana kita harus melakukan commit?"*, prinsip yang digunakan di Rolling Glory adalah **Atomic Approach**, yaitu **lakukan commit dengan perubahan sekecil dan se-*atomic* mungkin**. *Atomic* di sini berarti perubahan yang dilakukan dalam satu commit harus berkaitan dan tidak dapat dibagi lagi. Berikut adalah beberapa poin yang perlu diperhatikan dalam *Atomic Approach*:

1. **Lakukan commit untuk setiap task yang selesai**

	Task adalah bagian kecil dari fitur yang dapat berdiri sendiri dan dapat dilakukan test. Contohnya di dalam fitur *login*, task yang mungkin ada adalah *layout code*, *validasi input*, dan *handle API*. Lakukan commit setelah selesai mengerjakan setiap task tersebut.

2. **Pisahkan perubahan file pada fitur yang berbeda ke dalam commit yang berbeda**

	Commit juga harus memisahkan perubahan file untuk fitur yang berbeda. Contoh kasusnya adalah sebagai berikut

	> Misal terdapat 2 task, menambahkan halaman register dan update input field pada halaman login. Pada task menambah halaman register terdapat perubahan halaman login, yaitu menambah link menuju halaman register. 

	Pada kasus tersebut, perubahan halaman login tidak boleh disimpan pada commit yang sama. Penambahan link menuju halaman register harus digabungkan bersama penambahan fitur register. Sementara perubahan field input disimpan dalam commit update halaman login.
	
3. **Pisahkan commit antara perbaikan bug dan perubahan/penambahan fitur**

	Jika terdapat perubahan pada fitur dan perbaikan bug pada fitur yang sama, kedua perubahan tersebut juga harus disimpan pada commit yang berbeda. Contohnya jika pada sebuah halaman login terdapat bug pada validasi input dan juga terdapat update design, pisahkan perubahan kode untuk memperbaiki bug validasi dan perubahan kode untuk meng-update layout. 


## Branching

Branching bermanfaat untuk memisahkan kode yang siap di-*build* untuk versi rilis dan kode yang masih dalam tahap development. Dengan begitu tahap development tidak akan menganggu atau mengacaukan versi kode yang siap untuk di-*build*. Dalam melakukan branching, Rolling Glory menggunakan 2 jenis branching, yaitu branch utama dan branch pendukung.

Branch utama adalah branch yang harus ada untuk setiap project yang dikerjakan. Branch utama terdiri dari:

1. **Master**

	Branch `master` adalah branch yang digunakan sebagai versi produksi. Kode pada branch ini harus *stable* dan selalu siap untuk di-build. Perubahan pada tahap development tidak boleh di-merge langsung ke dalam branch ini jika belum disetujui sebagai versi rilis. Jika sudah disetujui sebagai versi rilis, beri tag sesuai nomor versi.

2. **Develop**

	Branch 'develop' adalah branch yang digunakan sebagai versi development. Kode pada branch ini juga harus selalu siap untuk di-build dan di-test, tetapi tidak perlu mencerminkan versi siap rilis. Commit yang bisa mengakibatkan *broken state* tidak boleh di-merge langsung ke dalam branch ini. Untuk kasus tersebut sebaiknya gunakan branch pendukung. Jika kode pada branch ini sudah disetujui sebagai versi rilis, merge kembali branch `develop` ke dalam branch `master`.

![Ilustrasi branch utama](https://firebasestorage.googleapis.com/v0/b/rikues-15.appspot.com/o/Picture1.png?alt=media&token=7a8b3790-6e6b-4d9f-ba97-2d9f966e1c8b "Ilustrasi branch utama")

Branch pendukung adalah branch opsional yang bisa membantu pada tahap development. Branch-branch ini dapat dihapus jika kodenya sudah di-merge kembali ke branch utama dan sudah tidak dibutuhkan. Branch pendukung terdiri dari:

1. **Hotfix**

	Branch `hotfix` digunakan untuk membenarkan bug-bug kritis yang perlu diselesaikan dengan cepat. Branch ini baru dibuat jika sudah ada versi rilis, dan dibuat dari branch `master`. Mengacu pada rule untuk melakukan commit, setiap commit harus memiliki perubahan yang terpisah untuk setiap bug yang ada. Jangan menggabungkan beberapa bug pada satu commit jika tidak berhubungan. 

	Setelah bug selesai dibenarkan dan sudah ditest, merge kembali branch ini ke dalam branch `master` sehingga siap untuk di-build dan dirilis kembali.

2. **Feature-xx**

	Branch `feature` adalah branch yang digunakan untuk memisahkan line development untuk fitur tertentu jika dikhawatirkan akan mengacaukan kode pada branch utama. Branch ini dibuat dari branch `develop` dan dinamai dengan format `feature-xx`, dimana `xx` adalah nama fitur dipisahkan dengan *hyphen*. Branch ini dapat berupa branch lokal atau di-push ke `origin` sesuai kebutuhan. Jika fitur telah selesai dibuat, branch ini bisa di-merge kembali ke dalam branch `develop`.
	
