function Fibonacci(){
    var x = 0;
    var y = 1;
    var fib = [];
    fib[0] = x;
    fib[1] = y;
    
    for(let i = 2; i < 10;i++){
        let sum = x+y;
        fib[i] = x+y;
        x = y;
        y = sum;
    };
    return fib; 
};

console.log(Fibonacci());