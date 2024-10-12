// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}

funtion greet(){
	return `Hello, my name is ${this.name}, I am ${this.age} years old.`

}

function Employee(name, age, jobTitle) {
	Person.call(name, age);
	this.jobTitle = jobTitle;
}

function jobGreet(){
		return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${jobTitle}.`

}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
