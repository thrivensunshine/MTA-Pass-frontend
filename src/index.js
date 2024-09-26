//creating canvas elements
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

//for mobile
document.getElementById('left').addEventListener('touchstart', () => leftKeyPress = true);
document.getElementById('left').addEventListener('touchend', () => leftKeyPress = false);
document.getElementById('right').addEventListener('touchstart', () => rightKeyPress = true);
document.getElementById('right').addEventListener('touchend', () => rightKeyPress = false);
document.getElementById('up').addEventListener('touchstart', () => upKeyPress = true);
document.getElementById('up').addEventListener('touchend', () => upKeyPress = false);
document.getElementById('down').addEventListener('touchstart', () => downKeyPress = true);
document.getElementById('down').addEventListener('touchend', () => downKeyPress = false);


// const resizeCanvas = () => {
//   canvas.width = window.innerWidth * 0.9;  // 90% of screen width
//   canvas.height = window.innerHeight * 0.8;  // 80% of screen height
// };

// window.addEventListener('resize', resizeCanvas);
// resizeCanvas();  // Initial call to set canvas size
//variables for Dom manupilation

var pizzaTag = document.getElementById('pizza')

//image variables
var rat = new Image(); rat.src = "images/allRats2.png";
var person = new Image(); person.src ="images/weirdeye.png";
var person2 = new Image(); person2.src = "images/manGame.png";
var person3 = new Image(); person3.src = "images/ladyGame.png"
var person4 = new Image(); person4.src = "images/oldLady.png"
var person5 = new Image(); person5.src = "images/headphones.png"
var person6 = new Image(); person6.src = "images/kid.png"
var train = new Image(); train.src = "images/train.png"
var ratticus = new Image(); ratticus.src = "images/ratticus.png"
var pizzaSlice = new Image(); pizzaSlice.src = "images/pizzaSlice.png"

// pillars for perspective
var leftPill = new Image(); leftPill.src = "images/left-pillar.png"
var rightPill = new Image(); rightPill.src = "images/right-pillar.png"

// pizza lives - pushed into array
 var pizzaArray = []
//
var pizzaW1 = new Image();pizzaW1.src = "pizza/pizza1.png";
var pizzaW2 = new Image();pizzaW2.src = "pizza/pizza2.png";
var pizzaW3 = new Image();pizzaW3.src = "pizza/pizza3.png";
var pizzaW4 = new Image();pizzaW4.src = "pizza/pizza4.png";
var pizzaW5 = new Image();pizzaW5.src = "pizza/pizza5.png";
var pizzaW6 = new Image();pizzaW6.src = "pizza/pizza6.png";
var pizzaW7 = new Image();pizzaW7.src = "pizza/pizza7.png";
var pizzaW8 = new Image();pizzaW8.src = "pizza/pizza8.png";
pizzaArray.push(pizzaW1,pizzaW2,pizzaW3,pizzaW4,pizzaW5,pizzaW6,pizzaW7,pizzaW8)
var pieSx = 100
var pieSy = 100
var wholePie = new Image(); wholePie.src = "pizza/wholePie.png"
//points etc.
var getPizza = 0
var testPie = "pizza/pizza1.png"

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
var yTrain = -7
var trainWidth = 400
var trainHeight = 200

//pizzaSlice
var sliceX = 800
var sliceY = 300
var sliceWH = 38


// event listener for key press
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 39) { // Right arrow
    rightKeyPress = true;
  } 
  if (event.keyCode === 37) { // Left arrow
    leftKeyPress = true;
  }
  if (event.keyCode === 38) { // Up arrow
    upKeyPress = true;
  }
  if (event.keyCode === 40) { // Down arrow
    downKeyPress = true;
  }

  // Prevent the default action for arrow keys to stop scrolling
  if ([37, 38, 39, 40].includes(event.keyCode)) {
    event.preventDefault();
  }
}, false);

