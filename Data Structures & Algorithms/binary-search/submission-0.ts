class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let h = nums.length - 1
        let l = 0
        
        while (l <= h) {
            const m = Math.floor((l + h) / 2)

            if (target > nums[m]) {
                l = m + 1
            } else if (target < nums[m]) {
                h = m - 1
            } else {
                return m
            }
        }

        return -1
    }
}
