/******************
 * YOUR CODE HERE *
 ******************/

slice = (x,y,z) => {
  let result = ''
if (y === undefined ){
  return x
}
  
  for ( let i = y ; x.length > i ; i++ ){
    if (z === undefined){
      result += x[i]
    }else if (i < z){
      result += x[i]
    }
  }return result
}


repeat = (x,y) => {
  let word = ''
  for (let i = 0 ; y > i ; i++){
    if (i===i) word+=x
  }return word
}

startsWith = (x,y) => {
  let matchCount = 0
  let o = 0
    if (y.length === 1){
   return  x[0] === y
    }
    for (let i = 0 ; i < y.length ; i++ , o++){
      if(y[i] === x[o])
        matchCount++
    } return matchCount === y.length
    }
    


endsWith = (x,y) => {
let matchCount = 0
let o = x.length-1
if (y.length === 1){
  return x[x.length-1] === y
} 
for (let i = y.length-1 ; i >= 0 ; i-- , o --){
  if(y[i] === x[o])
    matchCount++
} return matchCount === y.length
}



includes = (x,y) => {
    let matchCount = 0
    for (let i = 0 ; x.length >= i ; i++){
      if (x[i] === y)
      matchCount ++
    }return matchCount >= 1
    }

    join = (x,y) => {
      let result = x[0]
      for (let i = 1 ; x.length > i ; i++){
       if (y === undefined) 
       result+= x[i]
       else if ( x.length > i-1)
        result+=  y + x[i]
      }return result
    }
  

split = (x,y) => {
  
  let newArray = []
  let str = ''
  for (let i = 0 ; x.length > i ; i++ ){
    if (x[i] === y ){
      newArray.push(str)
      str = ''
      i++ 
    } if (str += x[i]){
    }
  } newArray.push(str)
   return newArray
}
  
trimStart = (x) => {
  let newstring =''
  let erase = true
  
  if (x === undefined || 
    x[0] !== ' ' || 
    x[0] !== ' ' && x[x.length-1] === ' '){
      return x
    }
    for (let i = 0 ; x.length > i ; i++){
      if (x[i] !== ' ') erase = false
      if (x[i] === ' ' && erase === true){
      }else {
        newstring+= x[i]
      }
    } return newstring
}

trimEnd = (x) => {
  let newstring =''
  let erase = true
  
  
  reversed = (x) => {
    let str = ''
    for (let i = x.length-1 ; i >= 0 ; i--){
      str += x[i]
    }return str
  }

  
  
  if (x === undefined || 
    x[x.length-1] !== ' ' || 
    x[x.length-1] !== ' ' && x[0] === ' '){
      return x
    }
    for (let i = x.length-1 ; i >= 0 ; i--){
      if (x[i] !== ' ') erase = false
      if (x[i] === ' ' && erase === true){
      }else {
        newstring+= x[i]
      }
    } return reversed(newstring)
}




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof slice === 'undefined') {
  slice = undefined;
}

if (typeof repeat === 'undefined') {
  repeat = undefined;
}

if (typeof startsWith === 'undefined') {
  startsWith = undefined;
}

if (typeof endsWith === 'undefined') {
  endsWith = undefined;
}

if (typeof includes === 'undefined') {
  includes = undefined;
}

if (typeof join === 'undefined') {
  join = undefined;
}

if (typeof split === 'undefined') {
  split = undefined;
}

if (typeof trimStart === 'undefined') {
  trimStart = undefined;
}

if (typeof trimEnd === 'undefined') {
  trimEnd = undefined;
}



module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
