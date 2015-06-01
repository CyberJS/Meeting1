(function (){
var x =10;

	(function(){
	var y = 11;
	console.log(x,y,z);
	}());
	
	if(true){
		var z =12;
	}
	
	console.log(x);
	console.log(y);
	console.log(z);
}());