const density = "@$%80?!ac*:+=-,._   ";
//const density = "    _.,:*+ca!?08%$@";

let video;
let img;
let asciiDiv;

function setup() {
  noCanvas();
  img = loadImage("wave3.jpg");
  asciiDiv = createDiv();
}

function draw() {
  img.loadPixels();
  let asciiImage = "";

  for (let j = 0; j < img.height; j++) { //double for loop iterates thorugh all pixels in image
    for (let i = 0; i < img.width; i++) {

      const pixelIndex = (i + j * img.width) * 4; 
      const r = img.pixels[pixelIndex + 0]; //gets value at red
      const g = img.pixels[pixelIndex + 1];
      const b = img.pixels[pixelIndex + 2];
      
      const avg = (r + g + b)/3; //taking the average of red green and blue gets you the estimated brighness value
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      const c = density.charAt(charIndex); 

      if (c == ' ') asciiImage += '&nbsp;';
      else asciiImage += c;      
      //asciiImage += '<img src="' + c + '">';
    }
    
    asciiImage += '<br/>';
    asciiDiv.html(asciiImage);
    
  }
  var css = document.getElementById('body');
  var ratioH = img.width/img.height * 8;
  var ratioW = img.height/img.width * 8;
  var spacingH = ratioH + "px";
  var spacingW = ratioW + "px";
  css.style.lineHeight = spacingH;
  css.style.letterSpacing = spacingW; 
}