class base {
    constructor(x,y,width,height)
    {
        this.x=x;
        this.y=y;
        this.width=width
        this.height=height
        this.body=Matter.Bodies.rectangle(x, y, width, height, {isStatic:true})
        Matter.World.add(world,this.body)
    }
    display()
    {
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    rectMode(CENTER)
    fill(201,0,0)
    rect(0,0,this.width,this.height)
    pop()
    }
}