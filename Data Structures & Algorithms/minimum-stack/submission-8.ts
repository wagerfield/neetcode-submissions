class Pair {
    constructor(
        readonly val: number, 
        readonly min: number,
    ) {}
}

class MinStack {
    private stack: Pair[] = []
    private length: number = 0

    /**
     * @return {number}
     */
    private last(): Pair | undefined {
        return this.stack[this.length - 1]
    }
    
    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const lastMin = this.last()?.min ?? val
        const min = lastMin < val ? lastMin : val
        this.stack[this.length++] = new Pair(val, min)
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
        return this.last()?.val ?? 0
    }

    /**
     * @return {number}
     */
    getMin(): number { 
        return this.last()?.min ?? 0
    }
}
