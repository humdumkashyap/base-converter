const fromSelectOption = document.getElementById("from-select");
const toSelectOption = document.getElementById("to-select");
const from = document.getElementById("from-input");
const to = document.getElementById("to-input");
const error = document.getElementById("error");

let fromTxtBox = "Select",
  toTxtBox = "Select";

fromSelectOption.addEventListener("change", function () {
  fromTxtBox = fromSelectOption.options[fromSelectOption.selectedIndex].text;
  from.placeholder = fromTxtBox + " Number";
});

toSelectOption.addEventListener("change", function () {
  toTxtBox = toSelectOption.options[toSelectOption.selectedIndex].text;
  to.placeholder = toTxtBox + " Number";
});

from.addEventListener("input", function () {
  error.style.display = "none";
});

let fromValue;
document
  .getElementById("convert-button")
  .addEventListener("click", function () {
    switch (fromTxtBox) {
      case "Select":
        fromValue = " ";
        if (/^[""]*$/.test(fromValue)) {
          switch (toTxtBox) {
            case "Select":
              error.style.display = "inherit";
              error.innerText = "Select which Base you want to Covert";
              break;
            case "Decimal":
              error.style.display = "inherit";
              error.innerText = "Select which Base you want to Covert";
              break;
            case "Decimal":
              error.style.display = "inherit";
              error.innerText = "Select which Base you want to Covert";
              break;
            case "Hexadecimal":
              error.style.display = "inherit";
              error.innerText = "Select which Base you want to Covert";
              break;
            case "Octal":
              error.style.display = "inherit";
              error.innerText = "Select which Base you want to Covert";
              break;
          }
        } else {
          error.style.display = "inherit";
          error.innerText = "Select which Base you want to Covert";
          to.value = "";
        }
        break;

      case "Binary":
        fromValue = from.value;
        if (/^[01]*$/.test(fromValue)) {
          switch (toTxtBox) {
            case "Select":
              error.style.display = "inherit";
              error.innerText = "Select which Base you want to Covert";
              to.value = "";
              break;
            case "Decimal":
              to.value = parseInt(fromValue, 2);
              break;
            case "Hexadecimal":
              to.value = parseInt(fromValue, 2).toString(16).toUpperCase();
              break;
            case "Octal":
              to.value = parseInt(fromValue, 2).toString(8);
              break;

            default:
              to.value = fromValue;
          }
        } else {
          error.style.display = "inherit";
          error.innerText = "Invalid " + fromTxtBox + " Number";
          to.value = "";
        }
        break;

      case "Octal":
        fromValue = from.value;
        if (/^[0-7]*$/.test(fromValue)) {
          switch (toTxtBox) {
            case "Select":
              error.style.display = "inherit";
              error.innerText = "Select which Base you want to Covert";
              to.value = "";
              break;

            case "Binary":
              to.value = parseInt(fromValue, 8).toString(2);
              break;
            case "Decimal":
              to.value = parseInt(fromValue, 8);
              break;
            case "Hexadecimal":
              to.value = parseInt(fromValue, 8).toString(16).toUpperCase();
              break;

            default:
              to.value = fromValue;
          }
        } else {
          error.style.display = "inherit";
          error.innerText = "Invalid " + fromTxtBox + " Number";
          to.value = "";
        }
        break;

      case "Decimal":
        fromValue = from.value;
        if (/^[0-9]*$/.test(fromValue)) {
          switch (toTxtBox) {
            case "Select":
              error.style.display = "inherit";
              error.innerText = "Select which Base you want to Covert";
              to.value = "";
              break;
            case "Binary":
              to.value = Math.abs(fromValue).toString(2);
              break;
            case "Hexadecimal":
              to.value = Math.abs(fromValue).toString(16).toUpperCase();
              break;
            case "Octal":
              to.value = Math.abs(fromValue).toString(8);
              break;

            default:
              to.value = fromValue;
          }
        } else {
          error.style.display = "inherit";
          error.innerText = "Invalid " + fromTxtBox + " Number";
          to.value = "";
        }
        break;

      case "Hexadecimal":
        fromValue = from.value;
        if (/^[0-9a-fA-F]*$/.test(fromValue)) {
          switch (toTxtBox) {
            case "Select":
              error.style.display = "inherit";
              error.innerText = "Select which Base you want to Covert";
              to.value = "";
              break;
            case "Binary":
              to.value = parseInt(fromValue, 16).toString(2);
              break;
            case "Decimal":
              to.value = parseInt(fromValue, 16);
              break;
            case "Octal":
              to.value = parseInt(fromValue, 16).toString(8);
              break;
            default:
              to.value = fromValue;
          }
        } else {
          error.style.display = "inherit";
          error.innerText = "Invalid " + fromTxtBox + " Number";
          to.value = "";
        }
        break;
    }
  });
