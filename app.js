'use strict'

const keyCode = [];
//Create secret code of 4 letters.
const secretCode = 'nerd';

//Listen for secretCode.
window.addEventListener('keyup', (e) => {
  console.log(e.key);
  keyCode.push(e.key);
  //Check for correct inputs.
  keyCode.splice(-secretCode.length - 1, keyCode.length - secretCode.length);
  if (keyCode.join('').includes(secretCode)) {
    console.log('Event fired!');
    //Silly method.
    cornify_add();
  }
  console.log(keyCode);
});