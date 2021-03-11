import keylisting from "../keylisting/keylisting";
let temporary: string = "";

function generatePassword(passwordLength: number) {
  temporary = "";
  for (var i = 0; i < passwordLength; i++) {
    temporary += keylisting.charAt(
      Math.floor(Math.random() * keylisting.length)
    );
  }
  return temporary;
}

export default generatePassword;
