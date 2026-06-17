class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let seq = 0
        let max = 0
        for (let i = 0, l = nums.length; i <= l; i++) {
            if (nums[i] === 1) {
                seq++
            } else {
                max = Math.max(max, seq)
                seq = 0
            }
        }
        return max
    }
}
