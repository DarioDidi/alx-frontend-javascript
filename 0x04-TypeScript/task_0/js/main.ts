interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}

let student1: Student = {
	firstName: "stud", lastName: "one", age: 50, location: "Lagos"
}
let student2: Student = {
	firstName: "stud2", lastName: "two", age: 60, location: "Algiers"
}

let students: Student[] = [student1, student2];

const table = document.createElement("table")
table.border = "1";

const header = table.insertRow();
const headerCell1 = header.insertCell();
headerCell1.innerHTML = "First Name";
const headerCell2 = header.insertCell();
headerCell2.innerHTML = "Last Name";
const headerCell3 = header.insertCell();
headerCell3.innerHTML = "Location";

students.forEach((student) => {
	const row = table.insertRow();
	const cell1 = row.insertCell();
	const cell2 = row.insertCell();
	const cell3 = row.insertCell();
	cell1.textContent = student.firstName;
	cell2.textContent = student.lastName;
	cell3.textContent = student.location;
});

document.body.appendChild(table);
