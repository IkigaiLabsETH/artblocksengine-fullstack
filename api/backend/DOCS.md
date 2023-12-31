Below a template by ippsketch to start the creative process, 
and learn how to structure the logic into the code

## Introduction
images generated by code that resides on the Ethereum block chain. The outputs will be minted asap. GEN A is created using code. The main script used to generate the outputs will be written in JavaScript. A drawing package called p5js is used to facilitate generating the images in a web browser. The code provides the drawing instructions and is what has been written onto the Ethereum blockchain. When the minting process occurs, a unique hash is created and used by the code a random number generator in the code to control the unique look and feel of each different output.

GEN A follows a simple premise: lines are bent and shaded. To create GEN A, a grid of triangles is selectively subdivided into smaller triangles. Lines are added to each triangular region to create tiles, then bent. Adjusting the shade by darkening some lines provides three-dimensional depth and brings the structure to life. Finally, color and texture are applied to complete the work.

# Features
When they are minted, the transaction hash from that mint seeded a random number generator. The random number generator is then used to determine the features of the output such as size, color palette, or bending pattern. The rest of this page will go through some more prominent features and demonstrate how they contribute to the variety of the outputs.

# Size 
Size ranges from Jumbo to Tiny, determined by the size of the underlying grid. Medium is the most common, accounting for almost half of all mints (47%), followed by Small (20%) and Large (25%). The least common are Jumbo (3%) and Tiny (5%). The Large and Jumbo are striking and look excellent as thumbnails or as a large mural. Small and Tiny are interesting to zoom and explore and some almost appear just as texture when viewed from afar. Medium strike a good balance.

function getActualGridSize(gridSize) {
  switch(gridSize) {
    case 'Jumbo':
      return 100; // Replace with the actual size for 'Jumbo'
    case 'Tiny':
      return 10; // Replace with the actual size for 'Tiny'
    case 'Medium':
      return 50; // Replace with the actual size for 'Medium'
    case 'Small':
      return 30; // Replace with the actual size for 'Small'
    case 'Large':
      return 70; // Replace with the actual size for 'Large'
    default:
      return 50; // Default size
  }
}


# Color 
Most backgrounds are Light (61%), and some are Dark (36%). Light and Dark backgrounds are very lightly saturated with the same color as the lines, but they vary randomly so each Light and Dark background is slightly different. Color backgrounds are very rare; there are only 18 mints with a colorful background (2%). The main colors are based on 7 primary colors from the rainbow: red, orange, yellow, green, teal, blue, purple. Most Bents (61%) use just a single, solid color.

Ruby (red, 11%) 
Crush (orange, 8%)
Medallion (yellow, 2%)
Juniper (green, 12%) 
Wave (teal, 7%) 
Atmosphere (blue, 13%) 
Jam (purple, 8%) 

Many GEN A (28%) apply gradients to the lines. Gradients traverse the screen from top to bottom, side-to-side, or at a diagonal. The gradients transition to and from the colors listed above.

Ember (orange / blue 9%) 
Tiger (orange / purple, 4%) 
Lagoon (green / blue 6%) 
Burst (orange / yellow 2%) 
Autumn (green / red 2%) 
Crest (blue / teal 2%) 
Mood (yellow / blue or puple 4%) 

Line Color - Black, White, Rainbow
+
Bone (white, 1%)
Ink (black, 2%)
Rainbow (1%)

// This function returns a color based on the given probabilities
function getColor() {
  let rnd = random(100);
  if (rnd < 61) return color(255); // Light
  else if (rnd < 97) return color(0); // Dark
  else return color(random(360), 100, 100); // Colorful
}

// This function returns a color for the lines based on the given probabilities
function getLineColor() {
  let rnd = random(100);
  if (rnd < 11) return color('red'); // Ruby
  else if (rnd < 19) return color('orange'); // Crush
  else if (rnd < 21) return color('yellow'); // Medallion
  else if (rnd < 33) return color('green'); // Juniper
  else if (rnd < 40) return color('teal'); // Wave
  else if (rnd < 53) return color('blue'); // Atmosphere
  else if (rnd < 61) return color('purple'); // Jam
  else if (rnd < 70) return lerpColor(color('orange'), color('blue'), random(1)); // Ember
  else if (rnd < 74) return lerpColor(color('orange'), color('purple'), random(1)); // Tiger
  else if (rnd < 80) return lerpColor(color('green'), color('blue'), random(1)); // Lagoon
  else if (rnd < 82) return lerpColor(color('orange'), color('yellow'), random(1)); // Burst
  else if (rnd < 84) return lerpColor(color('green'), color('red'), random(1)); // Autumn
  else if (rnd < 86) return lerpColor(color('blue'), color('teal'), random(1)); // Crest
  else if (rnd < 90) return lerpColor(color('yellow'), random([color('blue'), color('purple')]), random(1)); // Mood
  else if (rnd < 91) return color(255); // Bone
  else if (rnd < 93) return color(0); // Ink
  else return color(random(360), 100, 100); // Rainbow
}

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noLoop();
}

