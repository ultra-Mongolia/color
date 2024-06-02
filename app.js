// massive/Array -> []
// function name(){}
// if(){} else {}
// for(i=0;i<=10;i++){}

//var a = 5;
//var toonuud = [5,3,0,10,36,25,85];
//var test=["text",5,true,false,null,3.14];
//console.log(toonuud);
// index : utga-iin bairshil. 0-ees ehelne
//console.log(toonuud[3]);
// indexed suuliin utgiig gargahdaa
//console.log("length:"+toonuud.length);
//console.log(toonuud[toonuud.length-1]);

//console.log(test[0]);
//console.log(test[test.length-1]);

//for(i=0;i<=toonuud.length-1;i++){
//	console.log(toonuud[i])
//}

//var like = [12,45,12,78,14];
//console.log((like[0])*(like[like.length-1]));

//var log = [11,45,13,89,46];
//	for(i=0;i<=log.length-1;i++){
//	if(log[i]%2==0){
//		console.log("tegsh:"+log[i]);
//	}else{
//		console.log("sondgoi:"+log[i]);
//	}}
	
//var sub = [42,53,16,75,18,83,61,52,86,44];
//var niilber=0;
//var urjver = 1;
//for(i=0;i<=sub.length-1;i++){
//	urjver = urjver * sub[i];
//	niilber = niilber + sub[i];
//	}
//	console.log(urjver)
//	console.log(niilber)

var ungu=["red","blue","green","purple","black","gray","skyblue"];
var body = document.getElementsByTagName('body')[0];
var ol = document.getElementsByTagName('ol')[-1];
var i=-1;
function color(){
    i++;
    if(i>ungu.length-1){
        i=0;
    }
	body.style.backgroundColor=ungu[i];
}
function buts(){
	i--;
	if(i<0){
       i=ungu.length-1;
    }
	 body.style.backgroundColor=ungu[i];
}
var st;
function auto(){
	i++;
	if(i>ungu.length-1){
		i=0;
	}
	body.style.background=ungu[i];
	up = setTimeout(auto,1000)
}
//clearTimeout -> stop hiine
function stop(){
	clearInterval(up);
}
function random(){
var random = Math.floor(Math.random()*(ungu.length-1));
body.style.background=ungu[random];
}