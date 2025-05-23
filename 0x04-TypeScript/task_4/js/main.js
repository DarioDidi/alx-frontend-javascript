///// <reference path="subjects/Teacher.ts" />
///// <reference path="subjects/Subject.ts" />
///// <reference path="subjects/Cpp.ts" />
///// <reference path="subjects/Java.ts" />
///// <reference path="subjects/React.ts" />
///namespace Subjects {
///	const cTeacher: Teacher = {
///		experienceTeachingC: 10,
///		firstName: "See",
///		lastName: "Prof",
///	}
///
///	console.log('C++');
///	cpp.setTeacher(cTeacher);
///	console.log(cpp.getRequirements());
///	console.log(cpp.getAvailableTeacher());
///
///	console.log('Java');
///	java.setTeacher(cTeacher);
///	console.log(java.getRequirements());
///	console.log(java.getAvailableTeacher());
///
///	console.log('React');
///	react.setTeacher(cTeacher);
///	console.log(react.getRequirements());
///	console.log(react.getAvailableTeacher());
///}
/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />
var Subjects;
(function (Subjects) {
    // Create and export a constant cTeacher with experienceTeachingC = 10
    var cTeacher = {
        firstName: "John",
        lastName: "Doe",
        experienceTeachingC: 10, // Teacher has experience in C++
    };
    // C++ subject
    Subjects.cpp.setTeacher(cTeacher);
    console.log("C++");
    console.log(Subjects.cpp.getRequirements());
    console.log(Subjects.cpp.getAvailableTeacher());
    // Java subject
    Subjects.java.setTeacher(cTeacher);
    console.log("Java");
    console.log(Subjects.java.getRequirements());
    console.log(Subjects.java.getAvailableTeacher());
    // React subject
    Subjects.react.setTeacher(cTeacher);
    console.log("React");
    console.log(Subjects.react.getRequirements());
    console.log(Subjects.react.getAvailableTeacher());
})(Subjects || (Subjects = {}));
