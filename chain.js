class chain
{
    constructor(bodyA,bodyB)
    {
        var options=
    {
        bodyA:bodyA,
        pointB:bodyB, 
        stiffness:0.5,
        length:10
    }
    
    this.chain =  Matter.Constraint.create(options) 
    this.pointB=bodyB;
    Matter.World.add(world,this.chain)
    }
    escape()
    {
        this.chain.bodyA=null
    }
    display()
    {
        push();

        if(this.chain.bodyA!=null)
        {
      //  var pointB=this.chain.bodyB.position
       // var pointB=this.poi
       var pointA=this.chain.bodyA.position;
       strokeWeight(5)
       stroke("white")
        line(pointA.x,pointA.y,this.pointB.x, this.pointB.y)
        }
        pop()

        //line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.bodyB.position.x,this.body.position.y)
    }
}