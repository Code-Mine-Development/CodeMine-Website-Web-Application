// import {async, TestBed, inject} from '@angular/core/testing';
// import {HttpModule, XHRBackend, ResponseOptions, Response} from '@angular/http';
// import {MockBackend} from '@angular/http/testing';
// import {HomeInformationServices} from './home-information.service';
// import {MockInformation} from 'app/services/mocks/home-information.mock';
//
// describe('HomeInformationService', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpModule],
//       providers: [
//         HomeInformationServices,
//         {provide: XHRBackend, useClass: MockBackend}
//       ]
//     })
//   }));
//
//   describe('getCompany()', () => {
//     it('should return collection of company list',
//       inject([HomeInformationServices, XHRBackend], (homeInformationService: HomeInformationServices, mockBackend) => {
//         expect(HomeInformationServices).toBeDefined();
//         mockBackend.connections.subscribe((connection) => {
//           connection.mockRespond(new Response(new ResponseOptions({
//             body: JSON.stringify(MockInformation)
//           })));
//         });
//
//         homeInformationService.getInformation().subscribe((information) => {
//           expect(information[0].title).toContain('jednolity');
//         });
//       }));
//   });
// });
