//creating canvas elements
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

//image variables
var rat = new Image(); rat.src = "allRats2.png";
var person = new Image(); person.src ="weirdeye.png";
var person2 = new Image(); person2.src = "manGame.png";
var person3 = new Image(); person3.src = "ladyGame.png"
var person4 = new Image(); person4.src = "oldLady.png"
var person5 = new Image(); person5.src = "headphones.png"
var person6 = new Image(); person6.src = "kid.png"
var train = new Image(); train.src = "train.png"

// rat image size and position
var sx = 375;
var sy = 100;
var swidth = 90;
var sheight = 90;
var x = 400;
var y= 580;
var width=70;
var height=60;

// key press variables
var leftKeyPress= false;
var rightKeyPress = false;
var upKeyPress = false;
var downKeyPress = false;
var up = true;
var down = true;
var right = true;
var left = true;


// -100 = very left of canvas
// 1000 = very right of canvas
//variables for people
var personWidth = 200
var personHeight = 150
//walking to the left
var xSpot1 = 1100
var ySpot1 = 30
var xSpot2 = 1400
var ySpot2 = 200
var xSpot3 = 900
var ySpot3 = 350
var leftPpl = []

//wlking to the right
var xSpot4 = 100
var ySpot4 = 200
var xSpot5 = -100
var ySpot5 = 40
var xSpot6 = -100
var ySpot6 = 275

//trainmoving
var xTrain = 1000
var yTrain = 0
var trainWidth = 400
var trainHeight = 180


// event listener for key press
//keydown
document.addEventListener("keydown", (event) => {
  if(event.keyCode == 39){
    // console.log("down")
    rightKeyPress = true}
    if(event.keyCode == 37){leftKeyPress = true}
    if(event.keyCode == 38){upKeyPress = true}
    if(event.keyCode == 40){downKeyPress = true}

  }, false);

//keyup event listener
document.addEventListener("keyup", (event) => {
  if(event.keyCode == 39){
    // console.log("up")
    rightKeyPress = false}
    if(event.keyCode == 37){leftKeyPress = false}
    if(event.keyCode == 38){
      // console.log("GOING UP")
      upKeyPress = false}
      if(event.keyCode == 40){downKeyPress = false}
    }, false);

//rat moving logic, change direction, and doesnt move off canvas
//sx changes the portion of the image we see ie changes the direction of rat
    const moveRat = () => {
      if(upKeyPress === true && up==true && y > 10){
        console.log("bloop")
        y -= 44;
        up = false;
        sx = 375;
        sy = 100;
      }
      if(upKeyPress==false){
        up = true;
      }
      if(downKeyPress== true && down==true && y + height < canvas.height -1){
        y += 44
        down = false
        sx = 280
        sy = 100
      }
      if(downKeyPress==false){
        down= true
      }
      if(rightKeyPress==true && right==true && x + width < canvas.width){
        x += 44
        right = false
        sx = 35
        sy = 100
      }
      if(rightKeyPress==false){
        right = true
      }
      if(leftKeyPress==true && left==true && x > 1){
        x-=44
        left = false
        sx = 165
        sy = 100
      }
      if(leftKeyPress ==false){
        left = true
      }
    }

      // create our hero- ratticus
      const drawRat = () => {
        ctx.drawImage(rat, sx, sy, swidth, sheight, x, y, width, height);
      }
      // create train
      const drawTrain = () => {
        ctx.drawImage(train, xTrain, yTrain, trainWidth, trainHeight);
      }
      //create people
      const drawPeople = () => {
        leftOne = ctx.drawImage(person, (xSpot1), (ySpot1), personWidth - 270, personHeight)
        leftTwo = ctx.drawImage(person2, (xSpot2), (ySpot2), personWidth, personHeight)
        leftThree = ctx.drawImage(person3, (xSpot3), (ySpot3), personWidth, personHeight)
        rightOne = ctx.drawImage(person4, (xSpot4), (ySpot4), personWidth - 150, personHeight)
        rightTwo = ctx.drawImage(person5, (xSpot5), (ySpot5), personWidth - 120, personHeight)
        rightThree = ctx.drawImage(person6, (xSpot6), (ySpot6), personWidth - 130, personHeight-35)

      }

// people movemnt
    // -100 = very left of canvas
    // 1000 = very right of canvas
    const moveIt = () => {
      if(xSpot1 >=  -300){
        xSpot1 -= 4
      }else{
        xSpot1  =  1000
      }
      if(xSpot2 >=  -300){
        xSpot2 -= 4
      }else{
        xSpot2  =  1000
      }
      if(xSpot3 >=  -300){
        xSpot3 -= 4
      }else{
        xSpot3  =  1000
      }
      if(xSpot4 <= 1001){
        xSpot4 += 2
      }else {
        xSpot4 = -100
      }
      if(xSpot5 <=1001){
        xSpot5 +=3
      }else{
        xSpot5 = -100
      }
      if(xSpot6 <=1001){
        xSpot6 +=4
      }else{
        xSpot6 = -100
      }
      if(xTrain >= -250){
        xTrain -= 3
      }else{
        xTrain = 1000
      }
    }
    const collision = () => {
      var xArr = [xSpot1, xSpot2, xSpot3,xSpot4,xSpot5,xSpot6]
      var yArr = [ySpot1, ySpot2, ySpot3,ySpot4, ySpot5,ySpot6]
     for(let i = 0; i < xArr.length; i++){
        // console.log(leftPpl[i][x])

      if(xArr[i]<= x + width &&
        xArr[i] - 150 + personWidth   >= x &&
        yArr[i] + personHeight  >= y &&
      yArr[i] <= y + height - 70) {
        // console.log(xArr[i], yArr[i], "person")
        // console.log(x, y, "rat")
        y = 580;
        x = 400
      }
      }

    }

    const rideTrain = () => {
      status = ''
      if(y <= 60){
        console.log(y, x)
        if(xTrain <= x - 100 + width &&
          xTrain + (trainWidth - 90)>= x &&
          yTrain + trainHeight >= y &&
          yTrain <= y + height){
            if(x <canvas.width -30){
              x -= 3
              status = true

            }

          }

        }
        if(status === true){
          return alert("PLEASE STAND CLEAR OF THE CLOSING DOORS")
        }
      }

      //main function to call entire game
      const draw = (thing) => {
        //clears canvas so we dont have a trail of rats
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        //render image
        drawRat();
        //move Rat
        moveRat()
        //train
        drawTrain()

        drawPeople()
          //walking ppl and train
       moveIt()
        //collision
        collision()
        //train ride
        rideTrain()

        requestAnimationFrame(draw)


      }

      draw()
