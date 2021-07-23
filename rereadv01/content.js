// Inception of expanse in knowledge.
// Everyone is allowed to contribute whereever they see fit.
// Have fun and stay 



// for extracting the contents of a site.
// Start_ premade for just one site, try to find use or remove or expand per requested site. (latter sounds nice.)
let sidePanel = document.getElementsByClassName("mw-panel");
sidePanel["visibility"] = "collapse";
// let sidePanel1 = document.getElementsByClassName("mw-panel");
// sidePanel1["visibility"] = "hidden";
let side = document.getElementsByTagName("nav");
side["visibility"] = "none";
// End_ need this expanded into a class or some useful extractor. keep open for api. :wink:


////////////////////////////////////////////////////
// Start__ global Vars.find way to closure most of them. func-em. :smile: 
let typed = "";let highlightTextCount;let circleY;let paragraphs = [];let aLinks = [];let aLinksText = [];let wPicked = [];let keeper = [];let coords = [];let allTypedStorage;let secondCopy = 0;let randLink;let btnShow;let fiveC;let r;let a, movedown, sidespeed, xinit, xcoverinit;let xfin, yinit, yfin, step;let now;let sizeOfCounter;let sizeOfText;let tt = "";let wContainer = "";let words;let k;let howMuch;let p;let leadBG;let displayT;let limit;let xPlace;let yPlace;
// let yPlaceTop;
let yPlaceBottom;let lightPlacebottom;let posWheel;
// setup the sketch.
// buttons.
let click1;let speedDown, speedUp;let click2;let click3;let curWordW;let word2Vec;let aiSuggestOne;let aiSuggestTwo;let aiSuggestThree;let aiSuggestFour;let aiSuggestFive;let allLinks;let enter;
let tFont = 'Georgia';
// End__ global Vars.find way to closure most of them. func-em. :smile:


// Needs work._____________________-
// find ways to shrink this func.
// Start___
function setup() {
  background(120, 160, 120);
  // below is where we collect all the paragraphs
  paragraphs = document.getElementsByTagName('p');
  for (elt of paragraphs) {
    elt.style['background-color'] = '#E09F7D'; // highlight the paragraph being used.
  }
  if (paragraphs.length >= 1) {
    for (let i = 1; i < paragraphs.length; i++) {
      wContainer += paragraphs[i].innerText;
      // wContainer = join(paragraphs[i].innerText, wContainer)
      tt += paragraphs[i].innerText;
    }
  } else {
    noCanvas(); let displayT = [];
    // console.log("There is not ext on this page.")
    noLoop();
  }
  let aLinks = document.getElementsByTagName('a');
  allLinks = document.getElementById('link')
  // The for loop below picks all the links that on the page.
  for (elt of aLinks) {
      append(aLinksText, elt.text)
  }
  ///////////////////////////////////////
  // Instantiate the needed variables.
  p = 18;leadBG = 190;displayT = [];allTypedStorage = [];limit = 2012;xPlace = windowWidth * 0.1;yPlace = windowHeight * 0.13;yPlaceBottom = windowHeight * 0.78;
  lightPlacebottom = windowHeight * 0.78;movedown = windowHeight / 2 - 80;yinit = windowHeight * 0.2 - 30;yfin = windowHeight * 0.8;xfin = windowWidth * 4 / 6;sizeOfCounter = 0;xcoverinit = -500;sidespeed = 10;now = false;xinit = 5;step = windowWidth * 0.1;a = 30;fiveC = (xfin+120)*1/5;randLink = random(aLinksText.length);keeper = [];highlightTextCount = 1;posWheel = 30;openLink = null;enter = false;divider(tt);noLoop();
  r = round(random(aLinks.length));
  return;
}
// End___ 


