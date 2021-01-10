let counter =0;
function makeTurn() {
  let best = -Infinity;
  let score;
  let bestFound;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] == "") {
        grid[i][j] = "X";

        score = minmax(grid, false);
        grid[i][j] = "";
        if (score >= best) {
          best = score;
          bestFound = [i, j];
        }
      }
    }
  }
  grid[bestFound[0]][bestFound[1]]="X";
}
scores = {X: 10, O:-10,tie:0};
function minmax(grid, isMax) {
counter++;
	let result = checkWinner(grid);
	if(result!=null)
		return(scores[result]);
  if (isMax) {
    let best = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i][j] == "") {
          grid[i][j] = "X";
          score = minmax(grid, false);
          grid[i][j] = "";
          best = max(score,best);
        }
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i][j] == "") {
          grid[i][j] = "O";
          score = minmax(grid, true);
          grid[i][j] = "";
          best = min(score,best);
        }
      }
    }
    return best;
  }
}
function nogaMax(grid,color){
	counter++;
	let result = checkWinner(grid);
	if(result!=null)
		return(scores[result]*color);
	let best = -Infinity;
	
 for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i][j] == "") {
			if (color == 1)
          grid[i][j] = "X";
	  else
		  grid[i][j] = "O";
          let score = nogaMax(grid, -color);
          grid[i][j] = "";
          best = max(-score,best);
        }
      }
    }
	return best;
}