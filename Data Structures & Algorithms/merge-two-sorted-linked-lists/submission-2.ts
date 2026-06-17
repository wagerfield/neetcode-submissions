interface Node {
    val: number
    next: Node | null
}

function compare(list1: Node | null, list2: Node | null): Node | null {
    if (list1 && list2) return list1.val < list2.val ? list1 : list2
    return list2 ?? list1
}

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: Node | null, list2: Node | null): Node | null {
        let l1 = list1
        let l2 = list2

        let head = compare(l1, l2)
        let tail = head
        
        while (tail !== null) {
            const min = compare(l1, l2)
            if (min === l1) l1 = l1?.next
            if (min === l2) l2 = l2?.next
            tail.next = min
            tail = min
        }

        return head
    }
}
