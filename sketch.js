function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  background("#d1d1d1");
  stroke("#1b1b19");

  //padding around the glyphs
  let outerpadding = 30;

  angleMode(DEGREES);
  strokeWeight(1);
  blendMode(BURN);
  noFill();

  //calculate the space without padding
  let totalWidth = width - outerpadding * 2;
  let totalHeight = height - outerpadding * 2;

  // size of each glyph
  let side = 15;
  //space between glyphs
  let padding = 20;

  // calcualate the size occupied by each glpy in the grid,
  // based on the two previous variables
  let glyphSize = side + padding;

  //calcualte columns and rows
  let totalRows = totalHeight / glyphSize;
  let totalCols = totalWidth / glyphSize;

  // creatw two for cicles to draw all the glyphs

  for (let row = 0; row < totalRows; row++) {
    for (let col = 0; col < totalCols; col++) {
      //calculate y position
      let y = outerpadding + row * glyphSize;
      //calculate x position
      let x = outerpadding + col * (side + padding);

      stroke("darkslategray");
      // push coordinate system before allpying transofrmations
      push();
      // translate to computed x and y
      translate(x, y);
      // apply rotation (for aesthetic purposes)
      rotate(5);
      //call the function
      drawWorms(side, 3, 9);
      // pop the position. It's important since it will allows you to
      // apply a different transformation for next one
      pop();
    }
  }

  // cycle to draw lines between lines of glyphs.
  // not needed, but i like them.
  for (let row = 0; row < totalRows; row++) {
    //calculate y position
    let y = outerpadding + row * glyphSize;
    //set stroke color
    stroke("#555");
    //draw line
    line(outerpadding, y - padding / 2, width - outerpadding, y - padding / 2);
  }
}

function draw() {
  // put drawing code here
}

function drawWorms(size = 10, maxPoints = 10, maxAmount = 3) {
  let points = maxPoints;
  let amount = random(0, maxAmount);
  for (j = 0; j < amount; j++) {
    beginShape();

    for (i = 0; i <= points; i++) {
      curveVertex(random(0, size), random(0, size));
    }
    endShape();
  }
}
