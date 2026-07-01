class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let max = 0;
        let seq = 0;

        for (let i = 0, l = nums.length; i < l; i++) {
            seq = nums[i] ? seq + 1 : 0
            max = seq > max ? seq : max
        }

        return max 
    }
}
