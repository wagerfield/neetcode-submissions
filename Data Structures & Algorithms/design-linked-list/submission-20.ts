class LinkedNode {
    constructor(
        public val: number,
        public next: LinkedNode | null = null,
    ) {}
}

class MyLinkedList {
    private head = new LinkedNode(0)
    private size = 0

    /**
     * @param {number} index
     * @return {number}
     */
    prev(index: number): LinkedNode | null {
        let node = this.head
        for (let i = 0; i < index; i++) node = node.next
        return node
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index >= this.size) return -1
        return this.prev(index).next.val
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        this.addAtIndex(0, val)
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        this.addAtIndex(this.size, val)
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if (index > this.size) return
        const prev = this.prev(index)
        prev.next = new LinkedNode(val, prev.next)
        this.size++
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        if (index >= this.size) return
        const prev = this.prev(index)
        prev.next = prev.next.next
        this.size--
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
