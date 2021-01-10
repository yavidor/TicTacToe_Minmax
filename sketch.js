const grid = [
  ['','',''],
  ['','',''],

  ['','','']];
  ai=!true;
function setup() {
  createCanvas(400, 400);
}
function equals3(a, b, c) {
  return (a == b && b == c && a != '');
}

function checkWinner(grid) {
  let winner = null;

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(grid[i][0], grid[i][1], grid[i][2])) {
      winner = grid[i][0];
    }
  }

  // Vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(grid[0][i], grid[1][i], grid[2][i])) {
      winner = grid[0][i];
    }
  }

  // Diagonal
  if (equals3(grid[0][0], grid[1][1], grid[2][2])) {
    winner = grid[0][0];
  }
  if (equals3(grid[2][0], grid[1][1], grid[0][2])) {
    winner = grid[2][0];
  }
  let open = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] == "") {
        open++;
      }
    }
  }
  if (winner == null && open == 0) {
    return 'tie';
  } else {
    return winner;
  }

}
function draw() {

  background(220);
  textSize(75);
  textAlign(CENTER,CENTER);
  strokeWeight(5);
  line(width/3,0,width/3,height);
  line(2*width/3,0,2*width/3,height);
  line(0,height/3,width,height/3);
  line(0,2*height/3,width,2*height/3);
  for(let i=0;i<3;i++){
    for (let j=0; j<3; j++){
      text(grid[i][j],j*width/3+(width/6),i*height/3+(height/6));
    }
  }
  let result = checkWinner(grid);
  if (result != null) {
    console.log(result)
    noLoop();
    let resultP = createP('');
    resultP.style('font-size', '32pt');
    if (result == 'tie') {
      resultP.html("Tie!")
    } else {
      resultP.html(`${result} wins!`);
    }
  } else {
	  if(ai){
    console.log(makeTurn());
    ai=false;
	  
	  }
  }
}
function mouseClicked(){
	if(grid[floor(mouseY/(width/3))][floor(mouseX/(height/3))]==""){
	grid[floor(mouseY/(width/3))][floor(mouseX/(height/3))]="O";
	ai=true;
}
}