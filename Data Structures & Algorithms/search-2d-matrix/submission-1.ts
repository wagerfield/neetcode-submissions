function binarySearch(arr: number[], target: number): number {
    let l = 0, r = arr.length - 1
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2)
        const val = arr[mid]

        if (target > val) {
            l = mid + 1
        } else if (target < val) {
            r = mid - 1
        } else {
            return mid
        }
    }
    return -1
}

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        for (const row of matrix) {
            if (binarySearch(row, target) !== -1) return true
        }
        return false
    }
}
