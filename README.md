# Game-Project

# Pseudo-code:
Functions:
1. Have a function that takes the NO. of heroes as argument
 -using the no. of heroes argument, pick at random from the heroData that amount (safeguard so no two are the same)
 -from the hero data get their name and matching url-img
 -return an array of objects where each object has hero name and the img-url
2. Function that starts the game when the start button is clicked
3. Function that displays the hero img.
4. Function that randomly gets 3 random incorrect answer options from the hero data and adds the correct one
    as the fourth option, and displays them on the buttons.
5. Function that when an option is clicked, checks if the name is the correct one:
    -if its the correct one lets the user know and moves on to the next hero.
    -if it isn't lets the user know and ends the game.
    -if there are no more heroes to display lets the user know that they won.
Other:
1. Class for the Quiz with different key:values
2. Values that keep track of the quiz's progress.
3. Event listeners that when triggered, use one of the functions needed.