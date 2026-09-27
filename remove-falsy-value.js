// Boolean(expression) in JS returns true/false

Boolean(5 < 6); //true
Boolean(100 > 200); //false
Boolean("JavaScript"); //true
Boolean(""); // flase

 let miscellaneous = ['🤣', false, '❤️', NaN]
 let truthyValue = miscellaneous.filter(Boolean)
console.log(truthyValue);