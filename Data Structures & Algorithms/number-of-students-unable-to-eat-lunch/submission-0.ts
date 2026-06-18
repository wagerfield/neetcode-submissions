class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let rejected = 0
        while (rejected < students.length) {
            if (students[0] === sandwiches[0]) {
                sandwiches.shift()
                students.shift()
                rejected = 0
            } else {
                students.push(students.shift())
                rejected++
            }
        }
        return students.length
    }
}
