class Box{
    constructor(x,y,width,heith){
        this.body = Bodies.rectangle(x,y,width,heith,Options);
        this.width = width;
        this.heith = heith

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER)
        strokeWeight(4)
        stroke("green")
        fill(255)
        rect(0,0,this.width, this.heith)
        pop()
    }
}