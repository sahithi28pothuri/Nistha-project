class Form {

  constructor() {
    this.title = createElement('h2');
    this.button = createButton('PLAY');
  }
  /*hide(){
    this.tittle.hide();
    this.button.hide();
  }*/

  display(){
    this.title.html("Bring the change");
    this.title.position(100, 25);

    this.button.position(160, 350);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.button.hide();
      Mygame();
      
    });

  }
}
