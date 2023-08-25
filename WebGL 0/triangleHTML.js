/*
WebGL #0 
Author : Anna Stevens
Due date : 8/25/23
Date completed: 8/25/23
Time spent on the assignment: 3 hrs 
Name of the peer reviewer: N/A 
Functional: Yes
Description:
	Using HTML5, this program loads a webpage displaying two purple triangles. 
*/

// triangleHTML.js
function main(){
// Retrieve <canvas> element
    var canvas = document.getElementById('example');
    if (!canvas){
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

    // Get the rendering context for 2DCG
    var ctx = canvas.getContext('2d');

    //Draw a red triangle
    ctx.fillStyle = 'rgba(127.5, 0, 127.5, 1.0)'; // Set a red color
    ctx.beginPath();
    ctx.moveTo(128, 0);
    ctx.lineTo(0, 256);
    ctx.lineTo(256, 256);
    ctx.fill();
    ctx.closePath();
    //ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'; // Set a blue color
    ctx.beginPath();
    ctx.lineTo(384,512);
    ctx.lineTo(512,256);
    ctx.lineTo(256,256);
    ctx.fill();
    ctx.closePath();

}