let selectedPiece = null;

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', () => {
        // Remove previous highlights
        document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
        
        if (selectedPiece) {
            const targetPosition = square.dataset.position;
            const validMoves = getValidMoves(selectedPiece.dataset.position, selectedPiece.dataset.piece);

            if (validMoves.includes(targetPosition)) {
                square.appendChild(selectedPiece);
                if (selectedPiece.dataset.piece === 'archer') {
                    toggleArcherTurn(); // Toggle Archer's movement style
                }
            }
            selectedPiece = null;
        } else if (square.children.length > 0) {
            selectedPiece = square.children[0];
            const pieceType = selectedPiece.dataset.piece;
            const validMoves = getValidMoves(square.dataset.position, pieceType);

            validMoves.forEach(move => {
                const targetSquare = document.querySelector(`[data-position="${move}"]`);
                targetSquare.classList.add('highlight');
            });
        }
    });
});

function getValidMoves(position, pieceType) {
    switch (pieceType) {
        case 'pawn':
            return getPawnMoves(position, selectedPiece.dataset.color);
        case 'rook':
            return getRookMoves(position);
        case 'knight':
            return getKnightMoves(position);
        case 'bishop':
            return getBishopMoves(position);
        case 'queen':
            return getQueenMoves(position);
        case 'king':
            return getKingMoves(position);
        case 'archer':
            return getArcherMoves(position);
        default:
            return [];
    }
}
