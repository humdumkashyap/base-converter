//This function convert decimal to binary, octal or Hexadecimal
const baseConverter = (base) => (decNumber) => {
  let remains = [],
    rest,
    newNumber = [],
    digits = "0123456789ABCDEF";
  while (decNumber > 0) {
    rest = Math.floor(decNumber % base);
    remains.push(rest);
    decNumber = Math.floor(decNumber / base);
  }

  for (const resto of remains) {
    newNumber.push(digits[resto]);
  }
  return newNumber.reverse().join("");
};

//This function convert binary, octal or Hexadecimal to decimal
const base2Dec = (base) => (number) => {
  let sum = 0,
    newNumber = [];
  for (let i = 0; i < number.length; i++) {
    if (
      number[i] == "A" ||
      number[i] == "B" ||
      number[i] == "C" ||
      number[i] == "D" ||
      number[i] == "E" ||
      number[i] == "F"
    ) {
      newNumber.push(number[i].charCodeAt() - 55);
    } else newNumber.push(number[i]);
  }

  newNumber = newNumber.reverse();
  for (let i = 0; i < newNumber.length; i++) {
    sum += Math.pow(base, i) * newNumber[i];
  }
  return sum;
};

//Event listener run converter function when digit the number

document.querySelector("#Number").addEventListener("keyup", () => {
  let base = document.querySelector("#base").value;
  let number = document.querySelector("#Number").value.toUpperCase();
  let basesNumber = [2, 8, 10, 16];

  //This verify if the number is valid in binary and octal base
  if (base != 10 && base != 16) {
    let verify = number.split("").filter((bases) => bases >= base);
    if (verify.length > 0) {
      return alert("Invalid Number!");
    }
  }

  //loop for verify the base that is converting and hidde it
  for (const bases of basesNumber) {
    if (bases == base) {
      document.querySelector(`.base${bases}`).style.display = "none";
    } else {
      document.querySelector(`.base${bases}`).style.display = "block";
      document.querySelector(`.base${bases}`).innerHTML = `
        Base ${bases}: ${baseConverter(bases)(base2Dec(base)(number))}`;
    }
  }

  document.querySelector(".group.hidden").style.display = "block";
});
