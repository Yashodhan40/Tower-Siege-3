class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0,
            
           // density:0.1,
            isStatic:false
        }
        this.Visiblity=255;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
       // Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);

    }
    
    display(){
        
      // console.log(this.body.speed);


            if (this.body.speed<5)
            {
       
            var pos=this.body.position;
            push();
            translate(pos.x,pos.y);
            rotate(this.body.angle);
            fill("cyan");
            strokeWeight(4);
            stroke("black");
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
           // tint(255,this.Visiblity);
            }
            else{
                World.remove(world,this.body);
                push();
                this.Visiblity=this.Visiblity-5;
                tint(255,this.Visiblity);
                pop();

            }

   
        
    }
    score(){
        textSize(30);
        fill("white");
        strokeWeight(4);
        stroke("black")
        text("Score= " +score,180,150);
        if (this.Visiblity<0 && this.Visiblity>-50)
        {
            score++;
        }
    }
}