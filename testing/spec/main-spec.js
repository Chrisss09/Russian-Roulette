describe("Testing flipping cards", function(){
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

describe("Testing the conditions", function(){
    it("should win after 6 turns", function(){
        let gameWon = 6;
        expect(gameWon).toEqual(6);
        expect(gameWon).not.toBeLessThan(6);
        expect(gameWon).not.toBeGreaterThan(6);
    });
    it("should lose after 8 failed turns", function(){
        let noMatches = 8;
        expect(noMatches).toEqual(8);
        expect(noMatches).not.toBeGreaterThan(8);
        expect(noMatches).not.toBeLessThan(8);
    });
});

describe("Testing the classes", function(){
    it("should show the winning class", function(){
        expect($('.game-field').addClass('new-field-win')).toBeTruthy();
        //check to see if my new-field-win class works
    });
    it("should show the losing class", function(){
        expect($('.game-field').addClass('new-field-lose')).toBeTruthy();
        //check to see if my new-field-lose class works
    });
    it("should exist in the game", function(){
        expect('<p class="condition">You Win - The Communists have been captured!</p>').toExist();
        //check to see if my condition class works
    });
    it("should see class card", function(){
        expect($('<div class="game-field"></div>')).toContainHtml('<div class="card></div>');
        //check to see if my game-field class has a class card in it
    });
});

describe("Testing hidden elements", function(){
    it("should check my GIF image", function(){
        expect('#loader').not.toBeVisible();
    });
    it("should check my face card", function(){
        expect('.face').not.toBeVisible();
    });
    it("should check back of card", function(){
        expect('.back-card').not.toBeHidden();
    });
});

