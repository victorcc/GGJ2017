
function Hand(){

	this.posx = new Number(200);
    this.posy = new Number(330);
    
    this.figura = new Image();
    this.figura.src = DIR_IMG + "hand.png";
    
    this.setPosicion=function(pos){
		this.posicion=pos;
	};
    
    this.dibujar = function() {
    	var figura = this.getFigura();
    	//alert(this.posicion.xIni+" "+this.posicion.yFin);
    	var xIni=this.posicion.xIni;
    	var yIni=this.posicion.yIni;
    	var xFin=this.posicion.xFin;
    	var yFin=this.posicion.yFin;
    	
    	contexto.drawImage(figura,xIni,yIni,xFin,yFin,this.getX(),
        this.getY(),150,150);
    	
    };
    
    this.getX = function() {
    	return this.posx;
    };
    
    this.getY = function() {
    	return this.posy;
    };    
    
    this.getFigura = function() {
    	return this.figura;
    };
    	
    this.flag1=new Number(1);
    
    this.animar=function(h){
		var pos;
		switch(this.flag1%3){
			case 0:
				pos=new Posicion(0,h,30,30);
			break;
			
			case 1:
				pos=new Posicion(33,h,30,30);
			break;
			
			default:
				pos=new Posicion(66,h,30,30);
		}
		
		this.setPosicion(pos);
		this.flag1=1+this.flag1;
	};
    
    this.correrAbajo=function(){
		if((this.posy+30) < ALTO)
			this.posy+=15;
		
	};
    
    this.correrArriba=function(){
		if(this.posy>0)
			this.posy-=15;
	};
    
    
    this.correrDerecha=function(){
		if(this.posx+115<LARGO)
		this.posx+=15;
	};
    
    this.correrIzquierda=function(){
		if(this.posx>5)
		this.posx-=15;
	};
	
	
	this.reaccionar=function(tecla){
		switch(tecla){	
		    //A
		    case 65:
				this.correrIzquierda();
				//this.animar(93);				
		    break;
		    //D
			case 68:
				this.correrDerecha();
				//this.animar(33);				
		    break;	
		    //S
			case 83:
				//this.correrAbajo();
				//this.animar(63);				
		    break;	
		    //W
			case 87:
				//this.correrArriba();
				//this.animar(0);				
		    break;	
		}
	}
  
}
