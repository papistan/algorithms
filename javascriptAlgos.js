
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

// Growth of population

function nbYear(p0, percent, aug, p) {
    population = p0;
    n = 0;
    while(population < p) {
      population += ( population * (percent / 100) );
      population += aug;
      population = Math.round(population);
      n += 1;
    }
    return n
}

// Remove First and Last Character

function removeChar(str){
 newArray = str.split("");
 newArray.shift()
 newArray.pop()
 return newArray.join("")
};

// Given a list of integers and a single sum value, return the first two values 
// (parse from the left please) in order of appearance that add up to form the sum.
var sum_pairs=function(x, s){
   pairs = [];
   for(i=0;i<x.length - 1;i++) {
     for(z=(i+1);z<(x.length);z++) {
      if (x[i] + x[z] == s) {
        pairs.push([x[i], x[z], z]);
        break;
      }
     }
   }
   pairs.sort(function(a, b) {
      return a[2] - b[2];
    });
    console.log(pairs)
   winner = pairs.shift();
   if (winner !== undefined) {
     return [winner[0], winner[1]]
     } else {
       return undefined
     }
}

// Find The Parity Outlier
function findOutlier(integers){
  var odd = []
  var even = []
  integers.forEach(function(num) {
    num % 2 === 0 ? even.push(num) : odd.push(num)
  })
  if (odd.length === 1)  {
    return odd[0] 
    } else {
    return even[0]
    }
}

// Sort My Animals
function sortAnimal(animal) {
  
  if (animal === null) {
    return null
  } else if (animal.length == 0) {
    return animal
  } else {
    sorted = animal.sort(function(a, b) {
      return a.numberOfLegs - b.numberOfLegs 
    })
     sorted = sorted.sort(function(a, b) {
        if(a.numberOfLegs === b.numberOfLegs) {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        } 
    })
    return sorted
  }
}

// Count of Smaller Numbers After Self
var countSmaller = function(nums) {
    var results = []
    var length = nums.length
    for(i=0;i<length;i++) {
      var compare = nums.slice((i+1), length);
      var higher = compare.filter(function(numb) {
        return numb < nums[i]
      })
      results.push(higher.length)
    }
    return results
};

// FizzBuzz
var fizzBuzz = function(n) {
       fbArray = []
    for (i=1;i<=n;i++) {
      if (i % 3 === 0 && i % 5 === 0 ) {
        fbArray.push("FizzBuzz");
      } else if ( i % 5 === 0 ) {
        fbArray.push("Buzz");
      } else if (i % 3 === 0) {
        fbArray.push("Fizz");
      } else {
         fbArray.push(String(i))
      }
    }
    return fbArray
};

// Anagram Checker
var isAnagram = function(s, t) {
    if (s.length != t.length) {
      return false
    } else if (s.split("").sort().join() === t.split("").sort().join()){
      return true 
    } else {
      return false
    }
};
// ____________________________________________
// First Unique Character in a String
var firstUniqChar = function(s) {
   if(s.length === 1) {
     return 0
   } else {
     var index = [];
     var sToArray = s.split("");
     for(i=0;i<sToArray.length;i++) {
      var first = sToArray.shift();
      if(sToArray.includes(first)) {
      sToArray.push(first)
    } else {
      index.push(i)
      break
    }
   }
    if(index.length === 0) {
     return -1
   } else {
     return index[0]
   }
  }
};

//     BETTER SOLUTION
  var firstUniqChar = function(s) {
   for(i=0;i<s.length;i++){
       if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
          return i;
      } 
   }
   return -1;
};
// _____________end first uniqu char___________

// Rotate an array of n elements to the right by k steps.
var rotate = function(nums, k) {
    if (k === 0 || nums.length === 1) {
      return nums
    } else {
    const removed = nums.splice((nums.length - k), k)
    return removed.concat(nums)
    }
};
// End rotate array_______________
//   Reverse string

var reverseString = function(s) {
    return s.split('').reverse().join('')
};

// End reverse string_____

// return true if any value appears at least twice in the array
var containsDuplicate = function(nums) {
     const numsObject = {};
    let value = false
    nums.forEach(num => {
      if (numsObject[num] === 1) {
        value = true
      } else {
        numsObject[num] = 1
      }
    })
    return value
};
// end duplicate

// autocomplete
function autocomplete(input, dictionary){
  
  const words = dictionary.filter(word => {if (word.slice(0, input.replace(/[^a-z]/gi, '').length).toLowerCase() === input.replace(/[^a-z]/gi, '').toLowerCase()) { return word }}
  )
  return words.slice(0, 5)
}
// end autocomplete

// reverse words 

return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
// end reverse words

// Filter 'WUB' from strings 
return song.split('WUB').filter(string => string !== '').join(' ')
// end filter

// return middle 
let getMiddle = s => {
  let middle = Math.floor(s.length / 2);
  
  if(s.length % 2 === 0) {
    return s[middle - 1] + s[middle]
  } else {
    return s[middle]
  }
}
// end 

// find index with even right and left totals
function findEvenIndex(s){
  let answer = -1
  for(var i=1;i<s.length;i++){
    let left = s.slice(0, i).reduce(( acc, cur ) => acc + cur, 0);
    let right = s.slice(i+1, s.length).reduce(( acc, cur ) => acc + cur, 0);
    if (left === right) {
      answer = i;
      break;
    }
  }
  return answer
}
// end

// Merge two sorted arrays, return single sorted 

function sorted(x, y) {
  let i = 0;
  let j = 0;
  let solution = [];
  while(i < x.length && j < y.length) {
    if (x[i] < y[j]) {
      solution.push(x[i]);
      ++i
    } else {
      solution.push(y[j]);
      ++j
    }
  };
  if(i >= x.length) {
    return solution.concat(y.splice(j))
  } else {
    return solution.concat(x.splice(i))
  }
}
 // end


