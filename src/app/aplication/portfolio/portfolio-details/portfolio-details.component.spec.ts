import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';

import {PortfolioDetailsComponent} from './portfolio-details.component';
import {PortfolioComponentModule} from '../../../components/portfolio/portfolio-components.module';
import {PortfolioService} from '../services/portfolio.service';
import {MockPortfolio} from '../../../shared/mocks/portfolio.mock';
import {ActivatedRoute, Router, Params} from '@angular/router';

class MockPortfolioService {
    private portfolio = MockPortfolio;

    getPortfolioDetails(index: number) {
        return this.portfolio[index];
    }
}

describe('PortfolioDetailsComponent', () => {
    let component: PortfolioDetailsComponent;
    let fixture: ComponentFixture<PortfolioDetailsComponent>;
    const router = {
        navigate: jasmine.createSpy('navigate')
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PortfolioDetailsComponent],
            imports: [PortfolioComponentModule],
            providers: [
                {provide: PortfolioService, useClass: MockPortfolioService},
                {provide: Router, useValue: router},
                {provide: ActivatedRoute, useValue: {
                    params: {
                        subscribe: (fn: (value: Params) => void) => fn({
                            id: 0,
                        })
                    }
                }},
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PortfolioDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should use details from portfolio service', () => {
        expect(component.details.title).toBe('Mountain1');
    });

    it('should use the user name from the service', inject([PortfolioService], (portfolioService: PortfolioService) => {
        const item = portfolioService.getPortfolioDetails(0);
        fixture.detectChanges();
        expect(item.title).toBe('Mountain1');
    }));


});
