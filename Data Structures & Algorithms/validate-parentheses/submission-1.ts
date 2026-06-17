class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
      const stack: string[] = []

      const openToClose = {
        "(": ")",
        "{": "}",
        "[": "]",
      }

      const closeToOpen = {
        ")": "(",
        "}": "{",
        "]": "[",
      }
      
      for (const c of s) {
        const last = stack.at(-1)
        const closing = openToClose[c]
        const opening = closeToOpen[c]

        if (closing) stack.push(c)
        else if (last === opening) stack.pop()
        else return false
      }

      return stack.length === 0
    }
}
