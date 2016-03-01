//========================
//	City
//========================

//your sun/moon object:
var Circle = {
	x: 500,
	y: 300,
	d: 500,
	c: "#ffcc66"
};


//your building object:

var Buildings = [];
var Buildings2 = [];




function setup() {
	createCanvas(windowWidth, windowHeight);

	for(var i = 0; i < 30 ;i = i+1){
 		Buildings.push( new Build(i*random(30,100),height/2) );


	}
}

function draw(){

	noStroke();
	fill(Circle.c);
	ellipse(Circle.x, Circle.y,Circle.d, Circle.d);

	for(var i = 0; i < Buildings.length; i++){
		Buildings[i].drawBuilding();

	}


}

function Build(x,y){
	this.x = x;
	this.y = y;
	this.drawBuilding = function(){
		noStroke();
		fill(50);
		rect(this.x, this.y,25, 100);
	}
};
