// know performance of a task


const startTime = performance.now();

for(let i = 0; i < 50; i++){
    console.log(i);
}

const endTime = performance.now()

console.log(`loop took ${endTime - startTime} milliseconds to finish`);
// loop took 6.8294999999999995 milliseconds to finish