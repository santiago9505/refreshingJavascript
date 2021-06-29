Boolean(0); //false
var ten = Boolean(10); //true
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

Boolean(" "); //true
Boolean("a"); //true
Boolean(1); //true
Boolean([]); //true
Boolean({}); //true
Boolean(function cocinar() {}); //true

let sum = true + true;
console.log(typeof sum);
