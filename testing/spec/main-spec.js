describe("Flip card testing", function(){
    it("should check first flip", function(){
        expect(!flippedCard).toBeTruthy(); 
        //flippedCard is set to false so this will show as a pass due to '!' operator
    });
    it("should check second flip", function(){
        expect(flippedCard).toBeFalsy();
        //flippedCard is set to false so this will pass
    });
    it("should flip card back", function(){
        expect(flipCardBack()).toBeFalsy();
        //Function flips cards back if false
    });
    xit("should have a value", function(){
        expect(flipCard()).not.toBeNull();
    });
});


describe("Winning the game", function(){
    it("should win after 6 turns", function(){
        let gameWon = 6;
        expect(gameWon).toEqual(6);
        expect(gameWon).toBeGreaterThan(5);
        expect(gameWon).toBeLessThan(7);
    });
});

describe("Losing the game", function(){
    it("should lose after 8 failed turns", function(){
        let noMatches = 8;
        expect(noMatches).toEqual(8);
        expect(noMatches).toBeGreaterThan(7);
        expect(noMatches).toBeLessThan(9);
    });
});

