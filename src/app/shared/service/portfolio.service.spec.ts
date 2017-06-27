import {async, TestBed, inject} from '@angular/core/testing';
import {HttpModule, XHRBackend, ResponseOptions, Response} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {PortfolioService} from './portfolio.service';

const MockData = [
    {
      'title': 'Mountain1',
      'description': 'Super Description1',
      'mainImage': 'https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpeg',
      'thumbnail': 'https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpeg',
      'tags': {
          'products': ['prod1', 'prod2', 'prod3'],
          'technology': ['tech1', 'tech2', 'tech3'],
          'languages': ['lang1', 'lang1', 'lang1']
      },
      'technologies': [
          {
              'title': 'Technology1',
              'description': 'Description1',
              'thumbnail': 'https://just4fun.io/content/images/2016/05/angular.png',
              'mainImage': 'https://just4fun.io/content/images/2016/05/angular.png'
          },
          {
              'title': 'Technology2',
              'description': 'Description2',
              'thumbnail': 'https://just4fun.io/content/images/2016/05/angular.png',
              'mainImage': 'https://just4fun.io/content/images/2016/05/angular.png'
          },
          {
              'title': 'Technology3',
              'description': 'Description3',
              'thumbnail': 'https://just4fun.io/content/images/2016/05/angular.png',
              'mainImage': 'https://just4fun.io/content/images/2016/05/angular.png'
          },
          {
              'title': 'Technology4',
              'description': 'Description4',
              'thumbnail': 'https://just4fun.io/content/images/2016/05/angular.png',
              'mainImage': 'https://just4fun.io/content/images/2016/05/angular.png'
          }
      ],
      'homePage': true
    },
    {
        'title': 'Mountain2',
        'description': 'Super Description2',
        'mainImage': 'http://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg',
        'thumbnail': 'http://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg',
        'tags': {
            'products': ['prod1', 'prod2', 'prod3'],
            'technology': ['tech1', 'tech2', 'tech3'],
            'languages': ['lang1', 'lang1', 'lang1']
        },
        'technologies': [
            {
                'title': 'Technology1',
                'description': 'Description1',
                'thumbnail': 'https://a0.awsstatic.com/main/images/logos/aws_logo_179x109.gif',
                'mainImage': 'https://a0.awsstatic.com/main/images/logos/aws_logo_179x109.gif'
            },
            {
                'title': 'Technology2',
                'description': 'Description2',
                'thumbnail': 'https://a0.awsstatic.com/main/images/logos/aws_logo_179x109.gif',
                'mainImage': 'https://a0.awsstatic.com/main/images/logos/aws_logo_179x109.gif'
            }
        ],
        'homePage': true
    }
];

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
                    body: JSON.stringify(MockData)
                })));
            });

            portfolioService.getPortfolioHomePageList().subscribe((portfolio) => {
                expect(portfolio.length).toBe(2);
                expect(portfolio[0].title).toEqual('Mountain1');
                expect(portfolio[1].title).toEqual('Mountain2');
                expect(portfolio[0].technologies.length).toBeGreaterThan(0);
            });
        }));
    });

    describe('getPortfolioList()', () => {
        it('should return collection of portfolio',
            inject([PortfolioService, XHRBackend], (portfolioService: PortfolioService, mockBackend) => {

                mockBackend.connections.subscribe((connection) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(MockData)
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
