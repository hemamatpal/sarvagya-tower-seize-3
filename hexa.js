class hexa
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.radius=50;
        this.body= Matter.Bodies.circle(x, y,this.radius)
        this.hexagon_img=loadImage("hexagon.png")
       Matter.World.add(world,this.body)
    }
    
    display(a)
    {
       // this.a=a
        var pos = this.body.position
        push()
        this.hexagon_img.resize(100,100)
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.hexagon_img,0,0)
    }
}