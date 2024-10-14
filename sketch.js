function setup() {
  // The setup function runs once when the program starts.
  // It's used to define initial environment properties.

  // Creates a canvas that fills the entire browser window.
  createCanvas(windowWidth, windowHeight);

  // Sets the background color to a light gray.
  background("#d1d1d1");

  // Padding around the glyphs to prevent them from touching the edges.
  let outerpadding = 30;

  // Sets the angle mode to degrees for rotations (default is radians).
  angleMode(DEGREES);
  // Sets the thickness of the lines.
  strokeWeight(1);
  // Changes how colors blend; 'BURN' creates a darker effect when shapes overlap.
  blendMode(BURN);
  // Ensures shapes are not filled; only outlines will be drawn.
  noFill();

  // Calculates the drawable area by subtracting the outer padding from the canvas dimensions.
  let totalWidth = width - outerpadding * 2;
  let totalHeight = height - outerpadding * 2;

  // Size of each glyph (the small shapes we'll draw).
  let side = 15;
  // Space between glyphs.
  let padding = 20;

  // Calculates the total space each glyph occupies, including its size and the padding around it.
  let glyphSize = side + padding;

  // Calculates how many rows and columns of glyphs can fit in the drawable area.
  let totalRows = totalHeight / glyphSize;
  let totalCols = totalWidth / glyphSize;

  // Nested loops to draw each glyph in a grid formation.
  for (let row = 0; row < totalRows; row++) {
    for (let col = 0; col < totalCols; col++) {
      // Calculates the y-position for the current glyph.
      let y = outerpadding + row * glyphSize;
      // Calculates the x-position for the current glyph.
      let x = outerpadding + col * glyphSize;
      // Sets the stroke color for the glyph.
      stroke("darkslategray");

      // Saves the current drawing settings and transformations.
      push();
      // Moves the origin point to the glyph's position.
      translate(x, y);
      // Rotates the coordinate system slightly for aesthetic effect.
      rotate(5);
      // Calls the function to draw the glyph.
      drawWorms(side, 3, 9);
      // Restores the original drawing settings and transformations.
      // It's important since it will allows you to apply a different transformation
      // for next glyph.
      pop();
    }
  }

  // Loop to draw lines between rows of glyphs for additional visual structure.
  // Not really needed, but i like them.
  // we wills tart from 1 to skip the first line
  for (let row = 1; row < totalRows; row++) {
    // Calculates the y-position for the line.
    // it is similar to the y calculation for the glyph,
    // but we add half padding to keep it in the middle
    let y = outerpadding + row * glyphSize - padding / 2;
    // Sets the stroke color for the lines.
    stroke("#555");

    // Draws a horizontal line across the canvas.

    line(outerpadding, y, width - outerpadding, y);
  }
}

function draw() {
  // The draw function runs continuously after setup().
  // It's used for animations, but since our sketch is static, it's left empty.
}

function drawWorms(size = 10, maxPoints = 10, maxAmount = 3) {
  // This function draws worm-like shapes using curves.

  // Number of points in each worm.
  let points = maxPoints;
  // Randomly determines how many worms to draw.
  let amount = random(0, maxAmount);

  for (let wormNumber = 0; wormNumber < amount; wormNumber++) {
    // Starts defining a custom shape.
    beginShape();

    for (let point = 0; point <= points; point++) {
      // generate random x and y position
      let x = random(0, size);
      let y = random(0, size);
      // Adds points to the shape at random positions within the glyph's size.
      curveVertex(x, y);
    }
    // Finishes defining the custom shape.
    endShape();
  }
}
