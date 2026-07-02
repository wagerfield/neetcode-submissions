class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        const prefs = new Uint32Array(2)

        for (const student of students) {
            prefs[student]++
        }

        for (const sandwich of sandwiches) {
            if (prefs[sandwich] > 0) {
                prefs[sandwich]--
            } else break
        }

        console.log({ students, sandwiches, prefs })

        return prefs[0] + prefs[1]
    }
}

//   students=[1,1,1,0,0,1]
// sandwiches=[1,0,0,0,1,1]
//
//   students=[1,1,0,0,1]
// sandwiches=[0,0,0,1,1]
//
//   students=[1,0,0,1,1]
// sandwiches=[0,0,0,1,1]
//
//   students=[0,0,1,1,1]
// sandwiches=[0,0,0,1,1]
//
//   students=[0,1,1,1]
// sandwiches=[0,0,1,1]
//
//   students=[1,1,1]
// sandwiches=[0,1,1]