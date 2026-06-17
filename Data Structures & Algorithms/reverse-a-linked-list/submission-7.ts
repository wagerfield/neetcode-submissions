// L1 -> L2
// L2 -> L1

// L1 -> L2 -> L3 -> L4
// L4 -> L3 -> L2 -> L1

interface Node {
    val: number
    next: Node | null
}

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    reverseList(head: Node | null): Node | null {
        let curr: Node | null = head
        let prev: Node | null = null

        while (curr !== null) {
            const next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }

        return prev
    }
}
