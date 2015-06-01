function foo(){
(function IIFE(){
var bar = "bar";
for(var i =0;i<bar.length;i++){
	console.log(bar.charAt(i));
}
})();
console.log(i);
}
foo();

/*
function foo(){

var bar = "bar";
for(var i =0;i<bar.length;i++){
	console.log(bar.charAt(i));
}

console.log(i);
}
foo();
*/