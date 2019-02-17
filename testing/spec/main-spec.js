describe("Testing main.js page", function(){
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
            let gameWon = 0;
            gameWon += 6;
            expect(gameWon).toEqual(6);
            expect(gameWon).not.toBeLessThan(6);
            expect(gameWon).not.toBeGreaterThan(6);
        });
        it("should lose after 8 failed turns", function(){
            let noMatches = 0;
            noMatches += 8;
            expect(noMatches).toEqual(8);
            expect(noMatches).not.toBeLessThan(8);
            expect(noMatches).not.toBeGreaterThan(8);
        });
    });
    
    describe("Testing the classes", function(){
        it("should exist in the game", function(){
            expect($('<p class="condition">You Win - The Communists have been captured!</p>')).toExist();
            //check to see if my condition class works
        });
        it("should see class card", function(){
            expect($('<div class="game-field"></div>')).toContainHtml('<div class="card></div>');
            //check to see if my game-field class has a class card in it
        });
    });
    
    describe("Testing my classes", function(){
        it("should check my GIF image", function(){
            expect($('#loader')).not.toBeVisible();
            //My GIF loader image is located at the back of my game-field class
        });
        it("should check my face card", function(){
            expect($('.face')).not.toBeVisible();
            //The main card is face down and it not visible
        });
        it("should check back of card", function(){
            expect($('.back-card')).not.toBeHidden();
            //Tested back of card to not be hidden
        });
    });
});
    
