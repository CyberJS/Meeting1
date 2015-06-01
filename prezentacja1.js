var foo = "bar";

function bar(){
	var foo = "baz";

	function baz(foo){
		foo = "bam";
		bam = "yay";
		console.log(foo);
	}
	baz();
}

bar();
console.log(foo);
console.log(bam);
baz();

