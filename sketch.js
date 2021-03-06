function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    x = width / 2;
    y = 300;

    getValue();
  }

  let f = 4.25;

  let y;
  let x;
  //banana color variables
  let r1 = 206;
  let g1 = 239;
  let b1 = 107;

  function makeBanana(s) {
    background(0);
    drawText(s);
    drawBanana(s);
  }

  function drawText(s) {
    textSize(28);
    textAlign(CENTER);
    strokeWeight(2);
    stroke(206, 239, 107);
    fill(0);
    text(s, width / 2, 60);
  }

  function determineColor(s) {
    if (s >= -0 && s < 500) {
      r1 = 80;
      g1 = 64;
      b1 = 0;
      stroke(r1, g1, b1);
    }
    if (s >= 500 && s < 1000) {
      r1 = 232;
      g1 = 196;
      b1 = 0;
      stroke(r1, g1, b1);
    }
    if (s >= 1000 && s < 3200) {
      r1 = 255;
      g1 = 240;
      b1 = 30;
      stroke(r1, g1, b1);
    } else if (s >= 3200) {
      r1 = 226;
      g1 = 250;
      b1 = 108;
      stroke(r1, g1, b1);
    }
  }

  function drawBanana(s) {
    noStroke();
    determineColor(s);
    fill(r1, g1, b1);
    arc(x, y, 
      100 * f, 100 * f, 
      20, 200, 
      OPEN);
    fill(0);
    stroke(0);
    arc(x, y - (25 * f) , 
      140 * f, 100 * f, 
      0, 180, 
      OPEN);
  }

  function doAction(response) {
    makeBanana(response);
    setTimeout(getValue, 1000);
  }

//http://localhost:7071
function getValue() {
    httpGet('/api/GetTopItem','text',false,doAction);
  }