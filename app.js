const inquirer = require("inquirer");

class Questions {
  constructor() {
  }

    askQuestions() {
    let answerArray = [];
     inquirer
      .prompt([
        {
          type: "number",
          name: "charLength",
          message: "How long would you like your password?"
        },
        {
          type: "checkbox",
          name: "charChoices",
          message: "Which characters would you like in the password?",
          choices: [
            "lowercase letters",
            "uppercase letters",
            "special characters",
            "numbers"
          ],
          default: ["lowercase letters"]
        }
      ])
      .then(function(answers) {
        let optionArray = answers.charChoices;
        if (optionArray.includes("lowercase letters")) {
          answerArray.push("lowercase letters");
        }
        if (optionArray.includes("uppercase letters")) {
            answerArray.push("uppercase letters");
          }
        if (optionArray.includes("special characters")) {
            answerArray.push("special characters");
        }
        if (optionArray.includes("numbers")) {
            answerArray.push("numbers");
          }
        return new Questions(answerArray);
      });
  }
}


class Generator {
    constructor(answerArray) {
      this.answerArray = answerArray;
      let charArray = [];
    }
    test() {
        console.log(this.answerArray)
    }


    getRandomLowerCaseLetter() {
      charArray.push(String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97)));
    }
    getRandomUpperCaseLetter() {
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



const question = new Questions();
const generate = new Generator(question.askQuestions());
generate.test();
//question.askQuestions();

module.exports = Questions;
