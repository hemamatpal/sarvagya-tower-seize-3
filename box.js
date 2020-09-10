class box
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.width=50
        this.height=80
        this.body = Matter.Bodies.rectangle(this.x,this.y,this.width,this.height,{restitution:0.3,isStatic:false})
        this.image = loadImage("box.png");
        this.visibility=255
       // this.score=0
        Matter.World.add(world,this.body)
    }

    display(color)
    {
        var pos = this.body.position 
        console.log(this.body.speed);
        push();
        translate(pos.x,pos.y)
       // rectMode(CENTER)
        if (this.body.speed>2 && frameCount>100)
        {
            Matter.World.remove(world,this.body)
            this.visibility=this.visibility-5
            tint(255,this.visibility)
            //this.score=this.score+1
           // rectMode(CENTER)
            //rect(0,0,this.width,this.height)
            imageMode(CENTER)
           image(this.image,0,0,50,80)
            
        }
       /* if (color===a)
        {
            fill(156, 150, 250)
        }
        else 
        {

        fill(color)
        }*/
        imageMode(CENTER)
        image(this.image,0,0,50,80)
        pop();


    }
    score ()
    {
        if(this.visibility<255 && this.visibility>=0)
        {
             score = score+1            
        }
    }
}
