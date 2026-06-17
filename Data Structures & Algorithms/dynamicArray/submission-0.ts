class DynamicArray {
    private array: number[] = []
    private capacity: number

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.array[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.array[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.array.length === this.capacity) this.resize()
        this.array.push(n)
    }

    /**
     * @returns {number}
     */
    popback(): number {
        return this.array.pop()
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2 
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.array.length
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity
    }
}
