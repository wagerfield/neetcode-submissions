class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let k = 0;
        for (let i = 0, l = nums.length; i < l; i++) {
            if (nums[i] !== val) nums[k++] = nums[i];
        }
        return k;
    }
}
