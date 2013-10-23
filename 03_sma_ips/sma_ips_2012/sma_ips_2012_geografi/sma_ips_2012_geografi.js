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
				ques: "Proses pendinginan dan metamorfosis pada gambar siklus batuan ditunjukkan angka ....<br><img src='sma_ips_2012_geografi_10.jpg'>", 
				ans: "1 dan 3",
				ansSel: ["1 dan 2",null,"1 dan 4","2 dan 3","3 dan 4"],
				ansInfo : "edufunia.com"
			},
			{	//soal 11
				ques: "Tindakan terbaik yang harus dilakukan saat berada di dalam ruangan/bangunan bila terjadi gempa adalah....", 
				ans: "berlindung di bawah meja atau benda yang kokoh",
				ansSel: ["menelepon pihak berwajib untuk memberitahu telah terjadi gempa","berteriak dengan kencang meminta tolong pada orang lain","diam di tempat hingga gempa berakhir dan bersikap tenang",null,"secepatnya keluar gedung dengan menggu na kan lift"],
				ansInfo : "edufunia.com"
			},
			{	//soal 12
				ques: "Gejala gunung api:<br>(1) intrusi magma;<br>(2) ekstrusi magma;<br>(3) erupsi eksplosif;<br>(4) munculnya geyser;<br>(5) erupsi areal.<br>Gejala vulkanisme terdapat pada angka ....", 
				ans: "(2), (3), dan (5)",
				ansSel: ["(1), (3), dan (4) ","(1), (4), dan (5)","(2), (3), dan (4)",null,"(3), (4), dan (5)"],
				ansInfo : "edufunia.com"
			},
			{	//soal 13
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 14
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 15
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 16
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 17
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 18
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 19
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 20
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 21
				ques: "", 
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