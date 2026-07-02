class BrowserHistory {
    private backwards: string[] = []
    private forwards: string[] = []

    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.backwards.push(homepage)
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.backwards.push(url)
        this.forwards.length = 0
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        const max = this.backwards.length - 1
        const limit = Math.min(max, steps)
        for (let i = 0; i < limit; i++) {
            this.forwards.push(this.backwards.pop())
        }
        console.log("back", { max, steps, limit })
        return this.backwards.at(-1)
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        const max = this.forwards.length
        const limit = Math.min(max, steps)
        for (let i = 0; i < limit; i++) {
            this.backwards.push(this.forwards.pop())
        }
        console.log("forward", { max, steps, limit })
        return this.backwards.at(-1)
    }
}
