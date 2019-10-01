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
    for (let x = 0; x < 14 * 120; x++) {
        PieceKeys[x] = RAND_32();
    }
    SideKey = RAND_32();
    for (let x = 0; x < 14 * 120; x++) {
        CastleKeys[x] = RAND_32();
    }
}

// function to initialize Sq120ToSq64 and Sq64ToSq120
function InitSq120To64() {
    let sq = SQUARES.A1;
    let sq64 = 0;
    for (let x = 0; x < BRD_SQ_NUM; x++) {
        Sq120ToSq64[x] = 65;
    }
    for (let x = 0; x < 64; x++) {
        Sq64ToSq120[x] = 120;
    }
    for (let rank = RANKS.RANK_1; rank <= RANKS.RANK_8; rank++) {
        for (let file = FILES.FILE_A; file <= FILES.FILE_H; file++) {
            sq = FR2SQ(file, rank);
            Sq64ToSq120[sq64] = sq;
            Sq120ToSq64[sq] = sq64;
            sq64++;
        }
    }
}

// initialization
function init() {
    InitFilesRanksBrd();
    InitHashKeys();
}