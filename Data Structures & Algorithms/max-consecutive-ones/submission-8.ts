class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let seq = 0, max = 0;
        
        for (let i = 0, l = nums.length; i < l; i++) {
            seq = nums[i] ? seq + 1 : 0
            max = max < seq ? seq : max
        }

        return max
    }
}
