function Branch(begin,end){
  this.begin = begin;
  this.end = end;
  this.finished=false;

  this.jitter = function(){
    this.end.x+= random(-1,1);
    this.end.y+= random(-1,1);
  }

  this.show=function(){
    // stroke(color(0,255,0));
    // strokeWeight(2);
    stroke(0);
    line(this.begin.x,this.begin.y,this.end.x,this.end.y);
  }

  this.branchA = function(){
    let dir = p5.Vector.sub(this.end,this.begin);
    dir.rotate(PI/4*random());
    // dir.mult(0.67);
    dir.mult(0.9);
    let newEnd = p5.Vector.add(this.end,dir);
    let b = new Branch(this.end, newEnd);
    return b;
  }

  this.branchB = function(){
    let dir = p5.Vector.sub(this.end,this.begin);
    dir.rotate(-PI/4*random());
    // dir.mult(0.67);
    dir.mult(0.9);
    let newEnd = p5.Vector.add(this.end,dir);

    let b = new Branch(this.end, newEnd);
    return b;
  }
}
