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

        for (const c of s) {
            const closing = bracketMap[c];

            if (closing) {
                stack.push(c);
            } else {
                if (c !== bracketMap[stack.pop()]) return false;
           }
        }

        return stack.length === 0;
    }
}
