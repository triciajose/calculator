var val = '0';
var second_func = false;
var modes = ['DEG', 'RAD', 'GRAD'];
var current_mode = 0;
var cursor = false;
var cursor_pos;
var hyp = false;
var alpha = false;

// ----- TOP ROW -------
function secondFunc(){
	if (second_func == true) {
		second_func = false;
		document.calculator.secf.value = '';
	}
	else {
		second_func = true;
		document.calculator.secf.value = '2ndF';
	}
	
}

function changeMode() {
	if (current_mode < 2) {
		current_mode +=1;
	}
	else
		current_mode = 0;
	document.calculator.modes.value = getMode();
}

function getMode() {
	return modes[current_mode];
}

function leftCursor() {
	if (cursor == false) {
		cursor = true;
		cursor_pos = val.length - 1;

	}
	else {
		if (cursor_pos > 0)
			cursor_pos -= 1;	
	}
	console.log(cursor_pos);

}

function rightCursor() {
	if (cursor == true) {
		cursor_pos += 1;
	}
}

function deleteValue() {
	if (val != "0") {
		val = val.substring(0, cursor_pos) + val.substring(cursor_pos + 1, val.length);
		display();
	}
}

function clearCalc() {
	val = '0';
	cursor = false;
	second_func = false;
	hyp = false;
	display();
}

// ------- second row -----------

function hype() {
	if (hyp == true) {
		hyp = false;
		document.calculator.hyp.value = '';
	}
	else {
		hyp = true;
		document.calculator.hyp.value = 'HYP';
	}
}

function advanced(operation) {
	if (val =='0') {
		val ='';
	}
	if (second_func) {
		switch(operation) {
			case 0:
				if (second_func && hyp) {
					val+='asinh(';
				}
				else
					val+='asin(';
				break;	
			case 1:
				if (second_func && hyp) {
					val+='acosh(';
				}
				else
					val+='acos(';
				break;
			case 2:
				if (second_func && hyp) {
					val+='atanh(';
				}
				else
				val+='atan(';
				break;
			case 3:
				val+='√(';
				break;
			case 4:
				val+='DONT KNOW';
				break;
			case 5:
				if(val =='') {
					val= 0;
				}
				val += '^2';
				break;
			case 6:
				val+='DONT KNOW';
				break;
			case 7:
				if (val=='')
					val = "0°00'00.00";
				else
					val*="1°00'00.00";
				break;
			case 8:
				if(val =='') {
					val= 0;
				}
				val+=",";
				break;
			}
		secondFunc();
	}
	else {
		switch(operation) {
		case 0:
			if (hyp) {
					val+='sinh(';
					hype();
				}
				else
					val+='sin(';
			break;
		case 1:
			if (hyp) {
					val+='cosh(';
					hype();
				}
				else
					val+='cos(';
			break;	
		case 2:
			if (hyp) {
					val+='tanh(';
					hype();
				}
				else
					val+='tan(';
			break;
		case 3:
			val+='π';
			break;
		case 4:
			if(val =='') {
				val= 0;
			}
			val+='^';
			break;
		case 5:
			if(val =='') {
				val= 1;
			}
			val+='Exp';
			break;
		case 6:
			val+="┘";
			break;
		case 7:
			val+="°";
			break;
		
		case 8:
			setAlpha();
			break;
		
		}
	}
	display();
}


// ---- third row -------
function setAlpha(){
	if (alpha == true) {
		alpha = false;
		document.calculator.RCL.value = '';
	}
	else {
		alpha = true;
		document.calculator.RCL.value = 'A';
	}
}

function memory() {

}

