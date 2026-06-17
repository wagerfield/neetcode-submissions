class MinStack {
    private stack: number[] = []

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1)
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack.reduce((min, val) => {
            return min < val ? min : val
        }, this.stack[0] ?? 0)
    }
}
