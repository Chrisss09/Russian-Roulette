<h1>Interactive Frontend Development</h1>
<h1>RUSSIAN ROULETTE - Can you catch the Communists?</h1>

<h2>Creating my Memory Game</h2>

<p>For this project I have chosen to create my own memory game called Russian Roulette. After researching different memory games, the one that I have chosen was a great choice for me. It is a simple pair up game with a Russian theme. As per my previous project I have a love for Russian history so I have chosen again to go for a Russian themed memory game where you pair up all the Communists to win the game with a limited amount of turns.</p>

<h2>UX</h2>

<p>I have created this app for people like me who have an interest for Russian history and want to have fun with it. On reading the project brief and researching memory games I instantly knew what I wanted to acheive, so I sketched in my writing pad what I wanted it to look like with a list of features to implement.</p>

<h2>Features</h2>

<p>The main feature to my game is to allow the user to click on a card and for it to flip over. I have done this by adding a transform rotate property with a 3D effect. Also I have added a reset button for the user to restart the game at any point.</p>

<h4>Mobile Response</h4>

<p>For this project I have created a seperate CSS page for my mobile response due to the amount I have added. Due to the simplicity of the game I have not changed anything such as hiding anything when on small screens. The mobile response just makes the title of the game smaller and the game board either bigger or smaller depending on what you play it on.</p>

<h4>Future additions</h4>

<p>For this project I had more ideas to expand my game that I would like to look into in the future but I felt I was running out of time. I would of liked to have created a new box underneath the game and when the user would click on a card the box will then show their name and create a match. Also I would of liked to add some sound to the game, if you lose I would have the Soviet National Anthem play and if you win the Russian National Anthem would play.</p>

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
<p>I have tested my game on Google Chrome and everything works as it should</p>
<p>I have tested my game on Safari and I discovered an issue that the cards did not flip over and they just flickered. After research, I found on Stack Overflow that another user had the same issue and I needed to add the webkit to my transition property where the cards flip over, and now all works as it should.</p> 