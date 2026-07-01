class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let max = -1;
        for (let i = arr.length - 1; i >= 0; i--) {
            const val = arr[i]
            arr[i] = max
            max = val > max ? val : max
        }
        return arr;
    }
}
