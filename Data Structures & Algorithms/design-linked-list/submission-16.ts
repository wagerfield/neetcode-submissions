class ListNode {
    constructor(
        public val: number,
        public next: ListNode | null = null,
    ) {}
}

class MyLinkedList {
    head = new ListNode(0)
    size = 0

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index >= this.size) return -1
        let curr = this.head.next
        for (let i = 0; i < index; i++) curr = curr.next
        return curr.val
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        this.head.next = new ListNode(val, this.head.next)
        this.size++
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        let curr = this.head
        while (curr.next !== null) curr = curr.next
        curr.next = new ListNode(val)
        this.size++
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if (index > this.size) return
        let curr = this.head
        for (let i = 0; i < index; i++) curr = curr.next
        curr.next = new ListNode(val, curr.next)
        this.size++
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        if (index >= this.size) return
        let curr = this.head
        for (let i = 0; i < index; i++) curr = curr.next
        curr.next = curr.next.next
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
