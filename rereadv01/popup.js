// console.log(paragraphs);
//
// var button = document. createElement("button");
// button. innerHTML = "Do Something";
//
// document.addEventListener('DOMContentLoaded', function() {
//   let checkPageButton = document.getElementById('checkPage');
//   checkPageButton.addEventListener('click', function() {
// // Listen for a click when the window is open.
//     console.log("hey it's button was clicked");
//     chrome.tabs.getSelected(null, function(tab) {
//
//       (function (){
//       let script = document.createElement('script');
//       script.src = 'content.js';
//       document.body.appendChild(script);
//       })();
//     });
//   }, false);
// }, false);
//

//
// // Author Blaise M.
// // Dec, 2020
//
//
//
//
//
//
//
//
//
//
// let next, Nnext;
// let a;
//
// let movedown;
// let sidespeed;
// let xinit; // = 0;
// let xcoverinit; // = 0;
// let xfin;
// let yinit;
// let yfin;
// let step;
// let stepTwo;
// let now;
//
// // let increased;
// let alreadyExecuted= false;
//
// let num = 0;
// let sizeOfCounter;
// // let sizeOfCounter;
// let sizeOfText;
// let howMuch;
//
// let inputButton;
// let defaultWords = 'paste text then press enter or click begin read ---> ';
// let pastedText = ''
// let colors;
// let leadBG = 190;
// let angle = 0;
//
// // function preload() {
// //   fontRegular = loadFont('fonts/Dosis-VariableFont_wght.ttf')
// // }
//
// function setup() {
//   let c = createCanvas(displayWidth * 0.85, displayHeight * 0.85);
//   c.elt.style.order = '5px solid red';
//   // background(random(leadBG-10, leadBG), random(leadBG-10, leadBG), random(leadBG-10, leadBG));
//   print("leadBG is : " + leadBG)
//   inputButton = createInput("");
//   inputButton.size(windowWidth*0.65,50);
//   inputButton.position(200,30);
//   inputButton.style('font-size', '25px');
//   inputButton.style('background', '#e8e3e3');
//   inputButton.attribute("placeholder", defaultWords);
//   inputButton.attribute ('onClick',"this.setSelectionRange(0, this.value.length)");
//   pastedText = inputButton.value();
//   howMuch = pastedText.length;
//   read = createButton('Begin Read');
//   colors = color(leadBG, leadBG, leadBG);
//   // read = createButton('Begin Read');
//   read.size(205,40);
//   read.position(windowWidth*0.8, 40);
//   read.style('font-size', '25px');
//   read.style('padding','05');
//   read.mousePressed(beginReading);
//   // inputButton.mousePressed(clearWords);
//   // createCanvas(windowWidth*5.9/6, windowHeight*5.8/6);
//
//
//   textSize(2);
//   textLeading(30);
//   textAlign(LEFT);
//   movedown = height/2 - 80;
//   yinit = windowHeight * 0.2-30;  // start circle at 20% - ratio
//   yfin = windowHeight * 0.8; //= windowHeight*5/6 * 0.80;// end circle at 80%  [[ begin circle climb ]]
//   xfin = windowWidth*5.9/6-20;
//   sizeOfCounter = 0;
//   // xcoverinit = -700;
//   sidespeed = 5;
//   now = false;
//   xinit = 6;
//   step=0;
//   a = 25;
//   noLoop();
// }
// function beginReading() {
//   background(leadBG);
//   inputButton.attribute("type", "hidden");
//   resizeCanvas(windowWidth * 0.8, windowHeight * 0.8);
//   if (pastedText.length != howMuch || sizeOfCounter >= sizeOfText) {
//     sizeOfText = textWidth(pastedText);
//     sizeOfCounter = 0;
//     pastedText = inputButton.value();
//     howMuch = pastedText.length;
//     movedown = height/2 - 80;
//     yinit = windowHeight * 0.58;  // start circle at 20% - ratio
//     yfin = windowHeight * 0.58;// end circle at 80%  [[ begin circle climb ]]
//     xfin = windowWidth * 0.58;
//     // xcoverinit = -700;
//     sidespeed = 7;
//     xinit = 5;
//     step = 3;
//     a = 25;
//     print("text has been changed");
//     loop();
//   } else {
//     print("text has NOT been changed CONTINUING ");
//     loop()
//   }
//   // for (let i = 0; i < pastedText.length; i++)
//   //   if (pastedText[i] == " "){
//   //     let cout ++;
//   //
//   //   }
// }
// function keyTyped() {
//   if (key === 'c') {
//     print("continuing to read.");
//     inputButton.attribute("type", "hidden");
//     loop();
//   } if (key === 'r') {
//     beginReading();
//     print("restarting text read.");
//     inputButton.attribute("type", "hidden");
//   }
// }
// function keyPressed() {
//     if (keyCode === ENTER) {
//       beginReading();
//       inputButton.attribute("type", "hidden");
//     } else if (keyCode === UP_ARROW) {
//     if (sidespeed < 15) {
//         sidespeed += 1;
//       }
//
//       printer()
//       // print ( "SPEED IS NOW: " , sidespeed)
//     } else if (keyCode === DOWN_ARROW) {
//       if (sidespeed > 5) {
//         sidespeed -= 1;
//       }
//       print ( "SPEED IS NOW: " , sidespeed)
//       printer()
//     } else if (keyCode === RIGHT_ARROW) {
//       print ("right arrow pressed.")
//     } else if (keyCode === LEFT_ARROW) {
//       print ("left arrow pressed.")
//       xinit = 5;
//       if (keyCode === LEFT_ARROW){
//         step -= 30;
//       }
//     }
//     else {
//       inputButton.attribute("type", "text");
//       print("paused Text Read and removed readonly.");
//       noLoop();
//     }
// }
// function printer(){
//   print ( "SPEED IS NOW: " , sidespeed)
//   print("^^^^ Running printer as promised ^^^")
// }
// // Draw Looper
// function draw() {
//   // leadBG = (sizeOfCounter / sizeOfText * 90) + 50 ;
//   print("leadBG is now : " + leadBG)
//   background(leadBG);
//     if (step >= yfin) {
//       now = true;
//       print ("now is ", now)
//   } else if (step <= yinit) {
//       now = false;
//       print ("now is ", now)
//   }
//   lines();
//   scroller();
// }
// function scroller() {
//   noStroke();
//   sizeOfText = textWidth(pastedText);
//   xinit += sidespeed;
//   // xcoverinit += sidespeed + 1;
//   // print("step: ", step);
//   if (xinit > xfin) {  // side to side comparison.
//     // print("running xinit > xfin");
//     xinit = 5;
//     // xcoverinit = -700 + sidespeed + 50;
//     step += 30;
//     sizeOfCounter += windowWidth-70;
//     print("next < triggered > : ", now);
//     // colors = color(leadBG, leadBG, leadBG);
//     // background(leadBG);
//     // print("a is: ", a);
//   }
//   if (now === true) {
//     // print("running now = true");
//     print("step: ", step);
//     // rect(10, step+95 ,xinit, 5, 14);
//     // rect(10, step+69, xinit-250, 28, 5);
//     step = step - 0.8;
//   } else {
//       // print("running now = false");
//       fill(133, 172, 144);
//       rect( 200, step+95, xinit, 5, 14);
//       rect(200, step+95, xinit, 5, 14);
//
//       // rect(10, step+69, xcoverinit, 28, 5);
//   }
//   if (sizeOfCounter >= sizeOfText){
//     // print ("*** Size of Counter has reached Size of Text ***");
//     xinit = 5;
//     // xcoverinit = -500;
//     inputButton.attribute("type", "text");
//     read.attribute("type", "text");
//     noLoop();
//   }
//   print("sizeofcounter = ", sizeOfCounter);
//   print("sizeoftext = ", sizeOfText);
//
// }
// function lines() {
//   textSize(22);
//   textAlign(LEFT);
//   textLeading(30);
//
//   noStroke();
//   pastedText = inputButton.value();
//   if (now === true) {
//     // fill(250);
//     fill(30);
//     // text(pastedText, 20, a+50, windowWidth-50, windowHeight*10);
//     text(pastedText, 200, a+50, windowWidth*0.55,windowHeight*0.62);
//     a = a - 0.8;
//   } else {
//     // fill(250);
//     fill(30);
//     text(pastedText, 200, a+50, windowWidth*0.55,windowHeight*0.62);
//   }
// }
//





// d = document;
// put site in a let.
// let f = document.createElement('form');
// Create a let that'll contain the form.
// f.action = 'http://reread.website/';
// f.action = 'http://localhost:8001/home.html/'
// give the form element an action ie.(site address).
// f.method = 'post';
// let i = d.createElement('input');
// Method is what'll happen to it.
// The next action is to input thesite into out GT metrix.
// Using createElement initialize the input.
// i.type = 'hidden';
// i.type = "hidden";  // hide is needed.
// i.name = 'url';     // specify name.
// i.value = tab.url;  // specify the value as well.
// i.value = copie;
// f.appendChild(i);
// console.log("site is: ", d);
// in out input append the specified value. ie.(site address)

// d.body.appendChild(f);

// f.submit();
// chrome.tabs.update({
     // url: "http://reread.website/"
     // url: "http://localhost:8001/home.html"
// });
