let angle;

let slider;

function setup(){
  angle = PI/4;
  createCanvas(innerWidth,innerHeight);
  background(color(202,1000,255));
  slider=createSlider(0,TWO_PI,PI/4,0.01);
}

function draw(){
  background(color(202,1000,255));
  angle=slider.value();
  stroke(0);
  translate(innerWidth/2,height);
  branch(100);

}

function branch(len){
  line(0,0,0,-len);
  translate(0,-len);
  if (len>4) {
    push();
    rotate(angle);
    branch(len*0.67);
    pop();
    push();
    rotate(-angle);
    branch(len*0.67);
    pop();
  }
  // line(0,0,0,len*.67);
}
