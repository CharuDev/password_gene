// var length = document.getElementById("length").value;
// var upper = document.getElementById("upper");
// var lower = document.getElementById("lower");
// var symbol = document.getElementById("symbol");
// var num = document.getElementById("num");
var button = document.getElementById("button");
var generate = document.getElementById("generate");


button.addEventListener("click",()=>{
    
    var upp=['A',"B","C","D","E","F","G","H","I","J","K","L","M","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var low = ["a","b","c","d","e","f","g","h","i","h","j","k","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var no= [1,2,3,4,5,6,7,8,9];
    var sym = ["!","@","#","$","%","^","&","*","/"];
    var ranU = Math.floor(Math.random()*upp.length);
    var ranL = Math.floor(Math.random()*low.length);
    var ranno = Math.floor(Math.random()*no.length);
    var ransym =  Math.floor(Math.random()*sym.length);
    var ranU1 = Math.floor(Math.random()*upp.length);
    var ranL2 = Math.floor(Math.random()*low.length);
    var ranno3 = Math.floor(Math.random()*no.length);
    var ransym4 =  Math.floor(Math.random()*sym.length);
    var fup = upp[ranU];
    var flo = low[ranL];
    var fno = no[ranno];
    var fsym = sym[ransym];
    var fup1 = upp[ranU1];
    var flo2 = low[ranL2];
    var fno3 = no[ranno3];
    var fsym4 = sym[ransym4];


    
    generate.textContent = fup+flo+fsym+fno+fup1+flo2+fsym4+fno3

})
