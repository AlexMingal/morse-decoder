const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {

  let arr = expr.split(''),
      result = [],
      char = 0;

  console.log(arr);

  for (i in arr) {
    let charN = Object.values(MORSE_TABLE).indexOf(arr[i]);
    console.log(charN);
    console.log(Object.keys(MORSE_TABLE)[charN]);




/*
    console.log(Object.values(MORSE_TABLE)[arr[i]])
    console.log(Object.keys(MORSE_TABLE).indexOf[i])
    result.push(char);
*/
  }


 // console.log(result)
  return 
}

decode('najleszykot');


// module.exports = {
//     decode
// }

