export class User {

    private _userId : string;
    private _firstName : string;
    private _lastName : string;
    private _mobile : string;


	constructor() {}    

	public get userId(): string {
		return this._userId;
	}

	public set userId(value: string) {
		this._userId = value;
	}    

	public get firstName(): string {
		return this._firstName;
	}

	public set firstName(value: string) {
		this._firstName = value;
	}    

	public get lastName(): string {
		return this._lastName;
	}

	public set lastName(value: string) {
		this._lastName = value;
	}

	public get mobile(): string {
		return this._mobile;
	}

	public set mobile(value: string) {
		this._mobile = value;
	}    
}