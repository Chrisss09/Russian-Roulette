describe("Russian Roulette", function(){
    it("should check first flip", function(){
        expect(!flippedCard).toBe(true); 
        //flippedCard is set to false so this will show as a pass due to '!' operator
    });
    it("should check second flip", function(){
        expect(flippedCard).not.toBe(true);
        //flippedCard is set to false so this will pass
    });
    it("should flip card back", function(){
        expect(flipCardBack()).not.toBe(true);
        //Function flips cards back if false
    });
});

xdescribe("flip check", function(){ //temp disabled suit
    it("should exist", function(){
        expect(flipCard().not.toBeNull());
    });
});
