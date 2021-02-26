class Paper{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.2,
            density : 2.5
        }
        this.x = x;
        this.y = y;
        this.r = r;

        
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("magenta");
        stroke(3);        
        ellipse(0,0,this.r,this.r);
        pop();
    }
} 