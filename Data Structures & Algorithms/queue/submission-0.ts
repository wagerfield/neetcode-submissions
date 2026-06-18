class MyNode {
    constructor(
        public value: number,
        public prev: MyNode | null, 
        public next: MyNode | null,
    ) {}
}

class MyDeque {
    private head: MyNode | null = null
    private tail: MyNode | null = null

    constructor() {}

    /**
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.head === null
    }

    /**
     * @param {number} value
     */
    append(value: number): void {
        const oldTail = this.tail
        const newTail = new MyNode(value, oldTail, null)

        if (oldTail) oldTail.next = newTail
        if (!this.head) this.head = newTail

        this.tail = newTail
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value: number): void {
        const oldHead = this.head
        const newHead = new MyNode(value, null, oldHead)

        if (oldHead) oldHead.prev = newHead
        if (!this.tail) this.tail = newHead

        this.head = newHead
    }

    /**
     * @return {number}
     */
    pop(): number {
        const oldTail = this.tail

        if (!oldTail) return -1

        const newTail = oldTail.prev

        if (newTail) newTail.next = null
        else this.head = null

        this.tail = newTail

        return oldTail.value
    }

    /**
     * @return {number}
     */
    popleft(): number {
        const oldHead = this.head

        if (!oldHead) return -1

        const newHead = oldHead.next

        this.head = newHead

        if (newHead) newHead.prev = null
        else this.tail = null

        return oldHead.value
    }
}