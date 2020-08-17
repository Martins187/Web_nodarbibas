//"use strict";
//seciba tagad ir svariga!
console.log("Sveiki pasaule!");
console.log("Sveiki no faila!");

var z,x,y;
z=5;
x=8;
var d = z + x;

y = z + x;
y = z - x;
y = z % x;//= 0

y=z++;// y ir par vienu mazaks
console.log(y,z);
y=++z; // abi vienadi

console.log(d);

z = 1;//number
x = "String"; //string
c = {
    firstname:"Martins"
} //object
c.firstname //string

var v;
console.log(typeof v);
v = "";
console.log(typeof v);

v = [1,2,3,4];
console.log(typeof v);
console.log(typeof v[1]);

console.log(typeof 1 + 2);

v = null;
console.log(typeof v);

v = "a"; //typeof string
var b = 1;

console.log(v + b);

if(2 == 3){ // vai vērtības ir vienādas?
    console.log("ok");
}
else{
    console.log("error");
}

if("2" === 2){ //vai ari tipi ir vienadi?
console.log("here");
}
else{
    console.log("not here");
}

if(true == 1){
    console.log("here");
}
else{
    console.log("not here");
}

var i;
for(i = 0; i < 10; i++){
    console.log("mans: " + i);
    if(i === 5){
        continue;
    }
    if(i=== 6){
        break;
    }
}

i = 0;
while(i<10){
    console.log("Mans: " + i);
    i++
}