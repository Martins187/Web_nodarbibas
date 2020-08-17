var string1 = "mans garais strings";
string1 = string1.trim();
console.log(string1.length);
console.log(string1.indexOf(" "));
var j;
var i;
/*for(i = 0; i < string1.length; i++){
    if(string1[i] === " "){
        j = i;
        while(string1[i] === " "){
            j++
            if(string1[j] === " "){
                string1[j] = "";
            }
        }
    }
}*/

var a = [1,2,4,5];
var b = [];

a = b;
a[5] = 7;
a.push(8);
a.splice(2,3);
b = a.slice(0,1);
function summa(a1, a2){
    return a1 + a2;
}
let a = 1;
var b = 2;
function stupidSum(){
    return a + b;
}
var b = stupidSum();
console.log(stupidSum())

function sumNoVisiem(a,b){
    console.log(a);
    console.log(b);
    console.log(arguments.length);
    var summma = 0;
    for(i = 0; i < arguments.length; i++){
        summma =+ arguments[i]
    }
    return summma;
}


