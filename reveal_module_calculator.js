var myCalc = (function() {
	'use strict';
	var _current = 0;
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
		add: add,
		subtract: subtract,
		multiply: multiply,
		divide: divide,
		total: total,
		clear: clear
	};
}());

console.log(myCalc.multiply(5).add(3).total())
