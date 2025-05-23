var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
            this.teacher = {}; //Initialize  as empty object
        }
        Subject.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        Subject.prototype.getTeacher = function () {
            return this.teacher;
        };
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
