 function calculator(startingValue) {
	'use strict';

	var _current = startingValue || 0;

	function add(val) {
		_current += val;
		return this;
	}

	function subtract(val) {
		_current -= val;
		return this;
	}

	function multiply(val) {
		_current *= val;
		return this;
	}

	function divide(val) {
		_current /= val;
		return this;
	}

	function total() {
		return _current;
	}

	function clear() {
		_current = 0;
		return _current;
	}

	return {
		add,
		subtract,
		multiply,
		divide,
		total,
		clear
	};
}

var myCalc = calculator(12);

console.log(myCalc.multiply(5).add(3).total());
