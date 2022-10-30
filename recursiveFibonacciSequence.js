function recursiveFibonacciSequence(n){
     if(n<2){
        return n
     }
     return recursiveFibonacciSequence(n-1)+recursiveFibonacciSequence(n-2)
}

console.log(recursiveFibonacciSequence(6))