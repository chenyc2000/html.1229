const width=400
const height=400
var amountX=3 //2~6
var amountY=2 //1~6
var speed=5 //3~30
var bodyLen=0 //0~100
var colorset = 
[[[0],["orange"],["#F6AE2D"],["#F19143"]],[[1],["orange"],["#F6AE2D"],["orange"]],[[2],["#AA9FB1"],["gray"],["#AA9FB1"]],[[3],["#F8F7FF"],["white"],["#F8F7FF"]],[[4],["#F8F7FF"],["white"],["black"]],[[5],["black"],["black"],["black"]]]
//var colorset = 
//[[[0],["purple"],["green"],["pink"]],[[1],["blue"],["yellow"],["orange"]],[[2],["pink"],["gray"],["#AA9FB1"]],[[3],["#F8F7FF"],["purple"],["#F8F7FF"]],[[4],["green"],["green"],["red"]],[[5],["black"],["black"],["black"]]]
//head,body,spot
var rareset = 
[[[0],["red"],["red"],["red"]],[[1],["orange"],["orange"],["orange"]],[[2],["yellow"],["yellow"],["yellow"]],[[3],["green"],["green"],["green"]],[[4],["blue"],["blue"],["blue"]],[[4],["purple"],["purple"],["purple"]]]
var bgR
var bgG
var bgB
var form
var rare

function setup() {
	//createCanvas(400, 400);

  var canvas = createCanvas(500, 500);
  canvas.parent('abc');
  
	background(0);
	colorset = shuffle(colorset);
	form=floor(random(0,4))
	rare=floor(random(-amountX*amountY*4,amountX*amountY))//no?
	bgR=random(50,250)
	bgG=random(50,250)
	bgB=random(50,250)
	amountX=floor(random(2,7))
	amountY=floor(random(1,7))
	speed=floor(random(3,15))
	bodyLen=floor(random(0,100))
}

function draw() {
	background(bgR,bgG,bgB);
//	fill(255)
//	text(int(mouseX)+","+int(mouseY),50,50)
	var gapX=width/(amountX+1)
	var gapY=height/(amountY+1)
	for(var i=0;i<amountX;i++){
		for(var j=0;j<amountY;j++){
			if((rare==j*amountX+i)&&(rare%2==0)){
				drawRare(81,79,gapX*i,gapY*j,floor(random(0,rareset.length)))
			}
			else if((rare==j*amountX+i)&&(rare%2!=0)){
			}
			else{
			var mod=0
			if(form==0)
				mod=(i*j)%colorset.length
			else if(form==1)
				mod=(i+j)%colorset.length
			else if(form==2)
				mod=(i)%colorset.length
			else if(form==3)
				mod=(j)%colorset.length
			else
				mod=(i*j)%colorset.length

			drawBody(81,79,gapX*i,gapY*j,mod)
			drawHead(81,79,gapX*i,gapY*j,mod)
			}
		}
	}
}

