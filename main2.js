let tree = [];
let leaves = [];
let angle;
let slider;
let cnv;
let div;

let count = 0;

function setup(){
  div = createElement('div');
  div.class('btn');
  div.html('nurture');
  angle=0.01;
  // slider = createSlider();
  // slider.position(-2, 2);
  cnv = createCanvas(innerWidth,innerHeight);
  div.mouseClicked(clk);
  background(color(202,1000,255));

  let a = createVector(innerWidth/2,height);
  let b = createVector(innerWidth/2,height-100);
  let root = new Branch(a,b);

  tree[0]=root;

}

function clk(){
  for (let i = tree.length-1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished=true;
  }
  count++;

  if(count){
    for (var i = 0; i < tree.length; i++) {
      if(!tree[i].finished){
        let leaf=tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
}

function draw(){
  background(color(202,255,255));

  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
    // tree[i].jitter();
  }
  for (var i = 0; i < leaves.length; i++) {
    stroke(color(0))
    strokeWeight(1);
    fill(255,255,0);
    ellipse(leaves[i].x,leaves[i].y,8,12);
  }

  for (var i = 0; i < leaves.length; i++) {
    leaves[i].x+=random(-0.3,0.3);
    leaves[i].y+=random(-0.3,0.3);
  }

}