document.addEventListener("keyup", (event) => {
  if (event.keyCode === 39) {
    rightKeyPress = false;
  } 
  if (event.keyCode === 37) {
    leftKeyPress = false;
  }
  if (event.keyCode === 38) {
    upKeyPress = false;
  }
  if (event.keyCode === 40) {
    downKeyPress = false;
  }

  // Prevent default for arrow keys on keyup as well
  if ([37, 38, 39, 40].includes(event.keyCode)) {
    event.preventDefault();
  }
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

      //pizza score keeper

      let lastPizzaCount = 0; // Store the last score to prevent continuous updating

      const pizzaScore = () => {
        // Only update if the score has changed
        if (getPizza !== lastPizzaCount) {
          pizzaTag.innerHTML = ""; // Clear previous images
      
          // Add the new image corresponding to the pizza count
          if (getPizza > 0 && getPizza <= pizzaArray.length) {
            const img = document.createElement('img'); // Create a new image element
            img.src = pizzaArray[getPizza - 1].src; // Set the src to the correct pizza image
            img.alt = "pizza slice"; // Add alt text for accessibility
            
            pizzaTag.appendChild(img); // Append the image to the #pizza div
          }
      
          lastPizzaCount = getPizza; // Update the last score
        }
      }
      
      // const pizzaScore = () => {
      //   if (getPizza > lastPizzaCount) {
      //     pizzaTag.innerHTML = ""; // Clear existing images
      //     for (let i = 0; i < getPizza; i++) {
      //       pizzaTag.innerHTML += `<img class="pizzaScore" src="${pizzaArray[i].src}" alt="pizza slice" />`;
      //     }
      //     lastPizzaCount = getPizza;
      //   }
      // }
  //     return `
  // <div class="card">
  // <h2> ${toy.name}</h2>
  // <img src= ${toy.image} class="toy-avatar" />
  // <p><cite data-id="${toy.id}" data-likes="${toy.likes}"> ${toy.likes} Likes </cite> </p>
  // <button class="like-btn">Like <3</button>
  // </div>
// `
      const drawPizzaSlice = () => {
       ctx.drawImage(pizzaSlice, sliceX, sliceY, sliceWH, sliceWH)

      }
      // create train
      const drawTrain = () => {
        ctx.drawImage(train, xTrain, yTrain, trainWidth, trainHeight);
      }
      //create people
      const drawPeople = () => {
        leftOne = ctx.drawImage(person, (xSpot1), (ySpot1), personWidth - 270, personHeight)
        leftTwo = ctx.drawImage(person2, (xSpot2), (ySpot2), personWidth, personHeight)

        rightOne = ctx.drawImage(person4, (xSpot4), (ySpot4), personWidth - 150, personHeight)
        rightTwo = ctx.drawImage(person5, (xSpot5), (ySpot5), personWidth - 120, personHeight)
        rightThree = ctx.drawImage(person6, (xSpot6), (ySpot6), personWidth - 130, personHeight-35)
        leftThree = ctx.drawImage(person3, (xSpot3), (ySpot3), personWidth, personHeight)

      }
      //put pillar tops in foreground
      const pillarPerspective = () => {
        leftPillar = ctx.drawImage(leftPill, -1, 0 ,80, 200)
        rightPillar = ctx.drawImage(rightPill, 905, 0,96, 200)

      }
// train and people motion

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

    //collision of rat and ppl
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

//rat gets on train
    const rideTrain = () => {

      if(getPizza >= 8){
        // -100 front of train
        if(xTrain <= x - 100 + width &&
          // - 90 back of traun
          xTrain + (trainWidth - 90)>= x &&
          yTrain + trainHeight >= y + 100 &&
          yTrain <= y + height){
            console.log(y, x)
            if(x <canvas.width -30){
              x -= 3
              y = 0
              ctx.drawImage(ratticus, xTrain + 50, yTrain + 50, 100, 100 )
            }
          }
        }
        else if( y <= 60){
          y = 580
        }
        }


// pizza collection
    const randomizeSliceSpot = () => {
      if (getPizza < 8){
      if(sliceX <= x - 30 + width &&
        sliceX + (sliceWH - 30) >= x &&
        sliceY + sliceWH >= y &&
        sliceY <= y + height){
          getPizza += 1
        sliceX = Math.round( Math.random() * (840 - 60) + 60);
        sliceY = Math.round( Math.random() * (500 - 90) + 90);
      }
    }
    else{
      sliceX = -100
      sliceY = 0
    }
    }


      //main function to call entire game
      const draw = () => {
        // Clear canvas so we don't have a trail of rats
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      
        // Draw pizza slice
        drawPizzaSlice();
        
        // Render rat image
        drawRat();
        
        // Move rat
        moveRat();
        
        // Draw train
        drawTrain();
        
        // Rat meets train
        rideTrain();
        
        // Generate people
        drawPeople();
        
        // Move people and train
        moveIt();
        
        // Check for collisions
        collision();
        
        // Render pillars for depth
        pillarPerspective();
        
        // Check pizza slice positioning
        randomizeSliceSpot();
        
        // Update pizza score only when it changes
        pizzaScore();
      
        // Request the next animation frame
        requestAnimationFrame(draw);
      }
      

      draw()