function drawHead(startX,startY,gapX,gapY,m){
	strokeWeight(0)
	fill(colorset[m][1])
	beginShape()
	curveVertex(81+gapX,79+gapY)
	curveVertex(91+gapX+random(-1,1),63+gapY) //ear
	curveVertex(97+gapX,74+gapY)
	curveVertex(103+gapX,76+gapY)
	curveVertex(109+gapX,74+gapY)
	curveVertex(113+gapX,62+gapY) //ear
	curveVertex(120+gapX,75+gapY)
	curveVertex(126+gapX,85+gapY)
	curveVertex(124+gapX,97+gapY)	
	curveVertex(118+gapX,105+gapY)
	curveVertex(108+gapX,109+gapY)
	curveVertex(96+gapX,107+gapY)
	curveVertex(86+gapX,100+gapY)
	curveVertex(81+gapX,92+gapY)
	curveVertex(80+gapX,81+gapY)
	curveVertex(81+gapX,79+gapY)
	endShape(CLOSE)
	
	if(colorset[m][0]==0){
		//drawSpot
		strokeWeight(2)
		stroke(colorset[m][3])
		line(97+gapX,75+gapY,97+gapX,79+gapY)
		line(103+gapX,77+gapY,103+gapX,81+gapY)
		line(109+gapX,75+gapY,109+gapX,79+gapY)
	}
	else if(colorset[m][0]==4){
		fill(colorset[m][3])
		beginShape()
		curveVertex(103+gapX,76+gapY)
		curveVertex(109+gapX,74+gapY)
		curveVertex(113+gapX,62+gapY) //ear
		curveVertex(120+gapX,75+gapY)
		curveVertex(126+gapX,85+gapY)
		curveVertex(124+gapX,97+gapY)	
		endShape(CLOSE)
		
		fill("orange")
		//fill("red")
		beginShape()
		curveVertex(81+gapX,79+gapY)
		curveVertex(91+gapX,63+gapY) //ear
		curveVertex(97+gapX,74+gapY)
		curveVertex(103+gapX,76+gapY)
		endShape(CLOSE)
	}
	
	strokeWeight(0)
	stroke(0)
	fill(255)
	var eyeX=random(-1,1)
	var eyeY=random(-1,1)
	ellipse(92+gapX,87+gapY,5) //eye
	ellipse(112+gapX,87+gapY,5) //eye
	fill(0)
	ellipse(92+gapX+eyeX,87+eyeY+gapY,3) //eye
	ellipse(112+gapX+eyeX,87+eyeY+gapY,3) //eye 
	strokeWeight(1)
	stroke(0)

	var noseX=102+gapX
	var noseY=93+gapY
	ellipse(noseX,noseY,3)
	line(noseX,noseY,noseX-5,noseY+5)//mouse
	line(noseX,noseY,noseX+5,noseY+5)//mouse
	strokeWeight(0)
	var tounge=floor(random(0,5))
	if(tounge>3){
		fill("red")
		ellipse(noseX,noseY+3,3) //tounge
	}
	strokeWeight(1)
	line(noseX-5,noseY,noseX-15,noseY) //beard
	line(noseX-5,noseY+1,noseX-13,noseY+2)
	line(noseX+5,noseY,noseX+15,noseY)
	line(noseX+5,noseY+1,noseX+13,noseY+2)
	
}

function drawBody(startX,startY,gapX,gapY,m){
	strokeWeight(0)
	var move=random(-5,5)
	frameRate(speed)
	fill(colorset[m][2])
	beginShape()
	curveVertex(81+gapX,79+gapY)
	curveVertex(56+gapX,92+gapY+move/2)	//hand
	curveVertex(58+gapX,97+gapY+move/2)	//hand

	curveVertex(81+gapX,99+gapY)
	curveVertex(82+gapX,129+gapY) //waist
	curveVertex(80+gapX+move,154+gapY+bodyLen) //bottom
	curveVertex(79+gapX+move+move/2,179+gapY+bodyLen) //leg
	curveVertex(82+gapX+move+move/2,181+gapY+bodyLen) //leg
	curveVertex(103+gapX+move+move/4,165+gapY+bodyLen)
	curveVertex(120+gapX+move+move/2,179+gapY+bodyLen) //leg
	curveVertex(123+gapX+move+move/2,181+gapY+bodyLen) //leg
	curveVertex(126+gapX+move,154+gapY+bodyLen) //bottom
	curveVertex(128+gapX,129+gapY) //waist
	curveVertex(127+gapX,99+gapY)
	curveVertex(146+gapX,96+gapY+move/2) //hand
	curveVertex(144+gapX,91+gapY+move/2) //hand
	curveVertex(121+gapX,80+gapY) 
	endShape(CLOSE)
	
	beginShape() //tail
	curveVertex(100+gapX+move+move/2,165+gapY+bodyLen)
	curveVertex(100+gapX+move+move,183+gapY+bodyLen)
	curveVertex(100+gapX+move+move*2,206+gapY+bodyLen)
	curveVertex(100+gapX+move+move*3,235+gapY+bodyLen)
	curveVertex(105+gapX+move+move*3,235+gapY+bodyLen)
	curveVertex(105+gapX+move+move*2,206+gapY+bodyLen)
	curveVertex(105+gapX+move+move,183+gapY+bodyLen)
	curveVertex(105+gapX+move+move/2,165+gapY+bodyLen)
	endShape(CLOSE)
}