// Needs Work. * to be more efficient with more functionalities.
function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  posWheel += event.delta;
}
// needs work. * turn into a class. * lowercase first and move 
// divide the text into smaller chunks.  
function divider(wContainer) {
  console.log("reached divider.");
  words = wContainer.split(" ");
  let x = 0;
  let t = [];
  displayT = [];
  // words = displayT.split(displayT, ".");
  words.map(function (item) {
    x += item.length;
    t.push(item);
    //t = t.replace(/(\r\n|\n|\r)/gm, " ");   // use this to remove all the line breaks;  find the right place for it though.
    if (x >= limit) {
      displayT.push(t.join(" "));
      secondCopy += 1;
      // console.log ("reached limit you should join & continue.");
      x = 0;
      t = [];
    }
  })
  displayT.push(t.join(" "));
  k = displayT.length;
  x = 0;
  t = [];
  console.log('gave displayT the following before leaving divider \n\n', displayT , " with len: ", displayT[0].length);
  return
}
// display lines to the canvas.
function lines(htc, typed) {
  textFont('Georgia');
  textSize(19);
  textLeading(30);
  //console.log("alinks tags has len: " + aLinksText.length);
  console.log(" We are in the lines function.");
  linkPosX = 100;
  linkPosY = 50;
  highlightTextCount = htc;
  typed = typed;

  let wordW = 0;
  //if (true) {
    // show me the box to cover the element.
    fill(173, 216, 230);
    textAlign(LEFT);
    textFont(tFont);
    // stroke(10);
    rect(xPlace - 20, yPlace-40, windowWidth * 0.80, windowHeight * 0.75, 10);
    fill(255);
    let specialW = displayT[0].split(" ");
    let wordWX, wordWY = 0;
    wordWX = windowWidth * 0.1;
    wordWY = windowHeight * 0.13;
      //xPlace = windowWidth * 0.1;
      //yPlace = windowHeight * 0.13;

    // loop through all the words;
    for (let i = 0; i < specialW.length; i++) {
      // get the width of each word
      curWordW = textWidth(specialW[i]);

      //let curWordW = textWidth(specialW[i]);
      console.log("running in line changing color: " + typed);
      //displayT = paragraph.split(" ");
      frameRate(60);
      // if the word is red, make it red, same for blue, else its black
      if (typed === specialW[i]) {
        fill(255, 0, 0);
        console.log("changed the color and typed is: " + typed);
        //typed = "";
        //continue
      } else if (specialW[i].length == highlightTextCount) {
        fill(0, 0, 255);
      } else {
        fill(0);
      }
        // draw the text;
      text(specialW[i], wordWX, wordWY, wordWX, windowHeight*0.80);//windowWidth * 0.75, windowHeight* 0.80);
      wordWX += curWordW + 5;
      if (wordWX >= windowWidth * 0.81) {
        wordWX = windowWidth * 0.1;
        wordWY += 30;
      }
    }
    linkPosX= round(windowWidth*(1/7), 2);
    linkPosY = round(windowHeight*0.8 + 70, 2);
    let aLinks = document.getElementsByTagName('a');
    // The for loop below picks all the links that on the page.
    for (elt of aLinks) {
        append(aLinksText, elt.text)
    }
      //r = round(random(aLinks.length));
	  fill(255);
      rect(linkPosX-20, linkPosY-20, 190, 70, 10);
      textFont('Georgia');      textSize(15);      textLeading(30);      fill(0);
      text(aLinks[r].text, linkPosX, linkPosY, 150, 50);
      console.log("opened: " + aLinks[r]);
      console.log("--random num generated --is: "+ r +" --with link name: " + aLinksText[r] + " --and link address: " + aLinksText[r] + "\n\n");
	if (openLink && aLinks.length){
        window.open(aLinks[r]);
		linkPosX += 200;
		openLink = false;
		aLinks=[];
		r = null;
	} return;
}
function mouseClicked(){
	if (mouseX > linkPosX-30 && mouseY > linkPosY && mouseX < linkPosX+190 && mouseY < linkPosY+50){
		lines(coords, openLink=true);
		r = round(random(aLinks.length));
		console.log("shuffled R.")
		console.log("Mouse has been clicked --INSIDE--. at mouseX: "+mouseX+"  and mouseY: " + mouseY);
	}
	return;
}
// Get scroller Working again.
function scroller(wContainer) {
  // if (typed) typed = "";   // instead of this you should make scroller
  console.log("scroller is running, and secondcopy is: ", secondCopy);

  sizeOfText = textWidth(displayT[0]);
  xinit += sidespeed;
  print("step: ", step);
  // once initializing xin reaches end of line. move down step by 30.
  if (xinit > xfin + 120) {  // side to side comparison.
    xinit = 0;
    step += 30;
    sizeOfCounter += windowWidth * 0.75;
    if (highlightTextCount >= 1 && highlightTextCount <= 9){ highlightTextCount++;}else {highlightTextCount=1;}
    lines(htc=highlightTextCount);
  }
  if (sizeOfCounter >= sizeOfText) {
    if (displayT.length === 1) {
      noLoop();
      noCanvas();
      // setup();
    } else {
      console.log("simply paused reading");
      console.log("DisplayT spliced showing next and has len ", displayT.length);
      console.log("it has", displayT);
      // setup();
      let wPicked = [];
      for (let each = 0; each < secondCopy; each++) {
        displayT.splice(0, 1);
        sizeOfText = displayT[0].length;
        displayT[0] += "    ---size of text : " + sizeOfText + " ---size of counter :  " + sizeOfCounter + " ---in element number of counter :  " + each + "and this is page: " + round(sizeOfText/sizeOfCounter, 2);

        lines(htc,typed,displayT[0]);

        xinit = 0;
        step = 0;
        sizeOfCounter = 0;
        wPicked = [];
        //loop();
        //openCanvas();
        break;
      }
    }
    if (now === true) {    /// when you're reading to use now is true you should go to the draw function;
      print('running now is true');
      rect(xPlace, step + windowHeight * 0.18, xinit, 5, 14);
      step = step - 0.8;
      yPlace = yPlace - 0.8;
      return;
    }
  } else {
    fill(180, 180, 120);
    rect(xPlace, step + windowHeight * 0.15, xinit, 3, 14);
    console.log("sizeofcounter = ", round(sizeOfCounter,2));
    console.log("sizeoftext = ", round(sizeOfText,2));
    fill(255);
    textSize(10);
    //circle(xPlace-80, step + windowHeight*0.8, 90);
    rect(xPlace-120, windowHeight*0.8, 90, 30);
    fill(0);
    text("line: " + (step/30+1) + "\nquadrant/ln: " + round(xinit/fiveC), 50, windowHeight*0.8, 100, 50);
    return;
  }
}
// Sets up the Canva and control it's resize measures if that's a word.
function openCanvas() {
  requestPointerLock();
  let cnv = createCanvas(windowWidth, windowHeight);// take the divide by 2 out for full screen.
  cnv.position(0, 0, 'fixed');
  pixelDensity(1); // for high-denstity displays
  background(200);
  return;
}

