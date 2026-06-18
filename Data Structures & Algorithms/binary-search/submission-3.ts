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
            // l = 5
            // r = 8
            // m = 5 + floor((8 - 5) / 2)
            //   > 5 + floor(3 / 2)
            //   > 5 + floor(1.5)
            //   > 5 + 1
            //   > 6
            const m = l + Math.floor((r - l) / 2);
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
