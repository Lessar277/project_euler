// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

var num1 = 1;
var num2 = 1;
var prod;
var nums = [];
var palindromes = [];

function multiply(a, b) {
    prod = a * b;
    return prod.toString();
}

while (num2 <= 999) {
    for (i = 1; i < 1000; i++) {
        nums.push(multiply(num1, num2));
        num1++;
    }
    num1 = 1;
    num2++;
}

for (i = 0; i < nums.length; i++) {
    var result = nums[i];
    var len = result.length;
    if (result[len - len] === result[len - 1] && result[len - len + 1] === result[len - 2] && result[len - len + 2] === result[len - 3]) {
        palindromes.push(result);
    }
}

palindromes.sort(function(a, b){return a-b});
console.log(palindromes[palindromes.length -1]);

//test
//123
