/*
    Main JavaScript file
 */


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

// initialization
function init() {
    // code
}