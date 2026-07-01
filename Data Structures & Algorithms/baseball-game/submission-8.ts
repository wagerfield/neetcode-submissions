class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const scores: number[] = [];

        for (let i = 0, l = operations.length; i < l; i++) {
            const op = operations[i];

            switch (op) {
                case "+":
                    scores.push(scores.at(-1) + scores.at(-2));
                    break;
                case "C":
                    scores.pop();
                    break;
                case "D":
                    scores.push(scores.at(-1) * 2);
                    break;
                default:
                    scores.push(+op);
                    break;
            }
        }

        return scores.reduce((acc, val) => acc + val, 0);
    }
}
