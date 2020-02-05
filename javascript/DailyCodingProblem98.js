/*
This problem was asked by Coursera.

Given a 2D board of characters and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring.
The same letter cell may not be used more than once.

For example, given the following board:

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
exists(board, "ABCCED") returns true, exists(board, "SEE") returns true, exists(board, "ABCB") returns false.
*/

/**
 * 
 * @param {string[][]} board 
 * @param {string} pattern 
 * @returns {boolean}
 */
const exists = (board, pattern) => {
    // null check
    if (board === null) return false;
    if (pattern.length === 0) return true;

    const visited = board.map(row => row.map(col => false));

    for (let row=0; row < board.length; row++) {
        for (let col=0; col < board[0].length; col++) {
            if (search(board, row, col, pattern, 0, visited)) return true;
        }
    }

    return false;
};

/**
 * DFS helper for searching board
 * 
 * @param {string[][]} board 
 * @param {number} row 
 * @param {number} col 
 * @param {string} pattern 
 * @param {number} index 
 * @param {boolean[][]} visited 
 * @returns {boolean}
 */
const search = (board, row, col, pattern, index, visited) => {
    if (index >= pattern.length) return true;
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) return false;
    const charToMatch = pattern[index];
    if (board[row][col] !== charToMatch || visited[row][col]) return false;

    visited[row][col] = true;

    if (search(board, row-1, col, pattern, index+1, visited)
     || search(board, row+1, col, pattern, index+1, visited)
     || search(board, row, col-1, pattern, index+1, visited)
     || search(board, row, col+1, pattern, index+1, visited)) return true;
    
    visited[row][col] = false;
    return false;
}