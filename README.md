# unwitnessed


![Landing](../assets/landingScreen.png)


> “What awaits you in the dusk of the old world’s passing, shall go... unwitnessed.”

This is a line that was spoken by Tavore Paran, one of the main characters from the Malazan Book of the Fallen Series. It is from where I have taken the name for this game. 

unwitnessed is a simple drag and drop game that is similar to rock paper scissors. You pick one of three options and drag it to the area for it directly above and drop it. The AI then plays one at random and the game determines who won the round. 

The one with 2/3 round wins wins the game!

## Technologies

- HTML5 (skeleton)
- CSS3 (style and beauty)
- JavaScript
- jQuery

``` /* Round winning logic */
    else {
/* concatenates the codes of the two option objects into one string 

*/
      let code = board.inPlay[0].code + board.inPlay[1].code;
/* Checks the six different ways to win the round using the fall through method. if the winner is in the 0 index it is the player's win. */
      switch (code) {
        case 'bt':
        case 'rb':
        case 'tr':
          $els.playGround.css('background-image', board.inPlay[0].bg);
          board.player.roundCount += 1;
          $els.playerCounter.html(board.player.roundCount);
          $els.status.html(`${board.player.name} won this round!`)

          board.gameCheck();
          console.log('Player wins')
/* if the winner is in the 1 index the winner is the AI. */
        break;
        case 'tb':
        case 'br':
        case 'rt':
          $els.playGround.css('background-image', board.inPlay[1].bg);
          board.ai.roundCount += 1;
          $els.botCounter.html(board.ai.roundCount);
          $els.status.html(`The Bot has won this round!`)

          board.gameCheck();
          console.log('Bot Wins');
        break;
      }
    } 
```

## Build Strategy

Starting with the HTML and CSS I fleshed out the bones of the website. When that was done I realized a very basic version of the win logic. Then I searched how to implement the drag and drop feature. I came across the HTML5 new drag and drop feature which is infinitely more straightforward than JS. 

After that I worked on the JS file I titled movement. I called it that because it handles all the movement of with website. The drag and drop functionality is there along with the main landing page and the storing of the name from the form field.

It was relatively smooth sailing after that... Relatively.

## Complications

There were many complications. I ran into every error and issue known to JavaScript. Lexical scoping issues, process issues, logical issues. And SYNTAX ERRORS. Syntax errors are my personal plague.

One interesting issue I ran into was how to transfer the name variable and value over to the second webpage where the actual game is housed. The solution was pretty simple and it was resolved within the hour.

## Future Enhancements

My original idea was to make a card game using characters from the Malazan world. I still want to do this and seek to make it a future project. However, for this particular game, I feel it still needs more animation, an instruction section, and an options button to replay the game and quit to the landing page.

###### Dominick Serrant
