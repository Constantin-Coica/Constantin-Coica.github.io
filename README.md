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

# Intro:

The project is a Quiz based on the game Heroes Of The Storm made by Activision-Blizzard Entertainment. It's called the Raven Lord's quiz, as he is one of the most iconic characters of the game. It presents the player with a different hero portraits from the game and challenges the player to test their knowledge by naming them. A role-playing feature also is present, the Raven Lord interacts with the user whenever they start, restart or win the game and when the user goes through the quiz, the hero that's represented in the portrait interacts with the user positivily or negatively depending on whether their choice is correct or not.

# Approach:

The project was done by creating a data file that stores the necessary information of every hero in the game (hero name, id, img url) and then it uses that data to create a number of questions by taking heroes at random. For each question there is the correct answer and 3 other incorrect ones picked at random. If the user fails to name hero presented, they need to restart and they can only win by answering every hero correctly. Whenever the user restarts another number of heroes are picked at random so no two quizzes are the same.

# Further improvements

A score feature can be implemented so that instead of failing the quiz when the incorrect option is picked, their score is stored and at the end if the user achieved a number of points, they win or lose. 
A hard mode can be implemented as well which would work by having a button to insult the Raven Lord and he will respond by challenging the player to name ALL the heroes in the game and for each hero all the names of the other heroes are present: so 89 heroes to name with 89 options, 88 incorrect and one correct.