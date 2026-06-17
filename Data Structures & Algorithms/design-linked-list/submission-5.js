class ListNode {
    /**
     * @param {number} val
     * @param {ListNode | null} prev
     * @param {ListNode | null} next
     * @return {ListNode}
     */
    constructor(val, prev = null, next = null) {
        this.val = val
        this.prev = prev
        this.next = next
    }
}

class MyLinkedList {
    constructor() {
        this.head = this.tail = null
        this.length = 0
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        const node = this.getAtIndex(index)
        return node ? node.val : -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const oldHead = this.head
        const newHead = new ListNode(val, null, oldHead) 

        this.head = newHead
        this.length++

        if (!this.tail) this.tail = newHead
        if (oldHead) oldHead.prev = newHead
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const oldTail = this.tail
        const newTail = new ListNode(val, oldTail, null) 

        this.tail = newTail
        this.length++

        if (!this.head) this.head = newTail
        if (oldTail) oldTail.next = newTail
    }

    getLastIndex() {
        return this.length - 1
    }

    /**
     * @param {number} index
     * @return {ListNode | null}
     */
    getAtIndex(index) {
        const lastIndex = this.getLastIndex()

        if (index < 0 || index > lastIndex) return null
        if (index === lastIndex) return this.tail


        let node = this.head

        for (let i = 0; i < index; i++) {
            node = node.next
            if (node === null) break
        }

        return node
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index === 0) {
            return this.addAtHead(val)
        }

        if (index === this.length) {
            return this.addAtTail(val)
        }

        const refNode = this.getAtIndex(index)

        if (!refNode) return

        const prevNode = refNode.prev
        const newNode = new ListNode(val, prevNode, refNode)

        if (prevNode) prevNode.next = newNode
        refNode.prev = newNode
        this.length++
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        let refNode
        if (index === 0) refNode = this.head
        else if (index === this.getLastIndex()) refNode = this.tail
        else refNode = this.getAtIndex(index)

        if (!refNode) return

        const prevNode = refNode.prev
        const nextNode = refNode.next

        if (prevNode) prevNode.next = nextNode
        else this.head = nextNode

        if (nextNode) nextNode.prev = prevNode
        else this.tail = prevNode

        this.length--

        if (this.length === 0) {
            this.head = this.tail = null
        }
    }
}
