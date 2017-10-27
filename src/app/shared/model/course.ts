export class Course {

    private name : string;
    private duration : string;
    private status : string;


	constructor($name: string, $duration: string, $status: string) {
		this.name = $name;
		this.duration = $duration;
		this.status = $status;
	}
   

	public get $name(): string {
		return this.name;
	}

	public set $name(value: string) {
		this.name = value;
	}
    

	public get $duration(): string {
		return this.duration;
	}

	public set $duration(value: string) {
		this.duration = value;
	}
    

	public get $status(): string {
		return this.status;
	}

	public set $status(value: string) {
		this.status = value;
	}
    
}