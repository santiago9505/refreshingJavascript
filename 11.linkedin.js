const name = "Santiago";
const lastName = "Guáqueta";
let platform = "linkedin";

const sayHi = () => {
  if (platform === "linkedin") {
    return `${name} ${lastName}, Business Administration | Frontend Developer | Product | Chess Lover | Lifelong Learning`;
  } else {
    console.log("unemployed");
  }
};
