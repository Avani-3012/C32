class boxA{
    constructor(x,y,width,height) {
      var options = {
        isStatic:false,
        'restitution':0.7,
            'friction':1.0,
            'density':1.1
        
      }
      this.Visibility = 255;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    score(){
    if(this.Visibility<0 && this.Visibility> -1005){
      score ++
    }
  }

    display() {
      //console.log(this.body.speed);
    if(this.body. speed <3){ 
      var angle = this.body.angle; 
      var pos= this.body. position; 
      push();
    translate(pos.x, pos.y);
     rotate(angle);
     rectMode (CENTER);
     fill("Green");
     rect(0,0, this.width, this.height); 
     pop();
    }else{ 
      World.remove(world, this.body);
    push();
     this.Visibility = this.Visibility -5;
     pop() ;
    }
}
}
