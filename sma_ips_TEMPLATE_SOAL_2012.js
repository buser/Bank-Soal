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
				ques: "", //question
				ans: "", // answer
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"  // answer information.
			},
			{	//soal 2
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 3
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 4
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 5
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 6
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 7
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 8
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 9
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 1O
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 11
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
				ansInfo : "edufunia.com"
			},
			{	//soal 12
				ques: "", 
				ans: "",
				ansSel: ["","","","",""],
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