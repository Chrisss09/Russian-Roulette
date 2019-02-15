describe("Russian Roulette", function(){
    it("should check first flip", function(){
        expect(!flippedCard).toBe(true); //flippedCard is set to false so this will show as a pass due to '!' operator
    });
    it("should check second flip", function(){
        expect(flippedCard).toBe(false); //flippedCard is set to false so this will pass
    });
});
