/*
    Main JavaScript file
 */

$(function() {
    init();
});

// initialization of files, ranks, and the board
function InitFilesRanksBrd () {
    let sq;

    // all squares set as offboard
    for (let index = 0; index < BRD_SQ_NUM; index++) {
        FilesBrd[index] = SQUARES.OFFBOARD;
        RanksBrd[index] = SQUARES.OFFBOARD;
    }

    // sets the file and rank for a square
    for (let rank = RANKS.RANK_1; rank <= RANKS.RANK_8; rank++) {
        for (let file = FILES.FILE_A; file <= FILES.FILE_H; file++) {
            sq = FR2SQ(file, rank);
            FilesBrd[sq] = file;
            RanksBrd[sq] = rank;
        }
    }
}

// initialize random keys
function InitHashKeys () {
    for (let x = 0; x < 14 * 120; x++){
        PieceKeys[x] = RAND_32();
    }
    SideKey = RAND_32();

    for (let x = 0; x < 14 * 120; x++){
        CastleKeys[x] = RAND_32();
    }
}

// initialization
function init() {
    InitFilesRanksBrd();
    InitHashKeys();
}