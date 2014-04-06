/* ----------------------------------
 *
*		<?Get all the INPUT Buttons>
*
*------------------------------------*/			 
var input = document.getElementsByTagName("input");

/* ---------------------------------
 *
 *		<? Name all INPUT Buttons>
 *
 *----------------------------------*/			
var timer = input[1],
	clock = input[2],
	display = input[0],
	dateOrStart = input[3],
	timeOrSplit = input[4],
	logA = input[5], logAReset = input[6],
	logB = input[7], logBReset = input[8],
	logC = input[9], logCReset = input[10],
	globReset = input[11];
	
/* -----------------------------
 *
 *		<?Time Initializations>
 *
 *------------------------------*/			
var dateHolder = new Date();
var month = dateHolder.getMonth(),
	date = dateHolder.getDate(),
	year = dateHolder.getFullYear();
var counterHolder = 0,
	milSeconds = 0,
	Seconds = "0" + 0,
	Minutes = "0" + 0,
	Hours = "0" + 0;
var fullTimer = "00:00:00.00",
	timerTimeout,
	clockTimeout;

/* -----------------------------------------------------
 *
*		<?Set Default Values and Add Onlick Functions>
*
*------------------------------------------------------*/			 
setFullTime();
logA.value =  "00:00:00.00";
logB.value =  "00:00:00.00";
logC.value =  "00:00:00.00";
timer.setAttribute("onclick", "timerFunc();");
clock.setAttribute("onclick", "clockFunc();");
logAReset.setAttribute("onclick", "removeTime('a');");
logBReset.setAttribute("onclick", "removeTime('b');");
logCReset.setAttribute("onclick", "removeTime('c');");
globReset.setAttribute("onclick", "removeAllTime();");
clock.setAttribute("class", "active");
timeOrSplit.setAttribute("class", "active");