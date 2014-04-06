/* -------------------------------------
 *
 *		<?List of FUNCTIONS to be Used>
 *
 *--------------------------------------*/			

function setFullDate() {
	timeOrSplit.setAttribute("onclick" , "timeOrSplitFunc(this.value);");
	dateOrStart.setAttribute("onclick", "");
		if ( month == 0 )
			month = "Jan";
		else if ( month == 1 )
			month = "Feb";
		else if ( month == 2 )
			month = "Mar";
		else if ( month == 3 )
			month = "Apr";
		else if ( month == 4 )
			month = "May";
		else if ( month == 5 )
			month = "Jun";
		else if ( month == 6 )
			month = "Jul";
		else if ( month == 7 )
			month = "Aug";
		else if ( month == 8 )
			month = "Sep";
		else if ( month == 9 )
			month = "Oct";
		else if ( month == 10 )
			month = "Nov";
		else if ( month == 11 )
			month = "Dec";
		else;
		
		display.value = date + " " + month + " " + year;

	clearTimeout(clockTimeout);
};

function setFullTime() {
	timeOrSplit.setAttribute("class", "active");
	timeOrSplit.setAttribute("onclick" , "");
	dateOrStart.setAttribute("onclick", "dateOrStartFunc(this.value);");
	var localDate = new Date();
	var h = localDate.getHours(),
		m = localDate.getMinutes(),
		s = localDate.getSeconds(),
		fullTime,
		amOrPm = "AM" ;
		
			
		if ( h < 10 ) {
			h = "0" + h;
			if ( h == 0 ) {
				h = 12;
				amOrPm = "AM";
			}
		}
		else if( h > 12 ) {
			h -= 12;
			if ( h < 10 ) {
				if ( h == 0 )
				h = 12;
			h = "0" + h;
			}
			amOrPm = "PM";
		}
		else;
		
		if ( m < 10 )
			m = "0" + m;
		if ( s < 10 )
			s = "0" + s;
			
		
		
		fullTime = h + ":" + m + ":" + s + " " + amOrPm;
		
		display.value =  fullTime;
		clockTimeout = setTimeout("setFullTime()", 1 );
};

function timerFunc() {
	dateOrStart.setAttribute("class", "");
	timeOrSplit.setAttribute("class", "");
	clock.setAttribute("class", "");
	timer.setAttribute("class", "active");
	clearTimeout(clockTimeout);
	clearTimeout(timerTimeout);
	timer.setAttribute("onclick", "");
	clock.setAttribute("onclick", "clockFunc();");
	dateOrStart.setAttribute("onclick", "setFullTimeOnTimer()");
	timeOrSplit.setAttribute("onclick" , "splitTime();");
	milSeconds = "0" + 0,
	Seconds = "0" + 0,
	Minutes = "0" + 0,
	Hours = "0" + 0;
	fullTimer = Hours + ":" + Minutes + ":" + Seconds + "." + milSeconds;
	display.value = fullTimer;
	dateOrStart.value = "Start";
	timeOrSplit.value = "Split";
};

function clockFunc() {
	clock.setAttribute("class", "active");
	timer.setAttribute("class", "");
	dateOrStart.setAttribute("class", "");
	clearTimeout(timerTimeout);
	clearTimeout(clockTimeout);
	timer.setAttribute("onclick", "timerFunc();");
	setFullTime();
	dateOrStart.value = "Date";
	timeOrSplit.value = "Time";
};

function dateOrStartFunc(z) {
	z = z.toUpperCase();
	if ( z == "DATE" ) {
		dateOrStart.setAttribute("class", "active");
		timeOrSplit.setAttribute("class", "");
		setFullDate();
	}
	else if ( z == "START") {
		setFullTimeOnTimer();
	}
	else;
};

function timeOrSplitFunc(x) {
	x = x.toUpperCase();
	if ( x == "TIME" ) {
		dateOrStart.setAttribute("class", "");
		timeOrSplit.setAttribute("class", "active");
		setFullTime();
	}
	else if ( x == "SPLIT") {
		splitTime();
	}
	else;
};

function setFullTimeOnTimer() {
	dateOrStart.value = "Reset";
	dateOrStart.setAttribute("onclick", "resetFullTimeOnTimer()");
	
	milSeconds++;
	
	if ( milSeconds < 10 || milSeconds <= 0 )
		milSeconds = '0' + milSeconds;
	
	if ( milSeconds > 99 ) {
		Seconds++;
		if ( Seconds < 10 || Seconds == 0 )
			Seconds = '0' + Seconds;
		milSeconds -= 100;
		if ( milSeconds == 0 )
			milSeconds = '0' + milSeconds;
	}
	
	if ( Seconds > 59 ) {
		Minutes++;
		if ( Minutes < 10 || Minutes == 0 )
			Minutes = '0' + Minutes;
		Seconds -= 60;
		Seconds = '0' + Seconds;
	}
	if ( Minutes > 59 ) {
		Hours++;
		Minutes -= 60;
		Minutes = '0' + Minutes;
	}
		
	fullTimer = Hours + ":" + Minutes + ":" + Seconds + "." + milSeconds;
	display.value = fullTimer;
	timerTimeout = setTimeout("setFullTimeOnTimer()", 10);
};

function resetFullTimeOnTimer() {
	clearTimeout(timerTimeout);
	counterHolder = 0,
	milSeconds = "0" + 0,
	Seconds = "0" + 0,
	Minutes = "0" + 0,
	Hours = "0" + 0;
	fullTimer = "00:00:00.00";
	display.value = fullTimer;
	dateOrStart.value = "Start";
	dateOrStart.setAttribute("onclick", "setFullTimeOnTimer()");
};

function splitTime() {
	if ( logA.value == "00:00:00.00" ) {
		logA.value = fullTimer;
	}
	else if ( logB.value == "00:00:00.00" ) {
		logB.value = fullTimer;
	}
	else if ( logC.value == "00:00:00.00" ) {
		logC.value = fullTimer;
	}
	else;
};
function removeTime(test) {
	if ( test == "a" ) {
		logA.value = "00:00:00.00";
	}
	else if ( test == "b" ) {
		logB.value = "00:00:00.00";
	}
	else if ( test == "c" ) {
		logC.value = "00:00:00.00";
	}
	else;
};

function removeAllTime() {
	logA.value = "00:00:00.00";
	logB.value = "00:00:00.00";
	logC.value = "00:00:00.00";
};