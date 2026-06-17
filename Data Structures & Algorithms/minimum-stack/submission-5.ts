class MinStack {
    private length: number = 0
    private stack: number[] = []
    private min: number[] = []
    
    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const min = this.min[this.length - 1]
        this.stack[this.length] = val
        this.min[this.length] = min < val ? min : val
        this.length++
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.length--
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number { 
        return this.min[this.length - 1]
        // return this.stack.reduce((min, val) => {
        //     return min < val ? min : val
        // }, this.stack[0] ?? 0)
    }
}
