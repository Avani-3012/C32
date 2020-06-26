class boxA{
    constructor(x,y,width,height) {
      var options = {
        isStatic:false,
        'restitution':0.7,
            'friction':1.0,
            'density':1.1
        
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
     
      if(this.body.speed<3.5){
        var pos =this.body.position;
      
        var pos =this.body.position;
        push();
        rectMode(CENTER);
        fill("green");
        this.Visibility = this.Visibility-5;
       tint(255,this.Visibility);
       rect(pos.x, pos.y, this.width, this.height);
        pop();
      
      } else{
        World.remove(world,this.body)
      
    }
    this.Visibility = this.Visibility-5;
      tint(255,this.Visibility);
  
    }
    score(){
      if(this.Visiblity<0 && this.Visiblity> -1005){
        score ++
      }
  }
}