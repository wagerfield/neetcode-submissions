class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let seq = 0, max = 0, idx = 0, len = nums.length;
        
        while (idx <= len) {
            if (nums[idx] === 1) {
                seq++
            } else {
                max = Math.max(max, seq)
                seq = 0
            }
            idx++;
        }
        return max
    }
}