//  Plus one https://leetcode.com/problems/plus-one/

function addOne(x) {
 let i = x.length - 1
  while(x[i]=== 9){
     x[i]=0
     i--
  }
  if(i < 0){
    x.unshift(1)
  } else {
    x[i]++
  }
  return x
}

// end

// TWO SUM https://leetcode.com/problems/two-sum/

function twoSum(myArray, target) {
  let myObj = {}
  for(i=0;i<myArray.length;i++){
    if(myObj[target - myArray[i]]) {
      return solution = [i, myObj[target - myArray[i]]];
    } else {
      myObj[myArray[i]] = i
    }
  }
}

// end

// Duplicate count 
function duplicateCount(text){
  myObj = {}
  text.toLowerCase().split('').forEach(letter => {
    myObj[letter] ? myObj[letter] = (myObj[letter] + 1) : myObj[letter] = 1
  });
  let values = Object.values(myObj);
  let count = 0
  values.forEach(num => {
    if(num > 1) ++count 
  })
  return count
}

// end 

// Given a string with 3 words reverse the words put back in same order

function reverse(str) {
    let words = str.split(' ')
    return words.map(word => 
        word.split('').reverse().join('')
    ).join(' ')
}

// end

// return biggest adjacent elements product 
function biggestProduct(arrayofNum) {
    let products = []
    for(let i=0;i<arrayofNum.length - 1;i++){
        products.push(arrayofNum[i] * arrayofNum[i + 1])
    }
    let sorted = products.sort((a,b) => { return a + b })
    return sorted[0]
}

// end 

//  add to elements until viable
function getMinimumUniqueSum(arr) {
  let hash = {}
  arr.forEach(num => {
      if (hash[num] === undefined) {
          hash[num] = null
      } else {
        let i == 0
        let newNum = num
        while(hash[newNum] === undefined) {
          ++newNum
        }
        hash[num] = newNum
      }
  })
  let total = 0
  Object.keys(hash).forEach(key => {
    total = total + String(key)
  })
  return total
}
// 
// vote counter 
 function electionWinner(votes) {
    let totalVotes = {}
    votes.forEach(vote => {
        if (typeof vote === 'string') {
          if (totalVotes[vote]) {
              totalVotes[vote] = (totalVotes[vote] +1)
          } else {
              totalVotes[vote] = 1
          }
        }
    })
    let v = undefined;
    Object.keys(totalVotes).forEach(key => {
      if(!v){
        v = totalVotes[key];
      } else if (v < totalVotes[key]){
  	    v = totalVotes[key];
      }  
    })
    let topVoted = Object.keys(totalVotes).filter(function(key) {
      return totalVotes[key] == v
    })
    let sorted = topVoted.sort((a,b) => {
            if(a < b) return -1;
            if (a > b) return 1;
            return 0
        })
    return sorted.pop()
}
// end


// Takes a string and returns true or false indicating whether its curly braces are balanced.
function isBalanced(string) {
  return string.match(/{/gi).length === string.match(/}/gi).length
}
// end

// palindrom case and space insensitive 

function isPalindrome(string) {
  let letters = string.replace(/\s+/g, '').toLowerCase();
  return letters == letters.split('').reverse().join("");
}

// end 

//  implement indexOf function 
function indexOf(array, num) {
  
  for(let i=0;i<array.length;i++) {
    if (array[i] == num) {
      return i
    }
  }
  return -1
}
//  end 

//  Reverses the given string (yes, using the built in reverse function is cheating)
function reverse(string) {
  let reveresed = []
  for(let i=0;i<string.length;i++) {
    reveresed.unshift(string[i])
  }
  return reveresed
}

// end 

// nth Fibonacci num
function fib(num) {
 let nums = [0, 1]
 if (num < 2) {
   return 1
 }
 for(let i = 2; i <= num; i++) {
   nums[i] = nums[i - 1] + nums[i - 2]
 }
 console.log(nums)
 return nums[num - 1] + nums[num - 2]
}
// end

// Greatest divisor
function div(num, num2) {
  let devisor = 2
  if (num < num2) {
    devisor = Math.floor(num / 2)
  } else {
    devisor = Math.floor(num2 / 2)
  }
  
  for(let i = devisor; i >=2; i--) {
    if(num % i === 0 && num2 % i === 0) {
      return i
    }
  }
}
// end 

// Binary search 

function findNum(num, array) {
  
  let midIndex = Math.floor(array.length /2);
  
  if (array.length < 1) {
      return false 
  };
  
  if (num === array[midIndex]) {
    return true
  } else if (num > array[midIndex]) {
    
     return findNum(num, array.slice(midIndex, -1))
  } else {
     return findNum(num, array.slice(0, midIndex))      
  };
   
}
// end

// two sorted arrays combine
function sorted(a1, a2) {
  let i = 0 
  let y = 0 
  let final = []
  while (a1.length && a2.length) {
    if(a1[i] < a2[y]) {
      final.push(a1.shift())
      i++
    } else {
      final.push(a2.shift())
      y++
    }
  }
  a1.length ? final.push(...a1) : final.push(...a2)
  return final
}
// end 

// Naive solution https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
function stock(stocks){
  let profit = 0;
  for(i=0;i<stocks.length;i++){
    let newBuy = stocks[i];
    
    for(z=(i+1);z<stocks.length;z++){
     if ((stocks[z] - newBuy) > profit) {
       profit = (stocks[z] - newBuy)
     }
    }
  }
  return profit;
}

//  end
