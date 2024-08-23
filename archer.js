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