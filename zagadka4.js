(function IIFE(){

	console.log(1); 
   setTimeout(function() { 
		console.log(i); 
		for(var i=0;i<5;i++){
			console.log(i); 
		}


	}, 1000); 
	
   setTimeout(function() { console.log(3); }, 0); 
   console.log(4);
 }());

