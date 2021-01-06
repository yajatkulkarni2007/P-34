class Sling{
    constructor(bodyA,pointB){
        var options={
bodyA:bodyA,
pointB:pointB,
stiffness:0.04,
length:50
        }
        pointB=pointB;
        this.sling=Constraint.create(bodyA,pointB);
        World.add(world,this.sling);
        attatch(body){
            this.sling.bodyA=body;
        }
        fly(){
            this.sling.bodyA=null;
        }
    }
    display(){

    }
}