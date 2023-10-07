const container = document.querySelector('.container');
let size = 16;
let colorchoice = 'green';


// Calculate the total number of cells (16x16 = 256)
const totalCells =  Math.pow(16, 2);

// Create a loop to generate the grid
for (let i = 0; i < totalCells; i++) {
  // Create a new <div> element for each grid cell
  const div = document.createElement('div');
  
  // Add the "grid" class name to each <div> element
  div.className = 'grid';

  div.addEventListener('mouseover', function() {
    div.style.backgroundColor = colorchoice;
  });
  
  // Append the <div> element to the container
  container.appendChild(div);
}

