/*

*/
$( function($){
	var quiz = {
		"multiList" : [
			{	//soal 1
				ques: "Pernyataan:<br>(1) perkebunan teh terdapat di daerah yang memiliki iklim sejuk;<br>(2) kerusakan hutan akibat penebangan ilegal; <br>(3) penduduk menjual hasil panen ke pasar;<br>(4) jaringan jalan mengikuti relief gunung;<br>(5) kegiatan ekonomi penduduk sesuai potensi wilayah.<br>Fenomena yang tergolong aspek fisik terdapat pada angka ....", //question
				ans: "(1), (2), dan (4)", // answer
				ansSel: [ "(1), (2), dan (3)",null,"(1), (3), dan (5)","(2), (4), dan (5)","(3), (4), dan (5)"],
				ansInfo : "More info <a href='http://www.periodictable.com/Elements/079/index.html'>here</a>"  // answer information.
			},
			{	//soal 2
				ques: "Penduduk pedesaan menjual hasil pertanian dan perkebunan ke kota dan dari perkotaan penduduk membeli berbagai jenis kebutuhan hidup seperti: pakaian, peralatan elektronik, dan kendaraan. <br> Prinsip geografi yang berkaitan dengan hal tersebut adalah ....", 
				ans: "prinsip interelasi",
				ansSel: [ "prinsip korologi",null,"prinsip distribusi","prinsip interaksi","prinsip deskripsi"],
				ansInfo : "Gold-Au <br/>More info <a href='http://www.periodictable.com/Elements/079/index.html'>here</a>"
			},
			{	//soal 3
				ques:"Banjir bandang yang melanda kota Padang dan kabupaten Padang Pariaman Sumatera Barat 24 Juli 2012, berakibat rusaknya pemukiman penduduk, perkantoran, dan saluran irigasi di daerah tersebut. <br> Pendekatan geografi yang digunakan untuk mengkaji fenomena tersebut adalah ....",
				ans:"Just because...",				
				ansSel : [ "The <i><b>answer</b></i> is below", null, "The answer is above"],
				ansInfo : "Gold-Au <br/>More info <a href='http://www.periodictable.com/Elements/079/index.html'>here</a>"
			},
			{	//soal 4
				ques: "dfgdfgdfgdg ....", 
				ans: "prinsip interelasi",
				ansSel: [ "prinsip korologi",null,"prinsip distribusi","prinsip interaksi","prinsip deskripsi"],
				ansInfo : "Gold-Au <br/>More info <a href='http://www.periodictable.com/Elements/079/index.html'>here</a>"
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