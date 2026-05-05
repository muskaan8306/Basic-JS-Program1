function sumofDigits(num) {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum;
}
let number = 12345;
console.log("The sum of the digits in " + number + " is: " + sumofDigits(number));
