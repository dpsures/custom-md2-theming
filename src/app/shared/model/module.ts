import { Course } from "./course";

export class Module {

    private moduleName : string;
    private courses : Course;


	constructor($moduleName: string, $courses: Course) {
		this.moduleName = $moduleName;
		this.courses = $courses;
	}
    

	public get $moduleName(): string {
		return this.moduleName;
	}

	public set $moduleName(value: string) {
		this.moduleName = value;
	}
    

	public get $courses(): Course {
		return this.courses;
	}

	public set $courses(value: Course) {
		this.courses = value;
	}
    
}