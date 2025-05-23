/// <reference path="subjects/Teacher.ts" />
///// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />
var Subjects;
(function (Subjects) {
    var cTeacher = {
        experienceTeachingC: 10,
        firstName: "See",
        lastName: "Prof",
    };
    console.log('C++');
    Subjects.cpp.setTeacher(cTeacher);
    console.log(Subjects.cpp.getRequirements());
    console.log(Subjects.cpp.getAvailableTeacher());
    console.log('Java');
    Subjects.java.setTeacher(cTeacher);
    console.log(Subjects.java.getRequirements());
    console.log(Subjects.java.getAvailableTeacher());
    console.log('React');
    Subjects.react.setTeacher(cTeacher);
    console.log(Subjects.react.getRequirements());
    console.log(Subjects.react.getAvailableTeacher());
})(Subjects || (Subjects = {}));
//# sourceMappingURL=main.js.map