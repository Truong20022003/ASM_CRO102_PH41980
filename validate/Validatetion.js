export const isvalidatetendangnhap = stringtendanhap =>
  stringtendanhap.length > 3;
export const isvalidatepassword = stringpassword => stringpassword.length >= 2;
export const isvalidatefullname = stringfullname => stringfullname.length > 7;
export const isvalidateemail = stringemail =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(stringemail);
export const isvalidatediachi = stringdiachi => stringdiachi.length > 3;
export const isvalidatephone = stringphone => stringphone.length > 3;

//   var lowerCaseLetters = /[a-z]/g;
//   if (myInput.value.match(lowerCaseLetters)) {
//     letter.classList.remove('invalid');
//     letter.classList.add('valid');
//   } else {
//     letter.classList.remove('valid');
//     letter.classList.add('invalid');
//   }

//   // Validate capital letters
//   var upperCaseLetters = /[A-Z]/g;
//   if (myInput.value.match(upperCaseLetters)) {
//     capital.classList.remove('invalid');
//     capital.classList.add('valid');
//   } else {
//     capital.classList.remove('valid');
//     capital.classList.add('invalid');
//   }

//   // Validate numbers
//   var numbers = /[0-9]/g;
//   if (myInput.value.match(numbers)) {
//     number.classList.remove('invalid');
//     number.classList.add('valid');
//   } else {
//     number.classList.remove('valid');
//     number.classList.add('invalid');
//   }

//   // Validate length
//   if (myInput.value.length >= 8) {
//     length.classList.remove('invalid');
//     length.classList.add('valid');
//   } else {
//     length.classList.remove('valid');
//     length.classList.add('invalid');
//   }
