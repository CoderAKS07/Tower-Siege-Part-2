class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      if(this.body.speed < 3)
      {
      rect(pos.x,pos.y,this.width, this.height);
      image(this.image, pos.x - this.width/2, pos.y - this.height/2, this.width, this.height);
      }
      else
      {
        push();
        this.visibility = this.visibility - 5;
        tint(255, this.visibility);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
        World.remove(world, this.body);
      }
    }
}