//  ------ BASIC FUNCTION ---------
function numeric(number){
	if (second_func) {
		switch(number) {
			case 0:
			if (val == '0') {
					val = '';
				}
				val +='10^';
				display();
				break;
			case 1:
				if (val == '0') {
					val = '';
				}
				val +='log(';
				display();
				break;
			case 2:
				if (val == '0') {
					val = '';
				}
				val +='ln(';
				display();
				break;
			case 3:
				val +='3';
				display();
				break;
			case 4:
				val +='!';
				display();
				break;
			case 5:
				val +='5';
				display();
				break;
			case 6:
				val +='6';
				display();
				break;
			case 7:
				if (val == '0') {
					val = '';
				}
				val +='RANDOM';
				display();
				break;
			case 8:
				val +='8';
				display();
				break;
			case 9:
				val +='9';
				display();
				break;
			}
		secondFunc();
	}
	else {
		if (val == '0') {
		val = number;
		display();
		}
		else {
			switch(number) {
			case 0:
				val +='0';
				display();
				break;
			case 1:
				val +='1';
				display();
				break;
			case 2:
				val +='2';
				display();
				break;
			case 3:
				val +='3';
				display();
				break;
			case 4:
				val +='4';
				display();
				break;
			case 5:
				val +='5';
				display();
				break;
			case 6:
				val +='6';
				display();
				break;
			case 7:
				val +='7';
				display();
				break;
			case 8:
				val +='8';
				display();
				break;
			case 9:
				val +='9';
				display();
				break;
			default:
				break;
			}
	}
	}
	
}

function basic(operation) {
	if (second_func) {
		switch(operation) {
			case 0:
				val +='0';
				display();
				break;
			case 1:
				if (val == '0') {
					val = '';
				}
				val +='log(';
				display();
				break;
			case 2:
				if (val == '0') {
					val = '';
				}
				val +='ln(';
				display();
				break;
			case 3:
				val +='3';
				display();
				break;
			case 4:
				val +='!';
				display();
				break;
			case 5:
				val +='5';
				display();
				break;
			case 6:
				if (val == '0') {
					val = '';
				}
				val +='E^';
				display();
				break;
			case 7:
				if (val == '0') {
					val = '';
				}
				val +='cbrt(';
				display();
				break;
			case 8:
				val +='8';
				display();
				break;
			case 9:
				val +='9';
				display();
				break;
			}
		secondFunc();
	}
	else {
	switch(operation) {
		case 0:
			if (val == '0') {
				val = '(';
			}
			else 
				val = val + "(";
			break;
		case 1:
			if (val == '0') {
				val = ')';
			}
			else 
				val = val + ")";
			break;
		case 2:
			val +='+';
			break;
		case 3:
			val +='-';
			break;
		case 4:
			val +='*';
			break;
		case 5:
			val +='/';
			break;
		case 6:
			val +='.';
			break;
		case 7:
			if (val == '0') {
				val = '-';
			}
			else 
				val += "-";
			break;
		case 8:
			val += val;
			break;
		case 9:	
			try{
				replace();
				if (val.indexOf('┘') > -1) {
					reduce();
				}
				else if (val.indexOf('!') > -1) {
					factorial();
				}
				else 
					val = math.eval(val);
				break;
			} catch(err) {
				val = 'Error 1';
			}
		}
		try{
			display();
		} catch(err) {
			val = 'Error 1';
			display();
		}
	}
}

function replace() {
	console.log(val);
	val = val.replace("π", "pi");
	val = val.replace("√(", "sqrt(");
	val = val.replace("RANDOM", "random()");
	val = val.replace("log(", "log10(")
	val = val.replace("ln(", "log(");
	
	if (val == "Exp") {
		val = val.replace("Exp", "1");
	}
	else {
		val = val.replace("Exp", "*10^");
	}
}

function reduce(){
	numerator = val.substring(0, val.indexOf("┘"));
	denominator = val.substring(val.indexOf("┘") + 1, val.length);
	console.log("numerator:" + numerator);
	console.log("denominator:" + denominator);

  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };

  gcd = gcd(numerator,denominator);
  console.log("gcd:" + gcd);
  if (numerator % denominator == 0) {
  	val = (numerator +  "/" + denominator);
  	val = math.eval(val);
  }
  else {
  	numerator = (numerator / gcd)
  	denominator = (denominator / gcd);
  	val = numerator + "┘" + denominator;
    if (numerator > denominator) {
  		mod = numerator % denominator;
  		whole = numerator - mod;
  		whole = whole / denominator;
  		val = whole + "┘" + mod + "┘" + denominator; 
  	}
  }

}


function factorial() { 
	n = val.substring(0, val.indexOf("!"));
	val = factorial(n) + val.substring(val.indexOf("!") + 1, val.length); 
}

function display(){
	document.calculator.ans.value = val;
}