const peek = <T>(stack: T[]): T => stack[stack.length - 1]

class MinStack {
    private vals: number[] = []
    private mins: number[] = []

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const min = peek(this.mins) ?? Infinity;
        this.mins.push(val < min ? val : min);
        this.vals.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.mins.pop();
        this.vals.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return peek(this.vals);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return peek(this.mins);
    }
}
