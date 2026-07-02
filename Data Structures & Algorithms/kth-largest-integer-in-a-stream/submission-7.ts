class KthLargest {
    private heap: typeof MinPriorityQueue

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(public k: number, nums: number[]) {
        this.heap = new MinPriorityQueue()
        for (const num of nums) this.heap.push(num)
        while (this.heap.size() > k) this.heap.pop()
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.heap.push(val)
        while (this.heap.size() > this.k) this.heap.pop()
        return this.heap.front()
    }
}
