class Ball {

constructor(x,y,r){
    var options={

        restitution:1,
        friction:0.1
    }
        
this.body=Bodies.circle(x,y,r,options)
this.r=r
World.add(world,this.body)
this.fact=loadImage("paper.png")
 
 




}





display(){
    
//ellipse(this.body.position.x,this.body.position.y,this.r);
image(this.fact,this.body.position.x,this.body.position.y,this.r)

}





}