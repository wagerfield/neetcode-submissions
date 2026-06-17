class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let val, max = -1;
        for (let i = arr.length - 1; i >= 0; i--) {
            val = arr[i]
            arr[i] = max
            max = max < val ? val : max
        }
        return arr
    }
}
