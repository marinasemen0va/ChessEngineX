// global game board variable
var GameBoard = {};

// properties of the game board
GameBoard.pieces = new Array (BRD_SQ_NUM);
GameBoard.side = COLOr.WHITE;
GameBoard.fiftyMove = 0; // a player can claim draw if a capture hasn't been made or a pawn hasn't been moved in 50 moves by both players
GameBoard.hisPly = 0; // maintain count of all the half moves (1 move for each side)
GameBoard.ply = 0; // number of half moves made in the search tree
GameBoard.castlePerm = 0; // for casting (both queen and queen side), can only do it if pieces haven't moved, using bitwise to determine whether or not allowed