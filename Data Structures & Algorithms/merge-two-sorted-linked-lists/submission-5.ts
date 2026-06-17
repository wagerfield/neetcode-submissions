interface SinglyNode {
    val: number
    next: SinglyNode | null
}

class Solution {
    /**
     * @param {SinglyNode} list1
     * @param {SinglyNode} list2
     * @return {SinglyNode}
     */
    mergeTwoLists(list1: SinglyNode | null, list2: SinglyNode | null): SinglyNode | null {
        const dummy: SinglyNode = { val: 0, next: null }

        let tail = dummy
        let l1 = list1
        let l2 = list2
        
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                tail.next = l1
                l1 = l1.next
            } else {
                tail.next = l2
                l2 = l2.next
            }

            tail = tail.next
        }

        tail.next = l1 ?? l2

        return dummy.next
    }
}
