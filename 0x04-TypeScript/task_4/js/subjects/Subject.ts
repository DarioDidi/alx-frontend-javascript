namespace Subjects {
	export class Subject {
		protected teacher: Teacher | null = null;

		setTeacher(teacher: Teacher): void {
			this.teacher = teacher;
		}

		getTeacher(): Teacher | null {
			return this.teacher;
		}
	}
}
