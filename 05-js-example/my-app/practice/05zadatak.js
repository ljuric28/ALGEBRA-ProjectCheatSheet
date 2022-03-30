/*var num = 0;
while(0 < 20){
console.log("Number = " +num+ "")
}
if(num % 2 == 0){
    console.log("number is even! ");
    num++ 
} else {
    console.log("Number is odd! ");
    num++
}*/

/*
var start = 1;
var end = 20;
for (var i = start; i <= end; i++) {        
    if (i % 2 === 0) {     // parni i neparni brojevi  1/2 rjeseno 
        console.log("Broj " + i + " je paran")
    } else {
        console.log("Broj " + i + " je neparan")
    }
}
console.log(start);
console.log(end);
*/


/*var num = 0;
while(num < 20);
if (num % 2 == 0){
    console.log("Even number " + num);
} 
   else {
    console.log("Odd number " + num)
}*/


/*var names = ["Jhon", "Jane", "Bob", "Milke"];
console.log(names);
names[4] = "Luca";
console.log(names);
while (names) {
    names.push("Jhon");
    console.log(names);
    names++
    if ( names === "Jane"){
        names++

    }
    
    
}*/


var names = ["Jhon", "Jane", "Bob",, "Milke"];

for (var i = 0; i < names.length; i++); {
    console.log(names)
}

//names[5] = "Luca";
names.push("Jurič");

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
    if (names[i] === 'Jane') {
        break;
    }
}

var filteredNames = names.filter(function (item) {
    return item !== 'undefined'
});
console.log(filteredNames);
console.log('-');
names.forEach(item => console.log(item));


/*var names = [1,2,"string",2];

console.log(names);*/



