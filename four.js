// How to flatten a multi-dimensional array 
let smileys = ["😀", ["😁", "😂"], "🤣", ["😃", "😄"]]

// We can use array.flat() method to flattern one level array
console.log(smileys.flat());  // [ '😀', '😁', '😂', '🤣', '😃', '😄' ]

// multi level array
let smileys2 = ["😀", ["😁",['😀', '😁'], "😂"], "🤣", ["😃", "😄"]]

console.log(smileys2.flat(Infinity));  
// ['😀', '😁', '😀','😁', '😂', '🤣','😃', '😄']