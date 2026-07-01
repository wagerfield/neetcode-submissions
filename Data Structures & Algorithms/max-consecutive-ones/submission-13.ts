class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let max = 0, seq = 0;
        for (const num of nums) {
            seq = num ? seq + 1 : 0;
            max = seq > max ? seq : max;
        }
        return max;
    }
}