// Invoke the event listener for keydowns.
document.addEventListener('keydown', function (event) {
  // openCanvas();
  if (event.ctrlKey && event.key === 'j') {
    // if (displayT.length > 0){
    alert("Paused Reading");
    // step = 0;
    // openCanvas();
    noLoop();
    return;
    // }
  }
  if (event.ctrlKey && event.key === 'q') {
    // if (displayT.length === 0){
    alert("Quit Program .");
    noLoop();
    noCanvas();
    return;
    // }
  }
  if (event.ctrlKey && event.key === 'b') { // openCanvas() &&
    typed = "";
    console.log("Started reading");
    loop();
  }
})
// Invoke the event listener for keydowns.
// Control Z starts the progress.
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key === 'z') {
    setup();
    if (displayT.length > 0 && displayT[0].length > 1500) {
      console.log("Showing the text and canvas.");
      highlightTextCount = 1;
      typed = "";
      step = 5;
      openCanvas();
      draw();
      noLoop();
    } else {
      alert("not an article, less than 1500 chars.")
      noLoop();
      noCanvas();
      return;
    }
  }
})
// check for arrowup arrowdown rightarrow and leftarrow for speeds and line skip.
// May increase the code to include the keypad when read for text input.
function keyPressed() {
  for (let i=1; i < 105; i++){
    if (keyCode >= 65 && keyCode <= 90) {  // if the key pressed is between a and z and if it's not spacebar.
      enter = true;
      typed += key;
      console.log("type a letter");
      console.log("key pressed: " + key + " keycode: " + keyCode);
      lines(htc=highlightTextCount, typed = typed);
      return;
    } else if (keyCode >= 96 && keyCode <= 190) {
        console.log("you pressed one of the SIDE number keys: " + key);
        lines(htc=highlightTextCount, htc=key);
        return;
    } else if (keyCode >= 49 && keyCode <= 57){
        console.log("you pressed one of the TOP number keys: " + key);
        lines(htc=highlightTextCount, htc=key);
        return;
    }
  }
  if (keyCode === 32 && typed.length) {  // check if typed key is the SPACE BAR
    console.log("pressed space.");
    console.log("called lines to color: " + typed);
    lines(htc=highlightTextCount,typed = typed);
    typed = "";
    return;
  } if (keyCode === UP_ARROW) {
    console.log("UP key is pressed.");
    console.log("Pressed the up arrow key and step is: ", step);
    console.log("step changed to : ", step);
    if (step >= 0) {
      step -= 30;
      xinit = 5
      sizeOfCounter -= windowWidth * 0.75;
      lines();
      return;
    } else {
      step -= 30;
      //xinit = 0;
      lines();
      return;
    }
    return;
  } else if (keyCode === DOWN_ARROW) {
    console.log("Down key is pressed.");
    if (step != xfin + 120 && sizeOfCounter < sizeOfText) {
      step += 30;
      xinit = 5;
      sizeOfCounter += windowWidth * 0.75;
      lines();
      return;
    } else {
      step += 30;
      lines();
      return;
    }
    return;
  } else if (keyCode === LEFT_ARROW) {
    console.log("Left key is pressed.");
    console.log("Pressed the left arrow key and step is: ", step);
    console.log("As well as sidespeed: ", sidespeed);
    if (sidespeed <= 2) {
      return;
    } else {
      sidespeed -= 1;
      return;
    }
   return;
  } else if (keyCode === RIGHT_ARROW) {
    console.log("Right key is pressed.");
    console.log("Pressed the right arrow key and step is: ", step);
    console.log("As well as sidespeed: ", sidespeed);
    if (sidespeed >= 15) {
      return;
    } else {
      sidespeed += 1;
      return;
    }
    return;
  }
}
function updateScroll(){
    var element = document.getElementById("mw-panel");
    element.scrollTop = element.scrollHeight;
}
// Draw Looper
function draw(dislayT) {
  circleY =  130;
  fill(255);
  circle(90, circleY, 110);
  //fill(255);
  circle(90, circleY+130, 110);
  //fill(255);
  circle(90, circleY+260, 110);
  //fill(255);
  circle(90, circleY+390, 110);
  //fill(255);
  circle(90, circleY+520, 110);
  // -------------------------------------------------- \\
  fill(0);
  textSize(13);
  text("Nerd_STATS\nSOTe: " + round(sizeOfText,1) + "\nSOCter: " + round(sizeOfCounter,1), 35, circleY-10, 100, 50);
  text("xinit: " + xinit + "\n xfin: " + xfin, 40, circleY+110, 100, 50);
  text("line: " + (step/30+1) + "\nquadrant/ln: " + round(xinit/fiveC) + "\nsidespeed: " + sidespeed, 40, circleY+240, 100, 50);
  text("pages:" + round(sizeOfText/sizeOfCounter) + "\nHcount: " + highlightTextCount + "\nTyped: " + typed, 40, circleY+370, 100, 50);
  text("pages left: " + displayT.length + "\nof : " + k + "\n PAGE: " + k-displayT.length, 40, circleY+500, 100, 50);
  //updateScroll();
  if (step >= yfin) {
    now = true;
  } else if (step <= yinit) {
    now = false;
  }
 noStroke();
  lines(highlightTextCount, typed);
  scroller();
}

