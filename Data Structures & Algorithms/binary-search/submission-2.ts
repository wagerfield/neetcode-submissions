class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let r = nums.length - 1
        let l = 0
        
        while (l <= r) {
            const m = Math.floor((l + r) / 2)
            const v = nums[m]

            if (target > v) {
                l = m + 1
            } else if (target < v) {
                r = m - 1
            } else {
                return m
            }
        }

        return -1
    }
}
