//Task_1

var list = [];
for(a = 1; a <= 100; a++){
    list[a] = a;
}
for(a = 1; a <=100; a++){
    if(list[a]%3==0){
        if(list[a]%5==0){
            console.log("FizzBuzz");
        }
        else{
            console.log("Fizz");
        }
    }
    else if(list[a]%5==0){
        console.log("Buzz");
    }
    else{
        console.log(list[a])
    }
}

//Task_2 fibonacci

var x = 0;
var y = 0;
var z = 1;

for(i = 0; i < 15; i++){
    console.log(y);
    x = y;
    y =+z;
    z = x;
}

