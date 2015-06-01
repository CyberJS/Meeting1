function add (x) {
	return function (y) {
		return x + y;
	};
}
var add5 = add(5);
console.log(add5);
var no8 = add5(3);
console.log(no8);
