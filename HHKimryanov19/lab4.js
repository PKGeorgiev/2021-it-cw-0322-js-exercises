function product(num1, num2) {
    return num1 * num2;
}

let sumFunc = function product(num1, num2) {
    return num1 * num2;
};

let sumSuncArrow = (a, b) => a + b;

let sumSuncArrowWithBody = (a, b) => {
    a++;
    return a + b;
}
let fooFunc = () => console.log("foo");

console.log(sumSuncArrow.toString());
console.log(sumFunc(5, 4));
console.log(sumSuncArrowWithBody(5,4));

