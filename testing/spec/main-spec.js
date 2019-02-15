describe("Russian Roulette", function(){
    it("should check first flip", function(){
        expect(!flippedCard).toBe(true);
    });
    it("should check second flip", function(){
        expect(flippedCard).toBe(false);
    });
});
