
// Immediately Invoked Function Expressions (IIFE)

(function()
{
    //named iife
console.log(`DB CONECTED`);
})();

( (name) => {
    console.log(`DB CONECTED TO ${name}`);
    
})('nirdesh')