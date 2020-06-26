class ball{
    constructor(x,y,radius) {
      var options = {
         
          'restitution':0.8,
            'friction':1.0,
            'density':1.0
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;	
        push()
        translate(pos.x,pos.y);
        ellipseMode(RADIUS)
        //strokeWeight(4);
        fill(255,0,255)
        
        ellipse(0,0,this.radius, this.radius)
        
        pop()
    }
  
  }
  