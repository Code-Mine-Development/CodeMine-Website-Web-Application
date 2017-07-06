export class AppRoutingProvider {
    static portfolioDetail(index: number): Array<string | number> {
        return ['/portfolio/', index]
    }
}
