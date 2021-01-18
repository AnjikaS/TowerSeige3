class POLYGON extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("POLYGONImg.jpeg");
    this.Visibility = 255;
    Matter.Body.setDensity(this.body, 5);
  }
    display(){
    super.display();
    }
  };
  