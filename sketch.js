function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  background("#d1d1d1");
  stroke("#1b1b19");

  let outerpadding = 30;

  let side = 10;
  let distance = 5;
  let padding = 10;
  angleMode(DEGREES);
  strokeWeight(1);

  let totalRows = (height - outerpadding * 2) / (distance + side + padding);
  let totalCols = (width - outerpadding * 2) / (distance + side + padding);

  for (let row = 0; row < totalRows; row++) {
    let y = outerpadding + row * (distance + side + padding);

    for (let col = 0; col < totalCols; col++) {
      push();
      let x = outerpadding + col * (distance + side + padding);
      translate(x, y);
      rotate(5);
      drawRandomCube(side, distance);
      pop();
    }
    line(outerpadding, y - padding / 2, width - outerpadding, y - padding / 2);
  }
}

function draw() {
  // put drawing code here
}

function drawCube(side = 10, distance = 5) {
  let x1 = 0;
  let x2 = side;
  let x3 = distance;
  let x4 = distance + side;
  let y1 = 0;
  let y2 = side;
  let y3 = distance;
  let y4 = distance + side;

  //first face
  line(x1, y1, x2, y1);
  line(x2, y1, x2, y2);
  line(x2, y2, x1, y2);
  line(x1, y2, x1, y1);
  //second face
  line(x3, y3, x4, y3);
  line(x4, y3, x4, y4);
  line(x4, y4, x3, y4);
  line(x3, y4, x3, y3);
  //connectors
  line(x1, y1, x3, y3);
  line(x2, y2, x4, y4);
  line(x2, y1, x4, y3);
  line(x1, y2, x3, y4);
}

function drawRandomCube(side = 10, distance = 5) {
  let x1 = 0;
  let x2 = side;
  let x3 = distance;
  let x4 = distance + side;
  let y1 = 0;
  let y2 = side;
  let y3 = distance;
  let y4 = distance + side;

  //first face
  if (random() > 0.5) {
    line(x1, y1, x2, y1);
  }
  if (random() > 0.5) {
    line(x2, y1, x2, y2);
  }
  if (random() > 0.5) {
    line(x2, y2, x1, y2);
  }
  if (random() > 0.5) {
    line(x1, y2, x1, y1);
  }

  //second face
  if (random() > 0.5) {
    line(x3, y3, x4, y3);
  }
  if (random() > 0.5) {
    line(x4, y3, x4, y4);
  }
  if (random() > 0.5) {
    line(x4, y4, x3, y4);
  }
  if (random() > 0.5) {
    line(x3, y4, x3, y3);
  }

  //connectors
  if (random() > 0.5) {
    line(x1, y1, x3, y3);
  }
  if (random() > 0.5) {
    line(x2, y2, x4, y4);
  }
  if (random() > 0.5) {
    line(x2, y1, x4, y3);
  }
  if (random() > 0.5) {
    line(x1, y2, x3, y4);
  }
}
