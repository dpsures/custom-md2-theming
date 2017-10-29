import { Course } from "./course";

export class Module {

	sequenceNbr : number;
	moduleID : string;
    moduleName : string;
    courses : Course;


	constructor() {}	

	public getModuleID(): string {
		return this.moduleID;
	}

	public setModuleID(value: string) {
		this.moduleID = value;
	}
	
	public getModuleName(): string {
		return this.moduleName;
	}

	public setModuleName(value: string) {
		this.moduleName = value;
	}
    
	public getCourses(): Course {
		return this.courses;
	}

	public setCourses(value: Course) {
		this.courses = value;
	}    

	public getSequenceNbr(): number {
		return this.sequenceNbr;
	}

	public setSequenceNbr(value: number) {
		this.sequenceNbr = value;
	}

}