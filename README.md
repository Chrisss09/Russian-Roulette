<h1>Interactive Frontend Development</h1>
<h1>RUSSIAN ROULETTE - Can you catch the Communists?</h1>

<h2>Creating my Memory Game</h2>

<p>For this project I have chosen to create my own memory game called Russian Roulette. After researching different memory games, the one that I have chosen was a great choice for me. It is a simple pair up game with a Russian theme. As per my previous project I have a love for Russian history so I have chosen again to go for a Russian themed memory game where you pair up all the Communists to win the game with a limited amount of turns.</p>

<h2>UX</h2>

<p>I have created this app for people like me who have an interest for Russian history and want to have fun with it. On reading the project brief and researching memory games I instantly knew what I wanted to acheive, so I sketched in my writing pad what I wanted it to look like with a list of features to implement.</p>

<h2>Features</h2>

<p>The main feature to my game is to allow the user to click on a card and for it to flip over. I have done this by adding a transform rotate property with a 3D effect. Also I have added a reset button for the user to restart the game at any point and to do this I have used Javascript.</p>
<p>To make my game more fun, and professional, everytime the user clicks on the reset button I have added in a GIF image of a moving Soviet flag.</p>
<p>To make my game interactive I have used Javascript programming and this will tell the computer on how we can identify two pairs such as using my checkMatch function which uses my dataset attribute.</p>
<p>I have also created a shuffle function which will shuffle every position of the cards everytime the game gets reset.</p>
<p>I have added in a winning page using JS and JQuery. Once the user has flipped all the cards the JQuery will add another class I have created and replace the field with a winning photo.</p>
<p>I have also set a rule for losing the game. If the user is unsuccessful in 8 turns then that is game over and you would lose. I have then applied the same rules for this but I have made a rule class and the JQuery can add the lose class when you have lost.</p>
<p>I have also thought about how the user would lose, I have set this to 8 because this gives the user plenty of chances to win, this is a memory game and not a competitive game. With 6 turns the user will then have seen every card and may have matched a few up along the way and then that leaves two more turns for the user to succeed. I did have it on 9 turns but after testing it for a while I thought 9 was too easy so I changed it to 8.</p>

<h4>Future additions</h4>

<p>For this project I had more ideas to expand my game that I would like to look into in the future but I felt I was running out of time. I would of liked to have created a new box underneath the game and when the user would click on a card the box will then show their name and create a match. Also I would of liked to add some sound to the game, if you lose I would have the Soviet National Anthem play and if you win the Russian National Anthem would play.</p>

<p>After my final call with my mentor he asked me to add extra features to my game which after adding them I was really pleased with. He asked me to create some instructions to the user on how to plat them. I added a red button and using Bootstrap's Font Awesome I added a question mark symbol and I created a model using Javascript after watching a tutorial by Traversy Media. So then the user can click on the question mark and the instructions will pop up and I have also created a scenario for the user.</p>

<p>Another addition my mentor asked me to add was to make a scoreboard for the number of turns. So I created another square next to my instructions button. I tried to do this myself as I knew this would go under my flipCardBack function and after an old post on Stack Overflow I got this working by creating a new variable. At first I set this to 0 and after each failed pairing it would count up to 8 and then it would be game over. After awhile I thought it would be best to have it counting down, so I set the default value to 8 and after several attempts and tests I got it counting down from 8, and I used JQuery to set it to 0 once the game was over.</p>

<h2>Technologies used</h2>

<p>In my project I have used several technologies to make this successful, which are;</p>

<li>Semantic HTML5 to structure the game.</li>
<li>CSS3 to style the content.</li>
<li>I have used Google Fonts to add an external font called 'Orbitron' for a suitable style.</li>
<li>The game uses Javascript to allow the user to play and interact with the game.</li>
<li>To create my game I have used Visual Studio Code.</li>
<li>I have used Git and Github for source control management.</li>
<li>I have used JQuery to add classes if the user wins or loses.</li>

<h2>Testing</h2>

<h4>Manual Testing</h4>

<p>Throughout my project I have tested it manually using the Google developer tools for my styles which helped me better develop my project. One of the ways it helped me was with my media queries, I tested the mobile response first then added it to the project in VS Code once I found the correct amendments.</p>

<p>I also used the Google developer tools when styling my cards to get them in the correct position until I was happy with them.</p>

<p>At the start of my project I had an issue with extra unwanted space when styling my main title and making it responsive. To rectify this I found out I had to make my game field smaller along side the title and then this cuts out the extra space.</p>

<p>I used the Google developer tools to test the layout on all the different devices such as Samsung and IPhone to make sure the game fits the screen properly.</p>

<p>I manually tested my javascript as I have gone along by using console log to see if everything is working correctly at that point.</p>

<p>I have tested my game on Google Chrome and everything works as it should.</p>

<p>I have tested my game on Safari and I discovered an issue that the cards did not flip over and they just flickered. After research, I found on Stack Overflow that another user had the same issue and I needed to add the webkit to my transition property where the cards flip over in my CSS styles sheet. I then added the moz, ms and o which helps the game work on other browsers and now all works as it should.</p> 

<p>Before I added in the browser compatibility properties I had an issue with Internet Explorer where the cards moved slowly around but now this has been rectified</p>

<p>I have sent the link to my family and friends as well as students on the course to test out and I received positive feedback. I have also played the game many times to test if everything works such as for the win and loss rules of the game.</p>

