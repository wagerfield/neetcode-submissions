class MyStack {
    private queue = new Queue()

    constructor() {}

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.queue = new Queue([x, this.queue])
    }

    /**
     * @return {number}
     */
    pop(): number {
        const element = this.queue.dequeue()
        this.queue = this.queue.dequeue()
        return element
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.queue.front()
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.queue.isEmpty()
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
