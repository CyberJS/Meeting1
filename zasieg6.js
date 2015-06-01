//jak zachowa się kod? po kolei
var foo;

try{
var kloc = 333;
	foo.length; // tutaj nam sie wysypie.

	}
catch(err){
	var kloc2 = 333;
	console.log(err);
}

console.log(kloc2);
console.log(kloc);
console.log(err);
