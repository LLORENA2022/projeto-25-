class Paper {
  constructor(x, y,width,height) {
    var options = {
      'density':1.2,
      'friction': 0,
      'restitution':0.3
    };
    this.image = loadImage("paper.png");
    this.body = Bodies.circle(x, y, 50, 50, options);
    this.width = 60;
    this.height = 60;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    
    fill('black')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};
