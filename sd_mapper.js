"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Emmanuel Cortes Castaneda
   Date: 2.12.19  

*/

/*
Multiple variables are created that have different values. The timeStr variable converts the thisTime variable into a string. 
*/
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();

document.getElementById('timeStamp').innerHTML = timeStr;

// The variable thisHour is set to a value of the hour using the local time. The variable thisMonth is set to a value of the month using local time as well.
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

//The variable mapNum is determined by multiplying 2 by the thisMonth variable then by adding the thisHour variable then using the modulus (division remainder).
var mapNum = (2 * thisMonth + thisHour) % 24;

// The image will be changed when the time is changed to a specific hour by concatenating the strings into one
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

document.getElementById('planisphere').insertAdjacentHTML('afterbegin', imgStr);