class Bob{
constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:4
        
    }
    
 this.x=x;
 this.y=y;
 this.r=r
 this.body=Bodies.circle(x,y,r/2,options)
 World.add(world,this.body);


 
 
}
display()
{
     var paperpos=this.body.position;
     
     push()
     translate(paperpos.x,paperpos.y);
     
     strokeWeight(3);
     
     
     fill("pink")
     ellipseMode(RADIUS)
     
     
      ellipse(0,0,this.r,this.r);
      console.log("hi")
      
     // ellipseMode(RADIUS)
      //ellipse(0,0,this.r,this.r)
     pop()




}



}