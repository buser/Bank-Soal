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
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 23
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 24
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 25
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 26
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 27
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 28
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 29
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 30
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 31
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 32
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 33
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 34
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 35
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 36
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 37
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 38
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 39
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 40
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 41
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 42
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 43
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 44
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 45
				ques: "", 
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