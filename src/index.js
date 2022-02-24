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
    let len = expr.length;
    let wordsAmount = len/10;
    let word;
    let words; 
    let code
    let arr =[]
    let letter10or11
    let arrCode = [];
    let finalArr = []
    let letter;
     
     words = expr.match(/.{1,10}/g);
     

     for (let i = 0; i<words.length; i++) {
         if (words[i] === '**********') {
             words[i] = " "
         }
         //console.log(words[i])
         words[i] = (+words[i]).toString()
         letter10or11 = words[i].match(/.{1,2}/g)
         arr.push(letter10or11)
         //console.log(words[i])
         console.log(letter10or11)
     }
       arr.forEach(element => {
          for ( i = 0; i<element.length; i++) {
                 if (element[i] === "10") {
                    element[i] = "."  
                 }
                 if (element[i] === "11") {
                    element[i] = "-"  
                 } 
                 if (element[i] === "0") {
                     element[i] = " "
                 }
                 code = element.join('') 
                
         } 
           arrCode.push(code)
           arrCode.forEach( el => {
               letter = MORSE_TABLE[el]
               if (el === " "){
                   letter = " "
               } 
           })
           finalArr.push(letter)
           //console.log(letter)
       })
   return   finalArr.flat().join('')
      
}


module.exports = {
    decode
}