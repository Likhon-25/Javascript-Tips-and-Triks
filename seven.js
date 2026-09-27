// Log values with variable names smartly
const library1 = "React"
const library2 = "Next.js"

// Instead of doing this
console.log(`library1 - ${library1}`); 
console.log(`library2 - ${library2}`); 

//  we can do this
console.log({library1});
console.log({library2});