// Movement logic for standard pieces and the Archer
function getPawnMoves(position, color) {
    const [x, y] = position.split(',').map(Number);
    const moves = [];
    const direction = color === 'white' ? -1 : 1; // White moves up (decreases row), Black moves down (increases row)

    // Move one square forward
    if (isValidPosition(x + direction, y)) {
        moves.push(`${x + direction},${y}`);
    }

    // Capture diagonally
    if (isValidPosition(x + direction, y + 1)) {
        moves.push(`${x + direction},${y + 1}`);
    }
    if (isValidPosition(x + direction, y - 1)) {
        moves.push(`${x + direction},${y - 1}`);
    }

    return moves;
}

function isValidPosition(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}


function getRookMoves(position) {
    const [x, y] = position.split(',').map(Number);
    return getLinearMoves(x, y, [[1, 0], [-1, 0], [0, 1], [0, -1]]);
}

function getBishopMoves(position) {
    const [x, y] = position.split(',').map(Number);
    return getLinearMoves(x, y, [[1, 1], [-1, -1], [-1, 1], [1, -1]]);
}

function getKnightMoves(position) {
    const [x, y] = position.split(',').map(Number);
    const moves = [];
    const directions = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [-1, 2], [1, -2], [-1, -2]];

    directions.forEach(([dx, dy]) => {
        if (isValidPosition(x + dx, y + dy)) {
            moves.push(`${x + dx},${y + dy}`);
        }
    });

    return moves;
}

function getQueenMoves(position) {
    return [...getRookMoves(position), ...getBishopMoves(position)];
}

function getKingMoves(position) {
    const [x, y] = position.split(',').map(Number);
    const moves = [];
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [-1, 1], [1, -1]];

    directions.forEach(([dx, dy]) => {
        if (isValidPosition(x + dx, y + dy)) {
            moves.push(`${x + dx},${y + dy}`);
        }
    });

    return moves;
}

let archerTurn = true;

function getArcherMoves(position) {
    if (archerTurn) {
        return getBishopMoves(position); // Moves like a Bishop
    } else {
        return getRookMoves(position); // Moves like a Rook
    }
}

// Toggle the archer's turn in the move handling
function toggleArcherTurn() {
    archerTurn = !archerTurn;
}


function isValidPosition(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function getLinearMoves(x, y, directions) {
    const moves = [];

    directions.forEach(([dx, dy]) => {
        let nx = x + dx;
        let ny = y + dy;

        while (isValidPosition(nx, ny)) {
            moves.push(`${nx},${ny}`);
            nx += dx;
            ny += dy;
        }
    });

    return moves;
}
