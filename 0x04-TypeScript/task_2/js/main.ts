interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string
	getCoffeeBreak(): string
	workTeacherTasks(): string
}

class Director implements DirectorInterface {
	workFromHome = () => "Working from home";
	getCoffeeBreak = () => "Getting a coffee break";
	workDirectorTasks = () => "Getting to director tasks";
	toString(): string {
		return "Director";
	}
}

class Teacher implements TeacherInterface {
	workFromHome(): string { return "Cannot work from home" }
	getCoffeeBreak(): string { return "Cannot have a break" }
	workTeacherTasks(): string { return "Getting to work" }
	toString(): string {
		return "Teacher";
	}
}

function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === "number" && salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
}

console.log(`${createEmployee(200)}`);
console.log(`${createEmployee(1000)}`);
console.log(`${createEmployee('$500')}`);


function isDirector(employee: Director | Teacher): employee is Director {
	return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	} else {
		return employee.workTeacherTasks();
	}
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
	if (todayClass === "Math") {
		return "Teaching Math"
	} else if (todayClass === "History") {
		return "Teaching History";
	}
}

teachClass('Math');
teachClass('History');
