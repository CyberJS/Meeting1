
var dd = new Date();
var n = dd.getTime();
x = n%2;
if(x !== 0){
  document.getElementById("count").innerHTML = "5";
}else{
  document.getElementById("count").innerHTML = "66";
}

function action(){

  cc = document.getElementById("count").innerHTML;
  cc = parseInt(cc);
  add();
  function add(){
    z = parseInt(cc) * 5;
    if(z>100){
      cc  = cc + 13;
    }else{
      cc  = cc - 13;
    }
    document.getElementById("count").innerHTML = cc;
    var z;
    (function IIFE(){
      document.getElementById("d").innerHTML = "dd" in window ? dd : 5;
    }());
  }
  document.getElementById("z").innerHTML = z;

}