<p>Instead of using Jasmine I will manual test all my functions to check they are working as they should.</p>
<p>Testing my variable 'let flippedCard = false' I commented this out and ran my game. Without this variable when my cards flipped over they stay flipped over even if they are false, this shows this is working correctly.</p>
<p>Testing my variable 'let stopFlip = false' I commented this out and ran my game. This did not allow me to flip any cards over which proves this is working as it should.</p>
<p>Testing my variable 'let firstCard, secondCard' I again commented this out and ran my game. This resulted in the same test as last and no cards couldn't flip.</p>
<p>Next I tested my 'flipCard' function, I commented this out and ran my game to reveal my gif underneath my cards. This shows my function does work. Further testing in my flipCard function I commented out 'if (stopFlip) return' and this allowed my to keep clicking on cards as they were turning so this is what you don't want.</p>
<p>I then commented out 'this.classList.add('flip')' which then did not allow me to flip any cards.</p>
<p>I then tested my 'if(!flippedCard)' which like before revealed my gif image.</p>
<p>Last in this function I tested 'flippedCard = false' and 'secondCard = this' and then when I ran my code every time I flipped a card even if they were a pair they did not turn back around.</p>

<p>Next I moved onto my 'checkMatch' function and to check this I commented it all out and ran my game. As expected all cards flipped but no matches were made and all cards stayed flipped</p>

<p>I then moved onto my 'matchedCard' function and I commented it all out and ran my game. And as expected the game played as normal, it flipped and paired cards but when it got to the end where all cards were flipped, it did not add my win class, so this test passed.</p>

<p>Next I tested my 'flipCardBack' function and I commented out the fieldReset function and I then ran my game. I was allowed to click on two cards but then as per my function the field would not reset, so this tested has passed.</p>
<p>I then tested my 'scoreBoard' function by commenting it all out and ran my game and as expected this passed and due to the countdown not going down when failed to match together. I then further tested this by just commenting out my 'var container' variable and this also passed due to the score not decreasing.</p>
<p>I then tested my 'noMatches' variable by commenting it out and then I ran my game, and as I expected the no matches ran forever and there was no game over, so this test passed.</p>

<h4>Mobile Response</h4>

<p>For this project I have created a seperate CSS page for my mobile response due to the amount I have added. Due to the simplicity of the game I have not changed anything such as hiding anything when on small screens. The mobile response just makes the title of the game smaller and the game board either bigger or smaller depending on what you play it on. I have tested the mobile response on an actual Samsung phone and a couple of different Iphones, plus the different options with the Google developer tools, and all works as it should.</p>

<p>When I decided to add in an extra page for my media queries I did a lot of trial and errors with playing about with the screen sizes and styling and I felt doing that I learned more about media queries and half way through the assignment I thought that I could do better so I created an extra page and started writing my media query page again and I think it all looked better and tidier.</p> 

<h4>Validation Testing</h4>

<p>To test my HTML I have used WC3 Markup Validation Service's website and I found the following errors;</p>
<li>No alt on my loading GIF - I have now added this in</li>
<li>My loader GIF had the width and height set to 100% within the image source - I removed this and added it to my styles sheet</li>  
<li>Duplicated ID's for my images - I have now taken this out, this was due to my idea with of pulling up the ID names when the user clicks on the image.</li>

<p>I also tested my CSS Styles using WC3 CSS Validation Service's website and everything came back all ok.</p>

<h2>Deployment</h2>

<p>To deploy my website onto a server I used GitHub and to start off I signed into my GitHub account and created a new repository and called my new project a suitable name. Once that has been saved I copied the url link that GitHub gave me and then I opened up Visual Studio Code which is what I am using for my project. On the start up screen I clicked on 'Clone Git Repository' and then I pasted the url into that and then I selected my root folder that I created earlier to start my project. Now I can open up my folder on Visual Studio Code and it is now linked to my GitHub page, and once I make the changes for example add my HTML and CSS coding, I can then open up the terminal in VSC and I can use my Git codes such as 'git status', 'git add .' and 'git push' which will send this through to my github repository.</p>

<p>I can then use the repository to save my updates and share my work with others. Also in my settings on my github page I can set it to my master branch which will then give me my url address which means it is now on the World Wide Web. I can also use VSC to run my website locally.</p>

<p>From my feedback from my first assignment, one of my negatives was that I did not name my commits with useful names so with this assignment I focussed on doing that and I think I hit the target and did much better on this assignment.</p>

<h2>Credits</h2>

<h4>Content</h4>

<p>My text for the whole project is exported from Google Fonts - I found one that I really liked and I thought that would suit my theme.</p>

<h4>Media</h4>

<p>The photos I used for my game I downloaded from Google Images and I selected the small image sizes because I only needed the small pictures.</p>
<p>To get my GIF image I got this through Google but on a site call Giphy.</p>

<h4>Acknowledgements</h4>

<p>To make my project a success I used various sources over the internet.</p>

<li>To programme my game I have watched various YouTube tutorial videos on JavaScript for me to put my codes together.</li>
<li>I have also used Stack Overflow to help with other parts to my game such as setting my win and lose rules.</li>
<li>I have also used both Slack and Stack Overflow to help me with Browser compatibility as their was another user with the same issue as me.</li>
<li>I want to thank my friends and family for their help with my project as they have taken time to play it and give me some feedback.</li>