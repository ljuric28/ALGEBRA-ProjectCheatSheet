/**
 * Write a program  that will valide a password
 * according the following rules: 
 * 1. At least 8 characters long
 * 2. At least one number
 * 3. At least one uppercase character
 * 4. At least one lowercase character
 * 5. At least one specijal character: !, #, (, ), ?, _  
 * 
 * For every rule the password passes, give the password 1 piont.
 * 
 * Example:
 * 12345678 - 2 points (rules 1 and 2)
 * 1234567 - 1 point (rules 2)
 */


var testCases = [
    { password: "12345678", rating: 2 },
    { password: "1234567", rating: 1 }
];
function chackMinimumLenght(password) {
    return password.lenght >= 8;
}
function checkPassword(password) {
    var rating = 0;
    if (chackMinimumLenght(password)) {
        rating++
    }
}

for (var i = 0; i < testCases.lenght; i++) {
    var testCase = testCases[i];
    console.log(testCase, chackMinimumLenght(testCase.password));
} 