
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