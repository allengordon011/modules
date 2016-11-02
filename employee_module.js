var employee = (function () {
	var _name = name;
	var _age;
	var _salary;

	function getAge() {
		return _age()
	}

	function _getSalary() {
		return _salary;
	}

	function _getName() {
		return _name;
	}

	function setAge(age) {
		_age = age;
	}

	function setSalary(salary) {
		_salary = salary;
	}

	function setName(name) {
		_name = name;
	}

	function increaseSalary(percentage) {  // 10% ::: 0.10 ==> 1.10
		var currentSalary = _getSalary();
		setSalary(currentSalary + (percentage * currentSalary));
	}

	function incrementAge(years) {
		years = years || 1;
		var currentAge = getAge();
		setAge(currentAge + years);
	}

	return {
		setAge: setAge,
		setSalary: setSalary,
		setName: setName,
		increaseSalary: increaseSalary,
		incrementAge: incrementAge,
		getAge: _getAge
	};
}());


var bob = employee;
var bill = employee;

bob.setName("Bob Smith");
bob.setAge(42);

console.log(bob.getAge());
console.log(bill);