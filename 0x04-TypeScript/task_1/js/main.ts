interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
};

console.log(teacher3)

interface Directors extends Teacher {
	numberOfReports: number;
}

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
	(firstname: string, lastName: string): string;
}

//const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
//	return `${firstName[0]}. ${lastName}`;
//}

function printTeacher(firstName: string, lastName: string) {
	return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher(teacher3.firstName, teacher3.lastName));


//class StudentClass {
//	firstName: string;
//	lastName: string;
//	constructor(firstName: string, lastName: string) {
//		this.firstName = firstName;
//		this.lastName = lastName;
//	}
//
//	workOnHomework(): string {
//		return 'Currently working';
//	}
//}

interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

interface StudentConstructor {
	new(firstName: string, lastName: string): StudentClassInterface
}

class StudentClass implements StudentClassInterface {
	constructor(private firstName: string, private lastName: string) { }
	workOnHomework(): string {
		return "Currently working";
	}
	displayName(): string {
		return this.firstName;
	}
}


