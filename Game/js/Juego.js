// CONSTANTES
DIR_IMG = "images/";
LARGO = "600";
ALTO = "400";
POSX_INICIAL = Math.round(LARGO/2) - 15;
POSY_INICIAL = ALTO - 15;
JUEGO_FPS = 50;

MENU=0;
GAME=1;

var micanvas;
var contexto;
var gamestate;

/*
 * tendremos una clase que controlara las posiciones
 * dentro de nuestro sprite de imagenes
 * 
 * */
function Posicion(xi,yi,xf,yf){
	this.xIni=xi;
	this.yIni=yi;
	this.xFin=xf;
	this.yFin=yf;
}


function limpiar () {
	micanvas.width = micanvas.width;//la linea mas extraña de codigo xD
}

var Juego = function() {
	
	var posicionInicial=new Posicion(0,62,30,30);
    var posicionInicial2=new Posicion(0,0,213,200);
	var bomberman = new Personaje();
    var hero=new Hand();
    hero.setPosicion(posicionInicial2);
	bomberman.setPosicion(posicionInicial);
	var manejadornave = new ManejadorDeEventos();
	manejadornave.agregar(bomberman);	
	manejadornave.agregar(hero);	
	
    
    gamestate=GAME;
    
    
    
	this.correrJuego = function() {
        switch (gamestate){
           case MENU:
                
                break;
           
           case GAME:
                    limpiar();
                    bomberman.dibujar();
                    hero.dibujar();
                break;
            
            default:
                
        }
        
		
	};	
	setInterval(this.correrJuego, 1000 / JUEGO_FPS);
	
};

window.onload = function() {
	micanvas = document.getElementById("espacio");
	contexto = micanvas.getContext("2d");	
    var juego = new Juego();
};
