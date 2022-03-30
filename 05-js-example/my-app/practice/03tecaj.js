//var r = 5;
// NIŽE PRVI NAČIN IZRAČUNA 
// var v= (4/3) * 3.14 * r * r * r
//DRUGI NAČIN NIŽE
//var v = (4 / 3) * Math.PI * Math.pow(r, 3);
//console.log(v)

/*
var x = "Lorem ipsum",

    y = 2345,

    z = "2345",

    q = false,

    w;


x += "3" + 1;

var baaa = "b" + "a" + +"a" + "a";


console.log(+"-1"); Nerješen zadatak */

// stringovi niže u primjeru!!

var firstName = "Luca";

console.log("Hello" + firstName);
console.log("your name is" + firstName.length + "characters long");
console.log("your fantasy name is" + firstName.replaceAll('i','y'));

//zadatak 

var text = "Lorem ipsum dolar sit amet"; 
var lenght = text.langht;

var sit = text.slice(18, 22);
console.log(sit);
text.replace ('amet', 'elit');
var newText = text + 'consectetur adipiscing elit';
text.toLocaleUpperCase();
text.trim();
text.charAt(12);


/*zadaća lenght-broji razmake
prebrojati sve znakove u stringu ali nećebrpjati razmake*/

