// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 2
// 1,1,2,3,5,8,13,21
const fibonacci = function(a){
    if(a < 2){
        return a
    }

    return fibonacci(a-1) + fibonacci(a-2)
}

// console.log(fibonacci(7))