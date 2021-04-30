class bob {
    constructor(x, y, r ) {
      var options = {
          isStatic:false,
          restitution :1,
          friction : 0,
          density  : 0.8
      }
      this.r = r;
      this.body = Bodies.circle(x, y, this.r/2, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
         rectMode(CENTER)
      fill("red");
      ellipse(pos.x,pos.y, this.r, this.r);
    }
  };