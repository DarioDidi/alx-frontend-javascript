var Director = /** @class */ (function () {
    function Director() {
        this.workFromHome = function () { return "Working from home"; };
        this.getCoffeeBreak = function () { return "Getting a coffee break"; };
        this.workDirectorTasks = function () { return "Getting to director tasks"; };
    }
    Director.prototype.toString = function () {
        return "Director";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () { return "Cannot work from home"; };
    Teacher.prototype.getCoffeeBreak = function () { return "Cannot have a break"; };
    Teacher.prototype.workTeacherTasks = function () { return "Getting to work"; };
    Teacher.prototype.toString = function () {
        return "Teacher";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
console.log("".concat(createEmployee(200)));
console.log("".concat(createEmployee(1000)));
console.log("".concat(createEmployee('$500')));
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
}
teachClass('Math');
teachClass('History');
