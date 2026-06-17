class BrowserHistory {
    private backStack: string[]
    private forwardStack: string[]

    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.backStack = [homepage]
        this.forwardStack = []
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.backStack.push(url)
        this.forwardStack = []
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        const maxSteps = this.backStack.length - 1
        const minSteps = Math.min(steps, maxSteps)
        const removed = this.backStack.splice(-minSteps, minSteps)

        this.forwardStack.push(...removed.reverse())

        return this.backStack.at(-1)
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        const maxSteps = this.forwardStack.length
        const minSteps = Math.min(steps, maxSteps)
        const removed = this.forwardStack.splice(-minSteps, minSteps)

        this.backStack.push(...removed.reverse())

        return this.backStack.at(-1)
    }
}