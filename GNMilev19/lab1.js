function product(a, b = 5) {
  return a * b;
}

function foo() {}

console.log(product(2, 3));
console.log(product(2));
console.log(foo());
