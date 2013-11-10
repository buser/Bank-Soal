/*
Anda dapat menambah informasi seperlunya mengenai peran yang Anda lakukan berkenaan dengan soal ini, dengan catatan tidak mengubah informasi yang sudah ada.

Soal dalam bentuk ini dibuat oleh:
  >> Hasan Busro, S.P. Telp. 085 655 309 120
  >> Ni'matus Saidah, S.Si
Soal dibuat dengan menggunakan library ..............


##################################################################################
#                                 UJIAN NASIONAL                                 #
#                                     SMA/MA                                     #
#                           TAHUN PELAJARAN 2012/2013                            #
#                Mata Pelajaran       : SOSIOLOGI                                #
#                Program Studi        : IPS                                      #
#                Hari/Tanggal         : Kamis, 18 April 2013                     #
#                Waktu                : 07.30 – 09.30                            #
##################################################################################

*/
$( function($){
	var quiz = {
		"multiList" : [
			{	//soal 1
				ques: "Rino berusia 3 tahun sedang bermain dengan teman-teman sebayanya. la berperan sebagai dokter gigi sementara teman yang lain menjadi pasiennya. Tahap pembentukan kepribadian bagi Rino termasuk pada ....", //question
				ans: "", // answer
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"  // answer information.
			},
			{	//soal 2
				ques: "Sejak internet masuk ke sekolah, para siswa dianjurkan menggunakannya sebagai sumber belajar. Disamping itu, para siswa juga menggunakannya untuk mengerjakan tugas sekolah dalam jejaring sosial. Setelah terbiasa berinternet, para siswa merasa menjadi bodoh dan ketinggalan zaman tanpa internet. Peran internet dalam pembentukan kepribadian siswa tersebut adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 3
				ques: "Karena kemiskinan di kampung halamannya, seseorang mencoba merantau ke kota. Di kota ia bergaul dengan masyarakat sekitar, mempelajari kebiasaan-kebiasaan orang di kota dengan tujuan agar dapat menyesuaikan diri dengan nilai dan norma masyarakat. Peran yang dimainkan orang tersebut merupakan tujuan sosialisasi, yaitu ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 4
				ques: "Kondisi yang aman dari ancaman pihak luar, dinamis dan teratur dalam menjalani kehidupan dimana setiap individu bertindak sesuai hak dan kewajibannya, merupakan unsur-unsur terwujudnya ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 5
				ques: "Perhatikan perilaku berikut!<br>(1) Menggunakan tangan kanan ketika bersalaman<br>(2) Melambaikan kedua tangan saat menonton pertandingan<br>(3) Mengucapkan terima kasih setelah mendapat pertolongan<br>(4) Menulis catatan pelajaran di kelas menggunakan tangan kanan<br>(5) Memberikan sesuatu kepada orang lain dengan tangan kanan<br>Yang termasuk contoh penerapan norma kesopanan adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 6
				ques: "Sosiolog dapat memberikan sumbangan berkaitan dengan cara kerja yang sistematis dalam suatu penelitian sosial maupun pemecahan masalah sosial sehingga dapat mencapai tujuan sesuai dengan harapan masyarakat. Dalam hal ini sosiologi berfungsi sebagai ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 7
				ques: "Perhatikan pernyataan berikut!<br>(1) Rusaknya infrastruktur akibat bencana alam<br>(2) Persebaran penduduk ke dalam kelas-kelas sosial<br>(3) Perkembangan teknologi baru yang tepat guna<br>(4) Kedudukan seseorang dalam kelompok<br>(5) Kehidupan lintas etnik dan budaya<br>Yang termasuk objek kajian sosiologi adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 8
				ques: "Komandan upacara memberi aba-aba kepada peserta upacara dan dipatuhi sehingga terjadi interaksi sosial yang baik. Ciri yang sangat menonjol dalam contoh interaksi tersebut adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 9
				ques: "Sesuai dengan peraturan yang kuat melalui <i>awig-awig</i>, penduduk desa Tenganan Bali Aga menjaga kehidupan warganya termasuk pernikahan antara sesama warga desa untuk memastikan kemurnian keturunan. Lembaga yang berfungsi menjaga keutuhan ikatan masyarakat desa tersebut bagi mereka yang melanggar adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 1O
				ques: "Akhir-akhir ini banyak kaum perempuan yang berpendidikan tinggi terlibat kasus tindak pidana korupsi, selanjutnya dihukum penjara dan dijatuhi denda. Pengendalian sosial di atas bersifat represif yang bertujuan untuk ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 11
				ques: "Sekelompok massa melakukan tindakan pemu kulan terhadap seorang yang disangka melakukan pencurian di sebuah rumah. Dilihat dari pelakunya, tindakan tersebut merupakan bentuk pengendalian ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 12
				ques: "Banyaknya kasus penyalahgunaan narkotika yang dilakukan oleh remaja disebabkan oleh mudahnya mendapatkan barang tersebut melalui agen-agen gelap yang masuk di semua sektor kehidupan seperti sekolah, pusat keramaian, dan kampung-kampung. Berdasarkan tingkat penerimaan masyarakat, mengonsumsi narkoba tergolong sebagai penyimpangan ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 13
				ques: "Melakukan sosialisasi peraturan daerah antirokok sebelum peraturan diberlakukan merupakan upaya mengatur perilaku masyarakat melalui upaya pengendalian sosial. Hal ini bertujuan untuk ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 14
				ques: "Perhatikan pernyataan berikut!<br>(1) Budi seorang yang kaya karena kerja keras yang tiada henti<br>(2) Candra setiap hari nongkrong di pinggir jalan ikut geng motor di kotanya<br>(3) Seorang remaja menjadi pemurung karena orangtuanya sering bertengkar<br>(4) Berjudi masih menjadi kebiasaan rutin bagi sebagian kecil warga masyarakat<br>(5) Wawan menjadi berandal ketika bergaul dengan kelompok yang suka berkelahi<br><br>Yang termasuk perilaku menyimpang karena adanya sosialisasi subkebudayaaan adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 15
				ques: "Pimpinan perusahaan bersepakat untuk membentuk forum komunikasi dengan para buruh untuk mewujudkan keinginan-keinginan yang berbeda antara pimpinan dan pekerja perusahaan. Interaksi asosiatif tersebut merupakan bentuk dari ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 16
				ques: "Perhatikan pernyataan berikut!<br>(1) Memilih pemimpin berdasarkan latar belakang budaya yang sama<br>(2) Mempelajari keragaman budaya yang ada di wilayah Indonesia<br>(3) Menjiwai aturan adat istiadat leluhur dalam menjalani kehidupan<br>(4) Melakukan peleburan budaya melalui perkawinan antarsuku<br>(5) Memberikan kesempatan investasi kepada pengusaha asing<br><br>Yang merupakan perilaku sesuai dengan toleransi masyarakat multikultural adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 17
				ques: "Kemajemukan masyarakat Indonesia antara lain ditandai oleh adanya keanekaragaman mata pencarian di bidang agraris, misalnya ada masyarakat yang hidup berladang dan ada masyarakat yang hidup dengan mengolah sawah. Faktor yang menyebabkan kondisi kemajemukan demikian adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 18
				ques: "Masa reformasi di Indonesia yang dimulai tahun 1998 menandai berakhirnya politik dinasti yang dimonopoli kelompok tertentu. Hal ini berakibat pada dimulainya penentuan status kepemimpinan nasional yang dipilih berdasarkan ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 19
				ques: "Di kota besar seperti Jakarta, masuknya pendatang berdampak pada tergesernya dominasi penduduk asli. Dalam penyelenggaraan kekuasaan melibatkan para pendatang sehingga membentuk komposisi baru di masyarakat yang berupa ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 20
				ques: "Perhatikan ciri kelompok sosial berikut!<br>(1) Tugas-tugas didistribusikan dalam beberapa posisi sesuai jabatan<br>(2) Terdapat hubungan antarpribadi yang bersifat intim dan hangat<br>(3) Terdiri dari struktur yang bersifat hierarki dan berjenjang<br>(4) Terjadinya kelompok karena seringnya intensitas pertemuan<br>(5) Tata perilaku ditentukan oleh sistem peraturan yang ada<br><br>Yang termasuk karakteristik kelompok sosial formal adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 21
				ques: "Munculnya elit politik baru yang berkuasa di masa reformasi sekarang ini seringkali menimbulkan kecemburuan sosial dalam masyarakat dan ketegangan antara elit partai politik. Hal ini berpotensi menimbulkan masalah berupa ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 22
				ques: "Raden Bawono seorang mahasiswa yang dibesarkan di lingkungan keraton/feodal dan memegang teguh tradisi yang berlaku dalam keluarga. Selama di kampus dia merasa kesulitan dalam menyesuaikan diri dengan teman-temannya yang datang dari berbagai latar belakang sosial budaya. Dia cenderung membatasi pergaulannya dan tidak terlibat aktif dalam organisasi kampus. Dalam contoh kasus tersebut terdapat faktor yang menghambat terjadinya mobilitas sosial, yaitu ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 23
				ques: "Amin tidak sanggup membayar uang masuk perguruan tinggi favorit meskipun secara akademik ia diterima. Berdasarkan prediksi, kalau ia kelak lulus dari perguruan tinggi tersebut, ia dapat mengubah nasib keluarganya. Hal ini menggambarkan tentang kesulitannya untuk melakukan mobilitas sosial ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 24
				ques: "Kesuksesan Pak Beni dalam memimpin perusahaan jasa pariwisata, mengantarkan ia menjadi ketua forum silaturahmi pariwisata Indonesia. Sebagai ketua forum, relasi Pak Beni semakin luas, dan semakin dikenal di dunia pariwisata. Akhirnya Pak Beni diangkat oleh Presiden menjadi Menteri Pariwisata. Saluran mobilitas sosial yang berfungsi pada contoh ini adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 25
				ques: "Tarik ulur peran dalam penanganan kasus korupsi antara KPK dan Kepolisian semakin lama tidak bisa dihindari. Konflik tersebut menyebabkan Presiden terlibat untuk mengatur kewenangan masing-masing lembaga. Langkah tepat yang diambil Presiden untuk mengatasi konflik tersebut adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 26
				ques: "Seorang pegawai mendengarkan musik dengan volume cukup keras ketika sedang bekerja, tanpa memedulikan teman atau orang-orang di sekitarnya yang juga sedang bekerja dan tidak menyukai suara musik yang keras. Akibatnya, antara ia dan teman-temannya sering terjadi konflik. Konflik demikian disebabkan karena adanya perbedaan ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 27
				ques: "Masyarakat sekitar daerah pesisir, cenderung memiliki struktur sosial yang terbuka, lebih dinamis, dan heterogen. Sedangkan masyarakat yang jauh dari pesisir, cenderung lebih tertutup, statis, dan homogen. Kemajemukan atau perbedaan sosial tersebut, disebabkan oleh faktor ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 28
				ques: "Perhatikan gambar berikut!<br>gambar<br>Struktur majemuk di atas berpotensi terjadinya", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 29
				ques: "Perhatikan gambar berikut!<br>gambar<br>Dari stratifikasi tersebut yang menempati posisi kelas atas adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 30
				ques: "Pengelompokan anggota masyarakat berdasarkan ras, misal Australoid, Mongoloid, Caucasoid, dan Negroid merupakan keanekaragaman dalam membentuk struktur sosial yang terjadi berdasarkan parameter ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 31
				ques: "Salah satu fungsi DPR sebagai badan legislatif adalah membuat UU bagi pelaksanaan jalannya pemerintahan.<br>Tujuan lembaga politik tersebut adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 32
				ques: "Pada lembaga ekonomi, aktivitas pengeluaran barang dari produsen ke konsumen diatur oleh tata cara untuk menjalin hubungan baik antara pembeli dan penjual sesuai ketersediaan barang. Fungsi diadakannya tata cara tersebut adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 33
				ques: "Lembaga pendidikan merupakan tempat berlangsungnya kegiatan pembelajaran siswa untuk menimba ilmu pengetahuan demi masa depan siswa. Pada hakikatnya, fungsi utama lembaga tersebut adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 34
				ques: "Dinda terpilih menjadi ketua OSIS. Meskipun menjadi ketua OSIS, tidak mengurangi tugas pokok Dinda sebagai pelajar sehingga Dinda tidak pernah ketinggalan dalam hal pelajaran. Salah satu fungsi laten lembaga pendidikan pada ilustrasi di atas adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 35
				ques: "Globalisasi memudahkan generasi muda menikmati musik, film, dan produk budaya asing lainnya. Hal ini berpotensi runtuhnya budaya luhur bangsa yang dilupakan oleh generasi mudanya. Solusi dari gejala ini adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 36
				ques: "Lembaga kepolisian diperlukan masyarakat dalam rangka memperoleh tatanan kehidupan yang harmoni di antara warga masyarakat. Bila terjadi penyimpangan ukum dari anggota masyarakat maka lembaga tersebut diharapkan dapat memulihkan pada tatanan yang benar.<br>Pembentukan lembaga tersebut bertujuan untuk ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 37
				ques: "Perhatikan beberapa pernyataan berikut!<br>(1) Pertentangan atau konflik antarkelompok dalam masyarakat<br>(2) Terjadinya revolusi atau pemberontakan dalam suatu masyarakat<br>(3) Terjadinya akulturasi dan asimilasi budaya secara massive<br>(4) Terlibat perang dengan negara lain yang bersengketa<br>(5) Perkawinan antarras yang disebut amalga masi<br><br>Yang merupakan faktor penyebab perubahan yang berasal dari luar masyarakat adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 38
				ques: "Transaksi keuangan antarnegara kini tidak harus dengan membawa uang tunai, tetapi bisa menggunakan internet banking. Kemudahan transaksi melalui teknologi internet tersebut merupakan akibat dari adanya ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 39
				ques: "Operasi pasar dilakukan oleh pemerintah selama bulan Ramadan untuk menjamin harga kebutuhan pokok tidak naik. Aktivitas tersebut berkaitan dengan tujuan politik pemerintah, yaitu ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 40
				ques: "Proses globalisasi tidak hanya membawa dampak positif, tetapi juga membawa ekses seperti perilaku hidup bersenang-senang tanpa memedulikan lingkungan sekitar. Dampak negatif perilaku tersebut ditinjau dari sudut sosiologis adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 41
				ques: "Sejak Reformasi tahun 1998, kehidupan multipartai dalam sistem politik Indonesia semakin kompleks. Puluhan partai politik turut serta dalam pemilu. Dampak positif bagi masyarakat dalam menyalurkan aspirasi adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 42
				ques: "Perhatikan gambar berikut! [gambar] Bentuk proses perubahan sosial seperti pada gambar adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 43
				ques: "Perhatikan gejala dinamika sosial berikut!<br>(1) Rekrutmen sosial yang tidak lagi dibatasi oleh perbedaan agama, suku bangsa, ras, atau golongan<br>(2) Semakin banyaknya jumlah kelompok sosial mengakomodasi kepentingan organisasi tertentu<br>(3) Pola hubungan antara pekerja dengan majikan menjadi buruk karena sistem pengupahan yang murah<br>(4) Semakin kompleksnya lembaga atau pranata sosial yang diperlukan untuk menata aktivitas warga masyarakat<br>(5) Rekayasa garam untuk memunculkan hujan buatan di wilayah kering<br><br>Yang termasuk kategori perubahan sosial direncanakan adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 44
				ques: "Presentasi laporan hasil penelitian merupakan kegiatan lanjutan sebagai tanggung jawab peneliti untuk menindaklanjuti hasil temuan di lapangan. Dalam presentasi penelitian dihadirkan pihak-pihak terkait disesuaikan dengan materi dan kajian dalam penelitian. Kegunaan presentasi laporan penelitian tersebut untuk perkembangan keilmuan sosiologi adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 45
				ques: "Beberapa bagian dalam laporan penelitian:<br>(1) Latar belakang masalah<br>(2) Kerangka teori<br>(3) Rumusan masalah<br>(4) Kajian teori dan hipotesis<br>(5) Tujuan dan manfaat penelitian<br><br>Bab pendahuluan dari suatu laporan penelitian terdiri atas ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 46
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 47
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 48
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 49
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 50
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			}
			
		]
	};
	
	var options = {		
		intro: "Masukkan pembukaan di sini",
		help: "Kunjungi www.edufunia.com untuk bantuan",
		allRandom: false,
		addToEnd: "Terakhir",
		fxType: 0,
		title: "Soal latihan"
	};
	
	//$( "#fxType0" ).jQuizMe( quiz, options );
	
	//options.title = "fxType 1";
	//options.fxType = 1;
	//$( "#fxType1" ).jQuizMe( quiz, options );	
	//hanya baris berikut ini aja yang dipakai
	options.title = "Soal latihan matematika";
	options.fxType = 2; //ini berhubungan dg kode css di header terkait model animasi
	options.numOfQuizQues = 0; //membatasi pertanyaan yang mau ditanyakan, nilai 0 - total pertanyaan
	options.showFeedback = false; //ini akan menampilkan feedback tiap pertanyaan atau tidak, true berarti ditampilkan, nilai default adalah true, akan berakibat mendisable opsi retry pada pertanyaan
	$( "#fxType2" ).jQuizMe( quiz, options );
	//akhir baris yang dipakai
	
	options.title = "fxType 3";
	options.fxType = 3
	$( "#fxType3" ).jQuizMe( quiz, options );
	
	options.title = "fxSpeed: slow";
	options.fxSpeed = "slow";
	$( "#fxSpeed1" ).jQuizMe( quiz, options );
	
	options.title = "fxSpeed: normal";
	options.fxSpeed = "normal";
	$( "#fxSpeed2" ).jQuizMe( quiz, options );
	
	options.title = "fxSpeed: fast";
	options.fxSpeed = "fast";
	$( "#fxSpeed3" ).jQuizMe( quiz, options );
	
	options.title = "fxCode";
	options.fxCode = function( el, on, spd ){ 
		if( on ){
			el.slideDown( spd );
		}
		else{
			el.fadeOut( spd );
		}
	};
	$( "#fxCode" ).jQuizMe( quiz, options );
});