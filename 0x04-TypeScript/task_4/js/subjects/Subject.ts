namespace Subjects {
	export class Subject {
		teacher: Teacher;

		constructor() {
			this.teacher = {} as Teacher; //Initialize  as empty object
		}

		setTeacher(teacher: Teacher): void {
			this.teacher = teacher;
		}

		getTeacher(): Teacher | null {
			return this.teacher;
		}
	}
}
