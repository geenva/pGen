const keylisting: string =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWSWZ1234567890!@#$%&*/?";
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
