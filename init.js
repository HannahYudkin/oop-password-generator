const Generator = require('./generator')


class Password {
    constructor(charTypes, passLen) {
      this.charTypes = charTypes;
      this.passLen = parseInt(passLen);
      this.finalPassword = [];
      this.genPass()
    }

    genPass() {
        this.charTypes.array.forEach(charType => {
            let char = new Generator(charType);
            this.finalPassword.push(char);
        });
        return this.finalPassword;
    }
  }
  

module.exports = Password;