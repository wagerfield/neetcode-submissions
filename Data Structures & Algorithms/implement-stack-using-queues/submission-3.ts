// declare class Queue<T> {
//     static fromArray<T>(elements: T[]): Queue<T>

//     constructor(elements?: T[])
    
//     clone(): Queue<T>
    
//     enqueue(element: T): Queue<T>
//     dequeue(): T | null

//     contains(elementOrCallback: T | ((element: T) => boolean)): boolean

//     front(): T | null
//     back(): T | null

//     size(): number
//     isEmpty(): boolean

//     toArray(): T[]
// }

class MyStack {
    private queue = new Queue()

    constructor() {}

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        // [...rest, x]
        // [x, ...rest]
        // [1, 2, 3] -> [1, 2, 3, x]
        
        this.queue.enqueue(x)
        for (let i = 0, l = this.queue.size() - 1; i < l; i++) {
            this.queue.enqueue(this.queue.dequeue())
        }
    }

    /**
     * @return {number}
     */
    pop(): number {
        return this.queue.dequeue()
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