function draw() {
  background(getColor());
  stroke(getLineColor());
  // Draw your lines here
}


# Bending Mechanism

Bending Mechanism - Common
Center (13%) - the center is bent, while the edges remain in the same direction
Edges (13%) - the edges are bent, while the center remains in the same direction
Across (14%) - bending increases from top-to-bottom or side-to-side
Group (31%) - an underlying noise field is used to group regions together, as if the bends are flowing
Wander (13%) - bends are random

Bending Mechanism - Rare
Stairs (3%) - bends create stair-like features
Cliff (3%) - bends are created to make it look like the bottom or top of a cliff or waterfall
Momuments (2%) - a reference to my Monuments series on Foundation
Circles (1%) - circles (or hexagons) are created 
Seam (2%) - a single seam is created across the image
Connect (2%) - like seam, but at multiple vertical locations
Radiate (3%) - bends radiate from the center
Symmetric (1%) - from top to bottom or left to right
Conform (2%) - 

function draw() {
  background(220);
  
  let bendingMechanism = getBendingMechanism(); // This function should return a string representing the bending mechanism
  
  for (let i = 0; i < width; i += gridSize) {
    for (let j = 0; j < height; j += gridSize) {
      switch(bendingMechanism) {
        case 'Center':
          // The center is bent, while the edges remain in the same direction
          // Add your bending logic here
          break;
        case 'Edges':
          // The edges are bent, while the center remains in the same direction
          // Add your bending logic here
          break;
        case 'Across':
          // Bending increases from top-to-bottom or side-to-side
          // Add your bending logic here
          break;
        case 'Group':
          // An underlying noise field is used to group regions together, as if the bends are flowing
          // Add your bending logic here
          break;
        case 'Wander':
          // Bends are random
          // Add your bending logic here
          break;
        case 'Stairs':
          // Bends create stair-like features
          // Add your bending logic here
          break;
        case 'Cliff':
          // Bends are created to make it look like the bottom or top of a cliff or waterfall
          // Add your bending logic here
          break;
        case 'Monuments':
          // A reference to my Monuments series on Foundation
          // Add your bending logic here
          break;
        case 'Circles':
          // Circles (or hexagons) are created 
          // Add your bending logic here
          break;
        case 'Seam':
          // A single seam is created across the image
          // Add your bending logic here
          break;
        case 'Connect':
          // Like seam, but at multiple vertical locations
          // Add your bending logic here
          break;
        case 'Radiate':
          // Bends radiate from the center
          // Add your bending logic here
          break;
        case 'Symmetric':
          // From top to bottom or left to right
          // Add your bending logic here
          break;
        default:
          // Default bending mechanism
          // Add your bending logic here
          break;
      }
    }
  }
}




# Dividing Mechanism

All (22%) - all triagular regions are divided, leaving now Secondary lines
Across (18%) - across the image at various angles
Group (22%) - divisions occur following an underlying noise field, resulting in patterns
Wander (15%) - all random
Center (9%) - the edges are divided, leaving Secondary lines in the center
Edges (8%) - the center is divided, leaving Secondary lines around the edges
Radiate (4%) - divisions happen in radiating patterns, often resulting in colorful sunburst effects
Symmetric (1%) - this always occurs when the symmetric Bending Mechainsm is set

// This function returns a division pattern based on the given probabilities
function getDivisionPattern() {
  let rnd = random(100);
  if (rnd < 22) return "all";
  else if (rnd < 40) return "across";
  else if (rnd < 62) return "group";
  else if (rnd < 77) return "wander";
  else if (rnd < 86) return "center";
  else if (rnd < 94) return "edges";
  else if (rnd < 98) return "radiate";
  else return "symmetric";
}

// This function applies the division pattern to the given grid
function applyDivisionPattern(grid, pattern) {
  switch (pattern) {
    case "all":
      // Divide all triangles
      for (let triangle of grid) {
        divideTriangle(triangle);
      }
      break;
    case "across":
      // Divide triangles across the image at various angles
      // You would need to implement the logic for this
      break;
    case "group":
      // Divide triangles following an underlying noise field
      // You would need to implement the logic for this
      break;
    case "wander":
      // Randomly divide triangles
      for (let triangle of grid) {
        if (random(1) < 0.5) {
          divideTriangle(triangle);
        }
      }
      break;
    case "center":
      // Divide triangles in the center
      // You would need to implement the logic for this
      break;
    case "edges":
      // Divide triangles around the edges
      // You would need to implement the logic for this
      break;
    case "radiate":
      // Divide triangles in radiating patterns
      // You would need to implement the logic for this
      break;
    case "symmetric":
      // Divide triangles symmetrically
      // You would need to implement the logic for this
      break;
  }
}

// This function divides a triangle into smaller triangles
// You would need to implement this based on your specific requirements
function divideTriangle(triangle) {
  // ...
}
