var Lib = function() {

	function isNumber(n) {
		return (Object.prototype.toString.call(n) === '[object Number]' || Object.prototype.toString.call(n) === '[object String]') &&!isNaN(parseFloat(n)) && isFinite(n.toString().replace(/^-/, ''));
	}

	/**
	 * Converts number from one range to number scaled accoringly to another range
	 * eg. 50 from range <0;100> converts to 0 of range <-100;100>
	 * @param  [number] $number [number you want to convers]
	 * @param  [number] $oldMin [old range minimum]
	 * @param  [number] $oldMax [old range maximum]
	 * @param  [number] $newMin [new range minimum]
	 * @param  [number] $newMax [new range maximum]
	 * @return [number]         [converted number]
	 */
	function linearConversion(number, oldMin, oldMax, newMin, newMax) {
		oldRange = oldMax - oldMin;

		if (oldRange === 0) {
			newValue = newMax;
		} else {
			newRange = newMax - newMin;
			newValue = (((number - oldMin) * newRange) / oldRange) + newMin;
		}	

		return newValue;
	}

	return {
		isNumber: isNumber,
		linearConversion: linearConversion
	};
}();