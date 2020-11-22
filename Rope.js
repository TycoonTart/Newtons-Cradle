class Rope{
constructor(bodyA,bodyB){
    var options={

        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.04,
        length:10
    }
    this.Rope=Constraint.create(options);
    World.add(world,this.chain);


}
display(){
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.position;
    strokeWeight(3);
    line(pointA.x,pointB.y,pointB.x,pointB.y);



}

}