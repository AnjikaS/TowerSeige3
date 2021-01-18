class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
   this.Visibility = 255;
  }
  display(){
    if(this.body.speed<4){
    super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      tint(255,this.Visibility);
      this.Visibility-=10;
      image(this.image,this.body.position.x,this.body.position.y,50,75);
      pop();
    }
  }
    score(){
    if(this.Visibility<0 && this.Visibility>=-500){
     Score = Score+1;
    }
  }
};
