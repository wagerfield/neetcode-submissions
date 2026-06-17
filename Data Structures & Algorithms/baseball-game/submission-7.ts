class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
      let score = 0;
      let total = 0;

      const scores: number[] = [];

      for (let i = 0, l = operations.length; i < l; i++) {
        switch (operations[i]) {
          case "+":
            score = scores.at(-1) + scores.at(-2);
            scores.push(score);
            total += score;
            continue;
          case "C":
            score = scores.pop();
            total -= score;
            continue;
          case "D":
            score = scores.at(-1) * 2;
            scores.push(score);
            total += score;
            continue;
          default:
            score = +operations[i];
            scores.push(score);
            total += score;
        }
      }

      return total;
    }
}
