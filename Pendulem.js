class Pendulem{
    constructor(x,y,width,height){
        var options={
            restitution:1,
            friction:1,
            density:0.5,
        }
this.body=Bodies.rectangle(x,y,width,height,options);
World.add(this.body,world);
    }
    display(){
        var angle= this.body.angle;
        var pos=this.position;
        push();
        translate(this.body.pos.x,this.body.pos.y);
        rotate(angle);
        fill("brown");
        ellipse(0,0,60,60);
        pop();
    }
}