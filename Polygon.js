class polygon{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            friction:0,
            restitution:0.3
         }
        
         this.image = loadImage('polygon.png');
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }

display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    
    imageMode(CENTER);
    resize(100,100);
    image(this.image,0,0,this.x,this.y,this.width,this.height);
    
    pop();
}

}