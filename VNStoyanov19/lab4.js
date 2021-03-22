function sum(a, b) {
    return a + b;
}

let sumFunc = function (a, b){
    return a + b;
};

let sumSuncArrow = (a, b) => a + b;
let sumSuncArrowWithBody = function (a, b) => {
    a++;
    return a + b;
}

let fooFunc = () => console.log("foo");

console.log(sumSuncArrow.toString());
console.log(sumFunc(sumFunc(5,4));
console.log(sumSuncArrowWithBody(5, 4));

fooFunc();