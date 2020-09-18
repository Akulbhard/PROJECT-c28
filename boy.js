class boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("sprites/boy.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body,this.image);
    }
    display(){
      var pos =this.body.position;
     
      
      rect(this.image, pos.x,pos.y,this.width, this.height);
    }
  };