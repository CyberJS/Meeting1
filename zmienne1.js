//stany zmiennej
var zm1;
var zm2 = 0;
var zm4 = 5;
console.log(zm1);
console.log(zm2);
//console.log(zm3);

if(zm1 === undefined){
	console.log('O1 zm1 is undefined');
}
else{
	console.log('O1 zm1 is defined');
}

zm1  = '1';
if(zm1 == 1){
	console.log('O3 zm1 is 1');
}

if(zm1 === 1){
	console.log('O3 zm1 is 1');
}
else{
console.log('WTF');
}
