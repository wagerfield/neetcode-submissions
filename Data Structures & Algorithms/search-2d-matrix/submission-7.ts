class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const ROWS = matrix.length
        const COLS = matrix[0].length

        let l = 0
        let r = ROWS * COLS - 1

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2)
            const row = Math.floor(mid / COLS)
            const col = mid % COLS
            const val = matrix[row][col]
            
            if (target > val) {
                l = mid + 1
            } else if (target < val) {
                r = mid - 1
            } else {
                return true
            }
        }

        return false
    }
}
