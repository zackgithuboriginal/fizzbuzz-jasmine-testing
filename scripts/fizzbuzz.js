function fizzbuzz(num){
    if(typeof(num)==="number"){
        if(num%3===0 && num%5===0 && num!==0){
            return("FizzBuzz");
        } else if(num%3===0 && num%5!==0 && num!==0){
            return("Fizz");
        } else if(num%5===0 && num%3!==0 && num!==0){
            return("Buzz");
        } else {
            return(num);
        }
    } else {
        return("Error!")
    }
}

for(i=0;i<100;i++){
    console.log(fizzbuzz(i));
}