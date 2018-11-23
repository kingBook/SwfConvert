import FrameLabel from "./FrameLabel";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MovieClip extends cc.Component {
	
	//============================================================================
	
	
	
	
	
	//============================================================================
	public gotoAndPlay(frame:any):void{
		
	}
	
	public gotoAndStop(frame:any):void{
		
	}
	
	public nextFrame():void{
		
	}
	
	public play():void{
		
	}
	
	public prevFrame():void{
		
	}
	
	public stop():void{
		
	}
	
	//====================== getter ===========================
	public get currentFrame():number{
		return 0;
	}
	public get currentFrameLabel():string{
		return '';
	}
	public get currentLabel():string{
		return '';
	}
	public get currentLabels():Array<FrameLabel>{
		return null;
	}
	public get isPlaying():boolean{
		return false;
	}
	public get totalFrames():number{
		return 0;
	}
}
