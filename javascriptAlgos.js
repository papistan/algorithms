
// Return index of number that does not fit with collection in array - either solo odd or even:

function iqTest(numbers){
  var numsSplit = numbers.split(" ");
  var even = [];
  var odd = [];
  numsSplit.forEach( function(x)  { 
    if ( (parseInt(x) % 2) === 0 ) {
      even.push(x) 
      } else {
      odd.push(x) 
    }
  });
  if (even.length > odd.length) { 
    return  (numsSplit.indexOf( odd[0] ) + 1)
    } else {
    return  (numsSplit.indexOf( even[0] ) + 1)
  };
}

// Simple Encryption #1 - Alternating Split


// ENCRYPT
function encrypt(text, n) {
  if (text == null) {
    return null
    } else {
  splitText = text.split("")
  for(i=0;i<n;i++) {
    even = []
    odd = []
    x = 1
    splitText.forEach( function(letter) {
      x % 2 === 0 ? even.push(letter) : odd.push(letter)
      x++
    })
    splitText = even.concat(odd)
  }
  return splitText.join("")
  }
}

// DECRYPT
function decrypt(encryptedText, n) {
if (encryptedText == null) {
    return null
    } else {
  splitText = encryptedText.split("")
  divider = Math.floor(splitText.length / 2)
  end = splitText.length - 1
  for(i=0;i<n;i++) {
    even = splitText.slice(0, divider)
    odd = splitText.slice(divider, end + 1)
    console.log(odd)
    splitText = []
    x = 0
    odd.forEach( function(letter) {
      splitText.push(letter);
      if (even[x] !== undefined ) splitText.push(even[x]);
      x++
    })
  }
  
  return splitText.join("")
  }
}

// sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.
function order(words){
  splitWords = words.split(" ")
  sortedWords = []
  re = /[1-9]/
  splitWords.forEach( function(word) {
    wordIndex = word[word.search(re)]
    sortedWords[wordIndex - 1] = word
  } )
  return sortedWords.join(" ")
}


//  Build tower of n

function towerBuilder(nFloors) {
  floorLength = nFloors + (nFloors - 1);    
  tower = [];
  dotNumber = 1;
  for (i = 0; i < nFloors; i++) {
    dots = "*".repeat(dotNumber);
    spaces = " ".repeat((floorLength - dotNumber) / 2);
    tower.push(spaces + dots + spaces);
    dotNumber += 2;
  }
  return tower;
}
