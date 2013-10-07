/*

*/
$( function($){
	var quiz = {
		"multiList" : [
			{	
				ques: "Persamaan kuadrat yang akar-akarnya 5 dan -2 adalah....<br /> <img src='gbr_soal_mtk/01.png'>", //question
				ans: "B", // answer
				ansSel: [ "A",null,"C","D","E"],
				ansInfo : "More info <a href='http://www.periodictable.com/Elements/079/index.html'>here</a>"  // answer information.
			},
			{
				ques: "Gold", 
				ans: "Au", 
				ansInfo : "Gold-Au <br/>More info <a href='http://www.periodictable.com/Elements/079/index.html'>here</a>"
			},
			{
				ques:"How is this a question?",
				ans:"Just because...",
				retry: 3, //jika salah dapat dicoba 3 kali, opsi ini akan diabaikan jika options.showFeedback bernilai false;
				ansSel : [ "The <i><b>answer</b></i> is below", null, "The answer is above"]
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
	options.numOfQuizQues = 3; //membatasi pertanyaan yang mau ditanyakan, nilai 0 - total pertanyaan
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