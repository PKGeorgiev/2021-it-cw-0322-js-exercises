function min(x, y) {
    return x + y;
}

let sumFunck = function(x, y)
{
    return x + y;
}

let sumFuncArrow = (x, y) => a + b;
let sumFuncArrowBody = (x, y) => {
    a++;
    return a + b;
}

let fooFunc = () => console.log("Foo");

console.log(sumFunc(5, 4));
console.log(sumFuncArrowBody(5, 4));
