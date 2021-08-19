# UHIN Interview Question

This is a interview question that was given to me by Ryan McLelland at UHIN.

# Problem
Given a position on a chess board (Example:  x = 1, y = 2) provide a list of all possible moves for the a knight piece.

# Approach
Best case scenerio the knight can move 8 spaces total. With that in mind a kight can only move in an L shape. A knight's only
moves up or down one square vertically and over two squares horizontally OR up or down two squares vertically
and over one square horizontally.

For example if we have a knightnamed 'k' highligted in red  at [3,3] it is the best case scnerio that the knight can move 8 spaces denoted by the green highligting.
The way to calculate each transformation is denoted on the right with the corresponding number. 

I decided to do a visual representation in a simple ASCII way to better show where a knight can move. K will be the knight and the X are the possible moves. Since this is a javascript assignment I did it in javascript and used HTML only as a way to start the javascript. 

![alt text](https://github.com/Matt-T-Pham/UHIN/blob/main/images/KightMovement.png?raw=true)

# Usage

1. Make sure both idex.html and Knight.js are in the same directory.
2. Run the HTML file by double clicking it.
3. In the defualt web browser input x,y coordinate in the dialog box.
