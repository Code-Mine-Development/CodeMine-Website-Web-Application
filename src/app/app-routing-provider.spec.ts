import {TestBed, inject} from '@angular/core/testing';
import {AppRoutingProvider} from "./app-routing-provider";


describe('AppRoutingProvider', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AppRoutingProvider]
        });
    });

    it('should create', inject([AppRoutingProvider], (provide: AppRoutingProvider) => {
        expect(provide).toBeTruthy();
    }));

    it('should return "[\'/portfolio/\', index]"', () => {
        expect(AppRoutingProvider.portfolioDetail(1)).toEqual(['/portfolio/', 1 ]);
    });
});
