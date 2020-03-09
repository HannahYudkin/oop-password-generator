class Generator {
    constructor(charType) {
      this.charType = charType;
      this.getCharType(charType)
    }

    getCharType() {
      switch(this.charType) {
        case `Lowercase`:
                return getRandomLowerCaseLetter();
                break;
            case `Uppercase`:
                return getRandomUpperCaseLetter();
                break;
            case `Number`:
                return getRandomNumber();
                break;
            case `Special`:
                return getRandomSpecialCharacter();
                break;
        }
    }

    getRandomLowerCaseLetter() {
      // return (String.fromCharCod/[\W|_]/g;
      return (String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97))).toUpperCase();
    }

    getRandomSpecialCharacter() {
      higherOrLower = Math.random()
      if (higherOrLower < .5) {
        return (String.fromCharCode(Math.floor(Math.random() * (65 - 58) + 58)));
      }
      else {
        return (String.fromCharCode(Math.floor(Math.random() * (48 - 33) + 33)));
      }
    }

    getRandomNumber() {
        return (String.fromCharCode(Math.floor(Math.random() * (58 - 48) + 48)))
    }
}







// class Shape {
//     // Just like constructor functions, classes can accept arguments
//     constructor(area, perimeter) {
//       this.area = area;
//       this.perimeter = perimeter;
//     }
  
//     printInfo() {
//       console.log(`Area: ${this.area}`);
//       console.log(`Perimeter: ${this.perimeter}`);
//     }
//   }
  
//   const shape = new Shape(25, 25);
  
//   shape.printInfo();
























// // Assignment Code
// let generateBtn = document.querySelector("#generate");
// let copyBtn = document.querySelector("#copy");


// // Write password to the #password input
// function writePassword() {
//   prompts();
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// let length = 0;
// let special = false;
// let number = false;
// let lowercase = false;
// let uppercase = false;

// function prompts() {
//   validate();
//   special = confirm("Would you like to use special characters in your password?");
//   number = confirm("Would you like to use numbers in your password?");
//   lowercase = confirm("Would you like to use lowercase letters in your password?");
//   uppercase = confirm("Would you like to use uppercase in your password?");
// }

// function validate() {
//   length = parseInt(prompt("What is the length of your desired password between 8 and 128 characters?"));
//   if ((length < 8) || (length > 128) || ( Number.isInteger(length) === false)) {
//     alert("Pick a valid number!");
//     validate()
//   }
// }

// //let characters = [];
// functionArrays = [];



// //randomly selects value from character array and generates password
// function generatePassword() {
//   let text = "";
//   for (i = 0; i < length; i++) {
//     pushFunctions();
//     //console.log(characters)
//     if (functionArrays.length === 0) {
//       alert("You need to make at least one selection! Try again.")
//       i = length;
//     } else {
//       let rand = functionArrays[Math.floor(Math.random() * functionArrays.length)];
//       text += rand;
//     }
//   }
//   console.log(text)
//   return(text)
// }

// //adds function returns to array based on selections
// function pushFunctions() {
//   if (lowercase) {
//     functionArrays.push(getRandomLowerCaseLetter());
//   }
//   if (uppercase) {
//     functionArrays.push(getRandomUpperCaseLetter());
//   }
//   if (special) {
//     functionArrays.push(getRandomSpecialCharacter());
//   }
//   if (number) {
//     functionArrays.push(getRandomNumber());
//   }
// }

// //returns random lowercase letter
// function getRandomLowerCaseLetter() {
//     return (String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97)));
// }

// //returns random uppercase letter ***** tolocaleuppercase??
// function getRandomUpperCaseLetter() {
//   return (String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97))).toUpperCase();
// }

// //returns random special character
// function getRandomSpecialCharacter() {
//   higherOrLower = Math.random()
//   if (higherOrLower < .5) {
//     return (String.fromCharCode(Math.floor(Math.random() * (65 - 58) + 58)));
//   }
//   else {
//     return (String.fromCharCode(Math.floor(Math.random() * (48 - 33) + 33)));
//   }
// }

// //return random number
// function getRandomNumber() {
//   return (String.fromCharCode(Math.floor(Math.random() * (58 - 48) + 48)))
// }


// function copyToClipboard() {
//   document.getElementById("copy").addEventListener("click", function() {
//     copyToClipboardMsg(document.getElementById("password"), "msg");
//   });
//   // BONUS 
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // BONUS EVENT LISTENER
// copyBtn.addEventListener("click", copy);

// function copy() {
//   var copyText = document.getElementById("password");
//   copyText.select();
//   document.execCommand("copy");
//   alert("Copied the text: " + copyText.value);
// }














module.exports = Generator;