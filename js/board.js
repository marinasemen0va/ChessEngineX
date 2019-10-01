/*
    Board setup file
 */

function PCEINDEX(pce, pceNum) {
    return (pce * 10 + pceNum)
}

// global game board variable
var GameBoard = {};

// properties of the game board
GameBoard.pieces = new Array (BRD_SQ_NUM);
GameBoard.side = COLOURS.WHITE;
GameBoard.fiftyMove = 0; // a player can claim draw if a capture hasn't been made or a pawn hasn't been moved in 50 moves by both players
GameBoard.hisPly = 0; // maintain count of all the half moves (1 move for each side)
GameBoard.ply = 0; // number of half moves made in the search tree
GameBoard.enPas = 0; // en passant rule (involves paws and capturing)
GameBoard.castlePerm = 0; // for casting (both queen and queen side), can only do it if pieces haven't moved, using bitwise to determine whether or not allowed
GameBoard.material = new Array(2);
GameBoard.pceNum = new Array(13); // how many of each type  of piece is there
GameBoard.pList = new Array(14 * 10); // list of pieces
GameBoard.posKey = 0; // unique num that represents pos on the board, used for repetition detection, stores previous moves, 3 duplicate moves in chess = draw
GameBoard.moveList = new Array(MAXDEPTH * MAXPOSITIONMOVES); // store list of moves that board has in given position
GameBoard.moveScores = new Array(MAXDEPTH * MAXPOSITIONMOVES); // moves generated given a score
GameBoard.moveListStart = new Array(MAXDEPTH); // where the move list will start for given depth

// put in the random values
function GeneratePosKey() {
    var finalKey = 0;
    var piece = PIECES.EMPTY;
    for(let sq = 0; sq < BRD_SQ_NUM; ++sq) { // get piece on a square, if piece not empty and not offboard = key at that place = hash in random key
        piece = GameBoard.pieces[sq];
        if(piece !== PIECES.EMPTY && piece !== SQUARES.OFFBOARD) {
            finalKey ^= PieceKeys[(piece * 120) + sq];
        }
    }
    if(GameBoard.side === COLOURS.WHITE) { // if move is white then hash in SideKey
        finalKey ^= SideKey;
    }
    if(GameBoard.enPas !== SQUARES.NO_SQ) { // if emp square is not no square then hash in ampersand
        finalKey ^= PieceKeys[GameBoard.enPas];
    }
    finalKey ^= CastleKeys[GameBoard.castlePerm]; // hash castle perms
    return finalKey;
}

// reset board
function ResetBoard() {
    for (let x = 0; x < BRD_SQ_NUM; x++) {
        GameBoard.pieces[x] = SQUARES.OFFBOARD;
    }
    for (let x = 0; x < 64; x++) {
        GameBoard.pieces[SQ120(x)] = PIECES.EMPTY;
    }
    for (let x = 0; x < 14 * 120; x++) {
        GameBoard.pList[x] = PIECES.EMPTY;
    }
    for (let x = 0; x < 2; x++) {
        GameBoard.material[x] = 0;
    }
    for (let x = 0; x < 13; x++) {
        GameBoard.pceNum[x] = 0;
    }
    GameBoard.side = COLOURS.BOTH;
    GameBoard.enPas = SQUARES.NO_SQ;
    GameBoard.fiftyMove = 0;
    GameBoard.ply = 0;
    GameBoard.hisPly = 0;
    GameBoard.castlePerm = 0;
    GameBoard.posKey = 0;
    GameBoard.moveListStart[GameBoard.ply] = 0;
}

// convert inputted string into board format
function ParseFen(fen) {
    ResetBoard();
}