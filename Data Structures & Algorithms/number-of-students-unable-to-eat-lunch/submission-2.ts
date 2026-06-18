class Q<T> {
    constructor(public items: T[] = []) {}

    get front(): T | undefined {
        return this.items[0]
    }

    get back(): T | undefined {
        return this.items[this.items.length - 1]
    }

    get length(): number {
        return this.items.length
    }

    enqueue(value: T): void {
        this.items.push(value)
    }

    dequeue(): T | undefined {
        return this.items.shift()
    }
}

class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        const studentsQueue = new Q(students)
        const sandwichesQueue = new Q(sandwiches)

        let rejected = 0

        while (rejected < studentsQueue.length) {
            if (studentsQueue.front === sandwichesQueue.front) {
                sandwichesQueue.dequeue()
                studentsQueue.dequeue()
                rejected = 0
            } else {
                studentsQueue.enqueue(studentsQueue.dequeue())
                rejected++
            }
        }
        
        return studentsQueue.length
    }
}
