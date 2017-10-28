import { Course } from "./course";

export class Module {

	private moduleID : string;
    private moduleName : string;
    private courses : Course;


	constructor() {}	

	public get $moduleID(): string {
		return this.moduleID;
	}

	public set $moduleID(value: string) {
		this.moduleID = value;
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