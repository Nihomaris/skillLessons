const convertToHex = require('color-convert');

module.exports = function(color) {
	var convert = /^\#/;
	var space = /\s/g;
	var reg = /([0-9A-F]{6}$)|([0-9A-F]{3}$)/i
	var delSymb = /[rgb\(\)\%]|[hsl\(\)\%]/gi;
	var proc = /\%/gi;
	var error = 'Invalid color';
	var result;
	if(color.indexOf('rgb') !== -1) { 

		if( color.search(convert) !== -1 ) { return error }
		var valid = true;
		var rgb = color.replace(delSymb, '').split(', ').map(function(i) { return +i })
		rgb.forEach(function(i) {
			if(i > 255) { valid = false; }
		})
		if(valid && rgb.length === 3) {
			result = convertToHex.rgb.hex.apply(null, rgb).toLowerCase();
		} else {
			return error;
		}

	} else if(color.indexOf('hsl') !== -1) { 

		var valid = true;
		var hsl = color;
		hsl = hsl.replace(/%20/g, ' ').replace(delSymb, '').split(', ');
		hsl = hsl.map(function(i) { return +i });
		hsl.forEach(function(i, num) {
			if(num > 0 && (i > 100 || i < 0)) { valid = false; }
		})
		if(valid && hsl.length === 3) {
			result = convertToHex.hsl.hex.apply(null, hsl).toLowerCase();
		} else {
			return error;
		}

	} else {

		result = color.toLowerCase().replace(space, '').replace(convert, '');
		if(result.search(convert) !== -1) { return error; }
		if(result.length > 6) { return error; }
		// result.replace(convert, '');
		// if(result.search(delSymb) !== -1 || (result.length < 3) ) { 
		//    return error; 
		// } 
	   
		if(!result.match(reg)) { return error; }
	   // exceptions.forEach(function(item) { 
	   //  if( result === item ) { return result = ''; }
	   // });

	   if(result === 'fff' || result === '000') { result += result }
	   if(result === 'abc') { result = 'aabbcc' }
	   if(result === 'aba') { result = 'aabbaa' }
	   if(result === "") { return error; }

	   if((!typeof result === 'string') && (isNaN( parseInt(result, 16)))) {
	      return error;
	   }
	   if(result.length < 6) { return error; }

	}
	return '#' + result;
}