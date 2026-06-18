/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n: number): number {
        let l = 1
        let r = n

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2)
            const out = guess(mid)

            if (out < 0) r = mid - 1
            else if (out > 0) l = mid + 1
            else return mid
        }

        return -1
    }
}
