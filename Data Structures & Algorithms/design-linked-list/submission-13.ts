class LinkedNode {
    constructor(
        public val: number,
        public next: LinkedNode | null = null,
    ) {}
}

type LinkedNodePredicate = (curr: LinkedNode, prev: LinkedNode | null, index: number) => boolean

interface LinkedNodeFindResult {
    curr: LinkedNode
    prev: LinkedNode | null
    index: number
}

class MyLinkedList {
    private head: LinkedNode | null = null
    private tail: LinkedNode | null = null
    private count: number = 0

    find(predicate: LinkedNodePredicate): LinkedNodeFindResult | null {
        let curr = this.head
        let prev = null
        let index = 0
        
        while (curr) {
            if (predicate(curr, prev, index)) {
                return { curr, prev, index }
            }

            prev = curr
            curr = curr.next
            index++
        }

        return null
    }

    findIndex(index: number): LinkedNodeFindResult | null {
        return this.find((_curr, _prev, i) => i === index)
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index < 0 || index >= this.count) return -1
        const result = this.findIndex(index)
        return result ? result.curr.val : -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        this.head = new LinkedNode(val, this.head)
        if (this.count === 0) this.tail = this.head
        this.count++
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        const node = new LinkedNode(val)
        if (this.tail) {
            this.tail.next = node
            this.tail = node
        } else {
            this.head = node
            this.tail = node
        }
        this.count++
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.count) return
        if (index === 0) return this.addAtHead(val)
        if (index === this.count) return this.addAtTail(val)

        const result = this.findIndex(index)

        if (!result) return

        const node = new LinkedNode(val, result.curr)

        if (result.prev) result.prev.next = node

        this.count++
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.count) return
        const result = this.findIndex(index)
        if (!result) return


        if (result.curr === this.head) {
            this.head = result.curr.next
        }

        if (result.curr === this.tail) {
            this.tail = result.prev
        }

        if (result.prev) {
            result.prev.next = result.curr.next
        }

        this.count--
        
        if (this.count === 0) {
            this.head = null
            this.tail = null
        }
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
