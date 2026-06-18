class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        const studentCounts = new Uint32Array(2)

        let unserved = students.length

        for (const student of students) {
            studentCounts[student]++
        }

        for (const sandwich of sandwiches) {
            if (studentCounts[sandwich] > 0) {
                studentCounts[sandwich]--
                unserved--
            } else break
        }

        return unserved
    }
}
