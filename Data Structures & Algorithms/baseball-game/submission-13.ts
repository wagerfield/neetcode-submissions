class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const scores: number[] = [];
        let total = 0;

        for (let i = 0, l = operations.length; i < l; i++) {
            const op = operations[i];

            switch (op) {
                case "+":
                    scores.push(scores.at(-1) + scores.at(-2));
                    total += scores.at(-1);
                    break;
                case "C":
                    total -= scores.pop();
                    break;
                case "D":
                    scores.push(scores.at(-1) * 2);
                    total += scores.at(-1);
                    break;
                default:
                    scores.push(+op);
                    total += scores.at(-1);
                    break;
            }
        }

        return total;
    }
}
