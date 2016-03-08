//========================
//	City
//========================

//your sun/moon object:
var circle1 = {
	x: 500,
	y: 300,
	d: 500,
	c: "#ffcc66",
	display: function(){
		background("#99ccff");
		noStroke();
		fill(this.c);
    ellipse(this.x,this.y,this.d,this.d);
  }
};
//your building object:
var Buildings2 = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
		for(var i = 0; i < 50 ;i = i+1){
			Buildings2.push( new Tower2(random(0,width),(height*.75),random(10,45),random(25,300),random(150,200)) );
		}
		for(var i = 0; i < 75 ;i = i+1){
			Buildings2.push( new Tower2(random(0,width),(height*.75),random(10,35),random(25,200),random(90,150)) );
		}
		for(var i = 0; i < 5 ;i = i+1){
			Buildings2.push( new Tower2(random(0,width),(height*.75),random(20,30),random(100,375),random(75,125)) );
		}
}

function draw(){
	circle1.display();
	for(var i = 0; i < Buildings2.length; i++){
		Buildings2[i].drawTower2();
	}
	noStroke();
	fill("white");
	rect(0,height*.75,width,height*.25);
}

function Tower2(x,y,w,h,c){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.c = c;
	this.drawTower2 = function(){
		noStroke();
		fill(this.c);
		rect(this.x, this.y-this.h, this.w, this.h);
		stroke(this.c);
		line(this.x+(this.w/2),this.y-this.h,this.x+(this.w/2),this.y-this.h-8);
	}
};
