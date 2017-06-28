import {async, TestBed, inject} from '@angular/core/testing';
import {HttpModule, XHRBackend, ResponseOptions, Response} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {PortfolioService} from './portfolio.service';
import {MockPortfolio} from "../../../shared/mocks/portfolio.mock";



describe('PortfolioService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                PortfolioService,
                { provide: XHRBackend, useClass: MockBackend}
            ]
        })
    }));

    describe('getPortfolioHomePageList()', () => {
        it('should return collection of portfolio list',
            inject([PortfolioService, XHRBackend], (portfolioService: PortfolioService, mockBackend) => {

            mockBackend.connections.subscribe((connection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(MockPortfolio)
                })));
            });

            portfolioService.getPortfolioHomePageList().subscribe((portfolio) => {
                expect(portfolio.length).toBe(1);
                expect(portfolio[0].title).toEqual('Mountain1');
                expect(portfolio[0].technologies.length).toBeGreaterThan(0);
            });
        }));
    });

    describe('getPortfolioList()', () => {
        it('should return collection of portfolio',
            inject([PortfolioService, XHRBackend], (portfolioService: PortfolioService, mockBackend) => {

                mockBackend.connections.subscribe((connection) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(MockPortfolio)
                    })));
                });

                portfolioService.getPortfolioList().subscribe((portfolio) => {
                    expect(portfolio.length).toBe(2);
                    expect(portfolio[0].title).toEqual('Mountain1');
                    expect(portfolio[1].title).toEqual('Mountain2');
                    expect(portfolio[0].technologies.length).toBeGreaterThan(0);
                });
            }));
    })
});
