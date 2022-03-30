// Cjelobrojno dijeljenje

var a = 1;
var b = 2;

var modulo = a % b; // var modulo = 1 % 2;
modulo

// Logički operatori 

var x = true;
var y = false;
var z = "True";

console.log(!!z);  // ! - negacija 

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// Relacijski operatori 

var x = 123;
var y = "123";

console.log(x == y);  // == - provjera vrijednosti 
console.log(x === y); //=== - ptovjera tipa i vrijednosti 
console.log(x > y);




var x = false;
var y = 0;    // gleda s ljeva na desno, i prci truoe do kojeg dode ga ispisuje

console.log(x || y || 'Hello');    // || - OR


//primjer brejka

var x = 4;
var y;

switch (x) {
    case 4: y = 'A'; break;
    case 3: y = 'B'; break;
    case 2: y = 'C';
    case 1: y = 'D';
    default: // nothing
}

// petlje

var x = 0;
while (x < 10) {
    x++;
    console.log(x);

}

var y = 0;
do {
    y++;
    console.log(y);
} while (y < 10);

var text = "abcdefghijklljm";
var numberOfA = 0;
for (var i = 0; i < text.length; i++){
    if (text [i] === 'a');{
        numberOfA++;
    }
}