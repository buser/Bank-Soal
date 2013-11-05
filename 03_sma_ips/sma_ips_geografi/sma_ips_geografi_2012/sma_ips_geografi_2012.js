/*

*/
$( function($){
	var quiz = {
		"multiList" : [
			{	//soal 1
				ques: "Pernyataan:<br>(1) perkebunan teh terdapat di daerah yang memiliki iklim sejuk;<br>(2) kerusakan hutan akibat penebangan ilegal; <br>(3) penduduk menjual hasil panen ke pasar;<br>(4) jaringan jalan mengikuti relief gunung;<br>(5) kegiatan ekonomi penduduk sesuai potensi wilayah.<br>Fenomena yang tergolong aspek fisik terdapat pada angka ....", //question
				ans: "(1), (2), dan (4)", // answer
				ansSel: [ "(1), (2), dan (3)",null,"(1), (3), dan (5)","(2), (4), dan (5)","(3), (4), dan (5)"],
				ansInfo : "edufunia.com"  // answer information.
			},
			{	//soal 2
				ques: "Penduduk pedesaan menjual hasil pertanian dan perkebunan ke kota dan dari perkotaan penduduk membeli berbagai jenis kebutuhan hidup seperti: pakaian, peralatan elektronik, dan kendaraan. <br> Prinsip geografi yang berkaitan dengan hal tersebut adalah ....", 
				ans: "prinsip interelasi",
				ansSel: [ "prinsip korologi",null,"prinsip distribusi","prinsip interaksi","prinsip deskripsi"],
				ansInfo : "edufunia.com"
			},
			{	//soal 3
				ques:"Banjir bandang yang melanda kota Padang dan kabupaten Padang Pariaman Sumatera Barat 24 Juli 2012, berakibat rusaknya pemukiman penduduk, perkantoran, dan saluran irigasi di daerah tersebut. <br> Pendekatan geografi yang digunakan untuk mengkaji fenomena tersebut adalah ....",
				ans:"pendekatan kelingkungan",				
				ansSel : [ "pendekatan korelasi","pendekatan keruangan","pendekatan kompleks kewilayahan","pendekatan regional",null],
				ansInfo : "edufunia.com"
			},
			{	//soal 4
				ques: "Pola pemukiman di sepanjang sungai dan jalan raya cenderung memanjang mengikuti sungai dan jalan raya, sedang pemukiman di dataran rendah cenderung mengelompok. <br> Konsep geografi yang berkaitan dengan hal tersebut adalah ....", 
				ans: "konsep pola",
				ansSel: ["konsep lokasi","konsep morfologi","konsep aglomerasi",null,"konsep interaksi"],
				ansInfo : "edufunia.com"
			},
			{	//soal 5
				ques: "Ciri khas proses pembentukan Tatasurya menurut Teori Pasang Surut adalah ....", 
				ans: "planet-planet berasal dari material Matahari",
				ansSel: ["Matahari terbentuk bersama dengan Tatasurya","planet yang terbentuk ukurannya sama","planet-planet berasal dari gumpalan kabut awan","Tatasurya terbentuk dari ledakan besar Matahari",null],
				ansInfo : "edufunia.com"
			},
			{	//soal 6
				ques: "Akibat yang ditimbulkan oleh dua lempeng yang saling bertumbukan seperti antara lempeng Eurasia dengan India adalah terbentuknya ....", 
				ans: "Pegunungan Himalaya",
				ansSel: [null,"Pegunungan Rockey","Pegunungan Andes","Palung Mindanao","Basin Laut Banda"],
				ansInfo : "edufunia.com"
			},
			{	//soal 7
				ques: "Pernyataan:<br> (1) kesamaan fosil di pantai timur Amerika Selatan dengan pantai barat Afrika;<br> (2) kesamaan struktur batuan di pantai barat Amerika Selatan dengan pantai barat Afrika;<br> (3) pulau Greenland mendekati benua Eropa;<br> (4) samudera Atlantik semakin luas;<br> (5) benua Amerika bergerak ke arah barat.<br> Bukti gerakan lempeng tektonik menurut Alfred Wegener terdapat pada angka ....", 
				ans: "(1), (2), dan (4)",
				ansSel: ["(1), (2), dan (3)",null,"(1), (4), dan (5)","(2), (3), dan (5)","(3), (4), dan (5)"],
				ansInfo : "edufunia.com"
			},
			{	//soal 8
				ques: "Ciri-ciri planet:<br> (1) tidak memiliki atmosfer;<br> (2) perbedaan suhu bagian terang dan gelap kontras;<br> (3) merupakan planet terkecil dalam Tatasurya;<br> (4) jarak rata-rata ke Matahari = 58 juta km.<br> Planet yang sesuai dengan ciri di atas adalah ....", 
				ans: "Merkurius",
				ansSel: ["Venus",null,"Neptunus","Saturnus","Uranus"],
				ansInfo : "edufunia.com"
			},
			{	//soal 9
				ques: "Ciri khas teori <i>The Oscillating theory</i> tentang pembentukan alam raya adalah adanya....", 
				ans: "siklus materi",
				ansSel: ["reaksi pada inti massa","zat baru selalu diciptakan","reaksi berantai","materi saling menjauh",null],
				ansInfo : "edufunia.com"
			},
			{	//soal 10
				ques: "Proses pendinginan dan metamorfosis pada gambar siklus batuan ditunjukkan angka ....<br><img src='sma_ips_geografi_2012_10.jpg'>", 
				ans: "1 dan 3",
				ansSel: ["1 dan 2",null,"1 dan 4","2 dan 3","3 dan 4"],
				ansInfo : "edufunia.com"
			},
			{	//soal 11
				ques: "Tindakan terbaik yang harus dilakukan saat berada di dalam ruangan/bangunan bila terjadi gempa adalah....", 
				ans: "berlindung di bawah meja atau benda yang kokoh",
				ansSel: ["menelepon pihak berwajib untuk memberitahu telah terjadi gempa","berteriak dengan kencang meminta tolong pada orang lain","diam di tempat hingga gempa berakhir dan bersikap tenang",null,"secepatnya keluar gedung dengan menggunakan lift"],
				ansInfo : "edufunia.com"
			},
			{	//soal 12
				ques: "Gejala gunung api:<br>(1) intrusi magma;<br>(2) ekstrusi magma;<br>(3) erupsi eksplosif;<br>(4) munculnya geyser;<br>(5) erupsi areal.<br>Gejala vulkanisme terdapat pada angka ....", 
				ans: "(2), (3), dan (5)",
				ansSel: ["(1), (3), dan (4) ","(1), (4), dan (5)","(2), (3), dan (4)",null,"(3), (4), dan (5)"],
				ansInfo : "edufunia.com"
			},
			{	//soal 13
				ques: "Faktor penyebab gempa Bumi tektonik memberikan dampak korban yang besar adalah ....", 
				ans: "tumbukan antar lempeng yang meliputi wilayah yang sangat luas",
				ansSel: ["peristiwa intrusi magma yang membentuk batuan beku","aktivitas vulkanisme karena pergerakan dan tekanan magmatis",null,"penurunan dasar laut dalam jangka waktu yang sangat lama","aktivitas vulkanisme yang berangkai membentuk jalur yang memanjang"],
				ansInfo : "edufunia.com"
			},
			{	//soal 14
				ques: "Pernyataan: <br>(1) manusia; <br>(2) tekstur batuan; <br>(3) batuan induk; <br>(4) iklim; <br>(5) topografi.", 
				ans: "(3), (4), dan (5)",
				ansSel: ["(1), (2), dan (3)","(1), (3), dan (4)","(2), (3), dan (4)","(2), (3), dan (5)",null],
				ansInfo : "edufunia.com"
			},
			{	//soal 15
				ques: "Pernyataan:<br>(1) temperatur rata-rata bulan terpanas 20° C;<br>(2) suhu rata-rata tahunan tinggi karena berada di daerah katulistiwa;<br>(3) bebas dari angin taifun karena terletak pada lintang rendah;<br>(4) pada bulan kering jumlah hujan kurang dari 30 m;<br>(5) kelembaban udara tinggi karena berbentuk kepulauan.<br>Ciri-ciri iklim di wilayah Indonesia terdapat pada angka ....", 
				ans: "(2), (3), dan (5)",
				ansSel: ["(1), (3), dan (4)","(1), (4), dan (5)","(2), (3), dan (4)",null,"(3), (4), dan (5)"],
				ansInfo : "edufunia.com"
			},
			{	//soal 16
				ques: "Pola aliran sungai di daerah yang relatif datar, dengan ciri anak-anak sungai bermuara pada sungai induk secara tidak teratur, membentuk sudut tumpul dan lancip adalah ....", 
				ans: "pola dendritik",
				ansSel: ["pola radial sentripetal","pola radial sentrifugal",null,"pola anular","pola trellis"],
				ansInfo : "edufunia.com"
			},
			{	//soal 17
				ques: "Faktor-faktor yang memengaruhi infiltrasi di suatu daerah ....", 
				ans: "kemiringan lereng dan permeabilitas tanah",
				ansSel: ["kedalaman dan permeabilitas tanah",null,"sudut datang sinar Matahari dan kemiringan lereng","kemiringan lereng dan sedimentasi","kemiringan lereng dan kedalaman"],
				ansInfo : "edufunia.com"
			},
			{	//soal 18
				ques: "Angka 2 sesuai gambar siklus hidrologi adalah.... <br><img src='sma_ips_geografi_2012_18.jpg'>", 
				ans: "evaporasi",
				ansSel: ["infiltrasi",null,"kondensasi","curahan","penyerapan"],
				ansInfo : "edufunia.com"
			},
			{	//soal 19
				ques: "Wilayah Indonesia yang mengalami musim hujan sesuai arah angin (April-Oktober) seperti gambar adalah ....<br><img src='sma_ips_geografi_2012_19.jpg'>", 
				ans: "Nusa Tenggara dan Bali",
				ansSel: [null,"Sumatera dan Jawa","Kalimantan dan Maluku","Sulawesi dan Papua","Nusa Tenggara dan Jawa"],
				ansInfo : "edufunia.com"
			},
			{	//soal 20
				ques: "Dampak pertemuan arus Kuroshio dan Oyashio bagi Jepang adalah ...", 
				ans: "Jepang tumbuh sebagai negara penghasil ikan",
				ansSel: ["jalur lalulintas Jepang banyak yang membeku","musim dingin pelabuhan di Jepang tidak membeku","aktivitas perekonomian Jepang terganggu di musim dingin",null,"musim dingin pelabuhan-pelabuhan di Jepang membeku"],
				ansInfo : "edufunia.com"
			},
			{	//soal 21
				ques: "Hewan/fauna asli dari daerah Papua adalah ....", 
				ans: "burung kasuari",
				ansSel: [null,"babi rusa","burung elang","komodo","badak bercula satu"],
				ansInfo : "edufunia.com"
			},
			{	//soal 22
				ques: "Persebaran hutan Indonesia secara berurutan dari barat ke timur adalah ....", 
				ans: "hutan hujan tropik - hutan musim - sabana tropik",
				ansSel: ["hutan musim - hutan hujan tropik - sabana tropik","hutan musim - sabana tropik - hutan hujan tropik",null,"hutan hujan tropik - sabana tropik - hujan musim","sabana tropik - hutan musim - hutan hujan tropik"],
				ansInfo : "edufunia.com"
			},
			{	//soal 23
				ques: "Daerah sabana di Nusa Tenggara Timur dan Sulawesi Selatan dimanfaatkan penduduk untuk usaha ....", 
				ans: "peternakan",
				ansSel: ["perkayuan","perladangan",null,"pertanian","perkebunan"],
				ansInfo : "edufunia.com"
			},
			{	//soal 24
				ques: "Faktor fisiografik yang berpengaruh terhadap flora dan fauna di muka bumi adalah ....", 
				ans: "topografi dan ketinggian",
				ansSel: ["suhu dan curah hujan","ketinggian dan curah hujan",null,"suhu dan arah angin","topografi dan suhu"],
				ansInfo : "edufunia.com"
			},
			{	//soal 25
				ques: "Pergerakan penduduk dari daerah seperti Karawang, Bekasi, Bogor dan Tangerang menuju DKI Jakarta tempat ia bekerja setiap harinya semakin membuat tingginya tingkat kemacetan.<br>Pola pergerakan tersebut dapat digolongkan sebagai ....", 
				ans: "migrasi sirkuler",
				ansSel: ["ruralisasi","transmigrasi",null,"migrasi musiman","urbanisasi"],
				ansInfo : "edufunia.com"
			},
			{	//soal 26
				ques: "Dampak dari pertumbuhan penduduk yang tinggi adalah ....", 
				ans: "beban ketergantungan akan tinggi",
				ansSel: [null,"seks rasio tidak akan imbang","jumlah angkatan kerja meningkat","migrasi penduduk semakin tinggi","arus urbanisasi semakin tinggi"],
				ansInfo : "edufunia.com"
			},
			{	//soal 27
				ques: "Faktor-faktor yang menyebabkan dinamika penduduk di suatu daerah adalah ....", 
				ans: "kelahiran, kematian, dan migrasi",
				ansSel: [null,"kematian, kepadatan, dan ketergantungan","migrasi, kepadatan, dan ketergantungan","kepadatan, mobilitas, dan mata pencarian","kepadatan, mobilitas, dan ketergantungan"],
				ansInfo : "edufunia.com"
			},
			{	//soal 28
				ques: "Klasifikasi sumber daya alam yang tidak dapat diperbarui dan termasuk bahan galian golongan A adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 29
				ques: "Faktor penghambat dalam penggunaan sumber daya alam adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 30
				ques: "Ciri pembangunan berkelanjutan ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 31
				ques: "Pemanfaatan sumber daya laut yang sesuai dengan pembangunan berkelanjutan adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 32
				ques: "Meningkatnya emisi gas rumah kaca dapat mengakibatkan terjadinya perubahan iklim global. Upaya yang dilakukan untuk mengendalikan permasalahan di atas adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 33
				ques: "<img src='sma_ips_geografi_2012_33.jpg'><br>Wilayah yang diberi tanda X pada peta adalah wilayah Konservasi ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 34
				ques: "<img src='sma_ips_geografi_2012_34.jpg'><br>Ketinggian titik A sesuai ilustrasi gambar adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 35
				ques: "<img src='sma_ips_geografi_2012_35.jpg'><br>Skala peta 1 sesuai ilustrasi gambar adalah....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 36
				ques: "Jenis-jenis peta:<br>- peta Topografi;<br>- peta Curah Hujan;<br>- peta Jenis Tanah.<br>Informasi yang diperoleh dari peta tersebut adalah untuk menentukan lokasi kegiatan ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 37
				ques: "Siswa kelas tiga akan mengadakan perpisahan dengan mendaki gunung maka jenis peta yang dibutuhkan ketua regu adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 38
				ques: "Pemanfaatan citra dalam bidang pertanian adalah perekaman ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 39
				ques: "Karakteristik obyek pada citra:<br>(1) bentuk dan ukuran rumah sama;<br>(2) pola perumahan memanjang mengikuti jalan tanah;<br>(3) jarak rumah satu sama lain sama;<br>(4) sekitar rumah terdapat pekarangan yang luasnya sama;<br>(5) tampak ada tanaman dari bertekstur sedang sampai kasar.<br>Obyek yang tergambar kemungkinan pemukiman di daerah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 40
				ques: "<img src='sma_ips_geografi_2012_40.jpg'><br>Jika pabrik gula pasir didirikan di wilayah perkebunan maka pertimbangannya adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 41
				ques: "Pernyataan:<br>(1) manajemen pemilihan jaringan jalan;<br>(2) pemilihan lokasi proyek;<br>(3) analisis kesesuaian rute;<br>(4) mengindentifikasi fenomena perusahaan penduduk;<br>(5) melakukan evaluasi terhadap batas wilayah;<br>Manfaat Sistem informasi Geografis untuk pengelolaan jaringan jalan terdapat pada angka ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 42
				ques: "Pernyataan:<br>(1) data dapat dikelola dalam format yang kompak dan jelas;<br>(2) data dapat dianalisis secara efisien;<br>(3) data mudah untuk dimanipulasi;<br>(4) data dapat diperjualbelikan;<br>(5) data harus dijaga karena sulit mendapat kannya.<br>Keunggulan dari Sistem Informasi Geografis terdapat pada angka ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 43
				ques: "Ciri-ciri masyarakat desa:<br>(1) ketergantungan pada alam;<br>(2) adat-istiadat mengalami transisi;<br>(3) lembaga-lembaga sosial masih sederhana;<br>(4) mata pencaharian mulai heterogen;<br>(5) pendidikan dan keterampilan masih rendah.<br>Klasifikasi desa swakarya terdapat pada angka ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 44
				ques: "<img src='sma_ips_geografi_2012_44.jpg'><br>Angka 5 pada gambar sesuai teori sektor menunjukkan zona ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 45
				ques: "<img src='sma_ips_geografi_2012_45.jpg'><br>Pola pemukiman desa yang terbentuk pada gambar adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 46
				ques: "<img src='sma_ips_geografi_2012_46.jpg'><br>Lokasi titik henti dari interaksi desa A ke kota B sesuai ilustrasi gambar adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 47
				ques: "<img src='sma_ips_geografi_2012_47.jpg'><br>Arah pembangunan wilayah yang pesat seperti gambar adalah dari pusat kegiatan menuju ke....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 48
				ques: "<img src='sma_ips_geografi_2012_48.jpg'><br>Negara berkembang yang terdapat pada peta adalah ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 49
				ques: "Ciri-ciri negara:<br>(1) penguasaan teknologi tinggi;<br>(2) tingkat kelahiran penduduk rendah;<br>(3) tingkat pendapatan penduduk tinggi;<br>(4) tingkat pendidikan penduduk rendah;<br>(5) sumber perekonomian terbesar dari sektor agraris.<br>Ciri dari negara maju terdapat pada angka ....", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 50
				ques: "Model pembangunan wilayah negara berkembang adalah ....", 
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