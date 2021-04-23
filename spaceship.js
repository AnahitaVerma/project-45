class Spaceship{

    constructor(x,y,width,height){

        var options = {
            isStatic : false,
            restitution: 0.1,
            friction:  0.5,
            density: 0.5
        }

        this.body = Bodies.rectangle(x, y,width,height,options);
        this.image = loadImage("spaceship.png");


        this.x = x;
        this.y = y;
        this.scale = 0.1
        

      World.add(world, this.body);
      
    }

    display()
{
    var pos = this.body.position;
    imageMode(RADIUS);
        image(this.image, pos.x, pos.y, 70, 80);

    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    push()

    translate (pos.x , pos.y)

    fill("orange");
  
   

 //   ellipse(0, 0, this.radius);

 
    pop()
  }
}