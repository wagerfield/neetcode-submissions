interface MinStackNode {
    min: number
    val: number
}

class MinStack {
    private stack: MinStackNode[] = [];

    private topNode(): MinStackNode | null {
        return this.stack[this.stack.length - 1] ?? null;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const top = this.topNode();
        const min = top ? val < top.min ? val : top.min : val;
        this.stack.push({ val, min });
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.topNode().val;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.topNode().min;
    }
}
