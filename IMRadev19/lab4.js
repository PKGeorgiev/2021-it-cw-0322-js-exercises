function sum(a, b)
{
    return a + b;
}

let sumFunc = function (a, b)
{
    return a + b;
};

let sumSunArrow = (a, b) => a + b;
let sumSunArrowWithBody = (a, b) => 
{
    a++;
    return a + b;
}

console.log(sumFunc.toString());
console.log(sumFunc(5, 4));
console.log(sumSuncArrowWithBody(5, 4));