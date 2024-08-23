const chessboard = document.getElementById('chessboard');

// Grid coordinates mapping (A1 to H8)
const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const rows = ['8', '7', '6', '5', '4', '3', '2', '1'];

// Function to create squares with proper styling and grid coordinates
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.classList.add((i + j) % 2 === 0 ? 'white' : 'black');
        square.dataset.position = `${i},${j}`; // This sets a numeric grid reference for each square
        square.dataset.pos = `${columns[j]}${rows[i]}`; // This sets the chess notation (e.g., A1, B2) for each square
        chessboard.appendChild(square);
    }
}

const pieces = {
    pawn: '♟',
    rook: '♜',
    knight: '♞',
    bishop: '♝',
    queen: '♛',
    king: '♚',
    archer: 'A'
};

function placePiece(position, piece) {
    const square = document.querySelector(`[data-pos="${position}"]`);
    
    if (!square) {
        console.error(`No square found for position ${position}`);
        return; // Exit if the square is not found
    }

    const pieceElement = document.createElement('div');
    pieceElement.className = 'piece';
    pieceElement.textContent = pieces[piece];
    pieceElement.dataset.piece = piece;
    pieceElement.dataset.position = position;

    // Assign color based on row
    const row = position[1];
    if (row === '1' || row === '2') {
        pieceElement.classList.add('white'); // White pieces for rows 1 and 2
    } else if (row === '7' || row === '8') {
        pieceElement.classList.add('black'); // Black pieces for rows 7 and 8
    }

    square.appendChild(pieceElement);
}

// Set up the initial position of pieces
function setupBoard() {
    const initialPositions = {
        A1: 'rook', B1: 'knight', C1: 'bishop', D1: 'queen', E1: 'king', F1: 'archer', G1: 'knight', H1: 'rook',
        A2: 'pawn', B2: 'pawn', C2: 'pawn', D2: 'pawn', E2: 'pawn', F2: 'pawn', G2: 'pawn', H2: 'pawn',
        A7: 'pawn', B7: 'pawn', C7: 'pawn', D7: 'pawn', E7: 'pawn', F7: 'pawn', G7: 'pawn', H7: 'pawn',
        A8: 'rook', B8: 'knight', C8: 'archer', D8: 'queen', E8: 'king', F8: 'bishop', G8: 'knight', H8: 'rook'
    };

    for (const [position, piece] of Object.entries(initialPositions)) {
        placePiece(position, piece);
    }
}

window.onload = function() {
    setupBoard();
};
