export default class FrameLabel{
	
	private _name:string;
	private _frame:number;
	
	constructor(name:string,frame:number){
		this._name=name;
		this._frame=frame;
	}
	
	public get name():string{
		return this._name;
	}
	
	public get frame():number{
		return this._frame;
	}
	
}
