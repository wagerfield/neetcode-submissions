const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = []

        for (const paran of s) {
            if (bracketMap[paran]) stack.push(paran);
            else if (bracketMap[stack.pop()] !== paran) return false;
        }

        return stack.length === 0;
    }
}
