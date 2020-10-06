describe("fizzbuzz", function(){
    it("should return fizzbuzz", function(){
        expect(fizzbuzz(15)).toBe("FizzBuzz");
    })
    it("should return buzz", function(){
        expect(fizzbuzz(20)).toBe("Buzz");
    })
    it("should return fizz", function(){
        expect(fizzbuzz(63)).toBe("Fizz");
    })
    it("should return 29", function(){
        expect(fizzbuzz(29)).toBe(29);
    })
    it("should return an error if input is not a number", function(){
        expect(fizzbuzz("test")).toBe("Error!");
    })
});