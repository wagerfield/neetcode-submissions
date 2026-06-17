class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
      const stack: string[] = []
      const map = {
        "(": ")",
        "{": "}",
        "[": "]",
      }
      
      for (const c of s) {
        if (c in map) {
          stack.push(c)
        } else if (c !== map[stack.pop()]) {
          return false
        }
      }

      return stack.length === 0
    }
}