function drawRare(startX,startY,gapX,gapY,m){
	strokeWeight(0)
	var move=random(-5,5)
	frameRate(speed)
	fill(rareset[m][2])
	beginShape()
	curveVertex(81+gapX,79+gapY)
	curveVertex(56+gapX,92+gapY+move/2)	//hand
	curveVertex(58+gapX,97+gapY+move/2)	//hand

	curveVertex(81+gapX,99+gapY)
	curveVertex(82+gapX,129+gapY) //waist
	curveVertex(80+gapX+move,154+gapY+bodyLen) //bottom
	curveVertex(79+gapX+move+move/2,179+gapY+bodyLen) //leg
	curveVertex(82+gapX+move+move/2,181+gapY+bodyLen) //leg
	curveVertex(103+gapX+move+move/4,165+gapY+bodyLen)
	curveVertex(120+gapX+move+move/2,179+gapY+bodyLen) //leg
	curveVertex(123+gapX+move+move/2,181+gapY+bodyLen) //leg
	curveVertex(126+gapX+move,154+gapY+bodyLen) //bottom
	curveVertex(128+gapX,129+gapY) //waist
	curveVertex(127+gapX,99+gapY)
	curveVertex(146+gapX,96+gapY+move/2) //hand
	curveVertex(144+gapX,91+gapY+move/2) //hand
	curveVertex(121+gapX,80+gapY) 
	endShape(CLOSE)
	
	beginShape() //tail
	curveVertex(100+gapX+move+move/2,165+gapY+bodyLen)
	curveVertex(100+gapX+move+move,183+gapY+bodyLen)
	curveVertex(100+gapX+move+move*2,206+gapY+bodyLen)
	curveVertex(100+gapX+move+move*3,235+gapY+bodyLen)
	curveVertex(105+gapX+move+move*3,235+gapY+bodyLen)
	curveVertex(105+gapX+move+move*2,206+gapY+bodyLen)
	curveVertex(105+gapX+move+move,183+gapY+bodyLen)
	curveVertex(105+gapX+move+move/2,165+gapY+bodyLen)
	endShape(CLOSE)
	
	//head
	strokeWeight(0)
	fill(rareset[m][1])
	beginShape()
	curveVertex(81+gapX,79+gapY)
	curveVertex(91+gapX+random(-1,1),63+gapY) //ear
	curveVertex(97+gapX,74+gapY)
	curveVertex(103+gapX,76+gapY)
	curveVertex(109+gapX,74+gapY)
	curveVertex(113+gapX,62+gapY) //ear
	curveVertex(120+gapX,75+gapY)
	curveVertex(126+gapX,85+gapY)
	curveVertex(124+gapX,97+gapY)	
	curveVertex(118+gapX,105+gapY)
	curveVertex(108+gapX,109+gapY)
	curveVertex(96+gapX,107+gapY)
	curveVertex(86+gapX,100+gapY)
	curveVertex(81+gapX,92+gapY)
	curveVertex(80+gapX,81+gapY)
	curveVertex(81+gapX,79+gapY)
	endShape(CLOSE)
	
	strokeWeight(0)
	stroke(0)
	fill(255)
	var eyeX=random(-1,1)
	var eyeY=random(-1,1)
	ellipse(92+gapX,87+gapY,5) //eye
	ellipse(112+gapX,87+gapY,5) //eye
	fill(0)
	ellipse(92+gapX+eyeX,87+eyeY+gapY,3) //eye
	ellipse(112+gapX+eyeX,87+eyeY+gapY,3) //eye 
	strokeWeight(1)
	stroke(0)

	var noseX=102+gapX
	var noseY=93+gapY
	ellipse(noseX,noseY,3)
	line(noseX,noseY,noseX-5,noseY+5)//mouse
	line(noseX,noseY,noseX+5,noseY+5)//mouse
	strokeWeight(0)
	var tounge=floor(random(0,5))
	if(tounge>3){
		fill("red")
		ellipse(noseX,noseY+3,3) //tounge
	}	
	strokeWeight(1)
	line(noseX-5,noseY,noseX-15,noseY) //beard
	line(noseX-5,noseY+1,noseX-13,noseY+2)
	line(noseX+5,noseY,noseX+15,noseY)
	line(noseX+5,noseY+1,noseX+13,noseY+2)
}

function mouseClicked(){
	saveCanvas("123","png")
}