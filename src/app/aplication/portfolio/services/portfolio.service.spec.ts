import {async, TestBed, inject, tick, fakeAsync} from '@angular/core/testing';
import {HttpModule, XHRBackend, ResponseOptions, Response} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {PortfolioService} from './portfolio.service';
import {MockPortfolio} from '../../../shared/mocks/portfolio.mock';


describe('PortfolioService', () => {
  const MagicUseObj = {
    MagicUse(connection){
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(MockPortfolio)
      })));
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        PortfolioService,
        {provide: XHRBackend, useClass: MockBackend}
      ]
    });
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
          expect(portfolio[0].title).toEqual('PORTFOLIO.MidOceanBrands.title');
          expect(portfolio[0].technologies.length).toBeGreaterThan(0);
        });
      }));
    it('should return collection of local portfolio list',
      inject([PortfolioService, XHRBackend], (portfolioService: PortfolioService, mockBackend) => {
        spyOn(MagicUseObj, 'MagicUse').and.callThrough();
        mockBackend.connections.subscribe((connection) => MagicUseObj.MagicUse(connection));
        portfolioService.getPortfolioHomePageList().subscribe();
        portfolioService.getPortfolioHomePageList().subscribe((portfolio) => {
          expect(MagicUseObj.MagicUse).toHaveBeenCalledTimes(1);
          expect(portfolio.length).toBe(1);
          expect(portfolio[0].title).toEqual('PORTFOLIO.MidOceanBrands.title');
          expect(portfolio[0].technologies.length).toBeGreaterThan(0);
        });
      }));
  });

  describe('getPortfolioList', () => {
    it('should return collection of portfolio list',
      inject([PortfolioService, XHRBackend], (portfolioService: PortfolioService, mockBackend) => {

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(MockPortfolio)
          })));
        });

        portfolioService.getPortfolioList().subscribe((portfolio) => {
          expect(portfolio.length).toBe(1);
          expect(portfolio[0].title).toEqual('PORTFOLIO.MidOceanBrands.title');
          expect(portfolio[0].technologies.length).toBeGreaterThan(0);
        });
      }));
    it('should return collection of local portfolio list',
      inject([PortfolioService, XHRBackend], (portfolioService: PortfolioService, mockBackend) => {

        spyOn(MagicUseObj, 'MagicUse').and.callThrough();
        mockBackend.connections.subscribe((connection) => MagicUseObj.MagicUse(connection));

        portfolioService.getPortfolioList().subscribe();
        portfolioService.getPortfolioList().subscribe((portfolio) => {
          expect(MagicUseObj.MagicUse).toHaveBeenCalledTimes(1);
          expect(portfolio.length).toBe(1);
          expect(portfolio[0].title).toEqual('PORTFOLIO.MidOceanBrands.title');
          expect(portfolio[0].technologies.length).toBeGreaterThan(0);
        });
      }));
    it('should return detail of portfolio element',
      inject([PortfolioService, XHRBackend], (portfolioService: PortfolioService, mockBackend) => {

        spyOn(MagicUseObj, 'MagicUse').and.callThrough();
        mockBackend.connections.subscribe((connection) => MagicUseObj.MagicUse(connection));

        portfolioService.getPortfolioList().subscribe();
        const portfolio = portfolioService.getPortfolioDetails('mid-ocean-brands');

        expect(MagicUseObj.MagicUse).toHaveBeenCalledTimes(1);
        expect(portfolio.link).toEqual('mid-ocean-brands');
        expect(portfolio.technologies.length).toBeGreaterThan(0);
      }));
  })

});
