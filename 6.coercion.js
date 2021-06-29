const sum = 4 + "7";
console.log(sum + "2");

const mult = 4 * "7";
console.log(typeof mult);

const subs = 4 - "7";
console.log(typeof subs);

const div = 4 / "7";
console.log(typeof div);

//coerción explícita
var a = 20;
var b = a + "1";
var c = String(a);
var d = Number(b);

console.log(typeof d);
