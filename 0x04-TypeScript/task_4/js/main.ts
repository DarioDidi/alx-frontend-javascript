/// <reference path="../js/subjects/Teacher.ts" />
/// <reference path="../js/subjects/Subject.ts" />
/// <reference path="../js/subjects/Cpp.ts" />
/// <reference path="../js/subjects/Java.ts" />
/// <reference path="../js/subjects/React.ts" />

console.log(Subjects);

export const cTeacher: Subjects.Teacher = {
	firstName: "John",
	lastName: "Doe",
	experienceTeachingC: 10
};


export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());


















