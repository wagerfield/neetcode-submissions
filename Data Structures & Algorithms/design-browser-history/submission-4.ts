class BrowserHistory {
    private backStack: string[]
    private forwardStack: string[]

    constructor(homepage: string) {
        this.backStack = [homepage]
        this.forwardStack = []
    }

    visit(url: string): void {
        this.backStack.push(url)
        this.forwardStack = []
    }

    back(steps: number): string {
        while (steps > 0 && this.backStack.length > 1) {
            this.forwardStack.push(this.backStack.pop())
            steps--
        }

        return this.backStack[this.backStack.length - 1]
    }

    forward(steps: number): string {
        while (steps > 0 && this.forwardStack.length > 0) {
            this.backStack.push(this.forwardStack.pop())
            steps--
        }

        return this.backStack[this.backStack.length - 1]
    }
}