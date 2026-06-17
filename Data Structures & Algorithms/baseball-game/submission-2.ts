class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
      let score = 0;
      let total = 0;

      const scores: number[] = [];

      for (let s = 0, i = 0, l = operations.length; i < l; i++) {
        switch (operations[i]) {
          case "+":
            score = scores[s-1] + scores[s-2];
            scores.push(score);
            total += score;
            s++;
            continue;
          case "C":
            score = scores.pop();
            console.log(score, total);
            total -= score;
            s--;
            continue;
          case "D":
            score = scores[s-1] * 2;
            scores.push(score);
            total += score;
            s++;
            continue;
          default:
            score = +operations[i];
            scores.push(score);
            total += score;
            s++;
        }
      }

      console.log(scores);

      return total;
    }
}
