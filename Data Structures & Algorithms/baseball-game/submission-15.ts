class Solution {
    top<T>(stack: T[]): T {
        return stack[stack.length - 1];
    }

    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack: number[] = [];

        let total = 0;

        for (let i = 0, l = operations.length; i < l; i++) {
            const op = operations[i];

            if (op === "+") {
                const top1 = stack.pop();
                const top2 = stack.pop();
                const score = top1 + top2;
                stack.push(top2, top1, score);
                total += score;
            } else if (op === "D") {
                const top = stack.pop();
                const score = top * 2;
                stack.push(top, score);
                total += score;
            } else if (op === "C") {
                total -= stack.pop();
            } else {
                const score = parseInt(op);
                stack.push(score);
                total += score;
            }
        }

        return total;
    }
}
