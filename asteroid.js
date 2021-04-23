class Asteroid
{
    constructor(x, y) 
    {
        var options = {
           
          isStatic: false,
          restitution: 0.1,
          friction:  0.5,
          density: 0.5
            
        }

      this.body = Bodies.circle(x, y,15,options);
      this.image = loadImage("asteroid.png");
      
        this.x = x;
        this.y = y;
        this.radius = 50;

      World.add(world, this.body);
      
}
display()
{
    
    if(this.body.position.x<250){

      var pos = this.body.position;

      translate (pos.x , pos.y)

      fill("orange");
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
  

       pop();
     }
     
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

  

    translate (pos.x , pos.y)

    fill("orange");
   

 //   ellipse(0, 0, this.radius);

  
  }


}