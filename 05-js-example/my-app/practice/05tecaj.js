var names = [1, '2', [], true];
names[0] = "Luca";
names[2][0] = "Jurič";
console.log(names);

for (var i = 0; i < names.length; i++) {
    var element = names[i];
    if (typeof element === "number");
    console.log(element, "is a number");
}
console.log(names);

for (var i = i; i < 4; i++){
names.push(i);
}