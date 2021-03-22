function ask(a, yes, no) {
  if (a > 18) {
    yes();
  } else {
    no();
  }
}

let yesFunc = () => console.log("yes");
let noFunc = () => console.log("no");

ask(16, yesFunc, noFunc);
ask(
  16,
  () => console.log("yes"),
  () => console.log("no")
);
