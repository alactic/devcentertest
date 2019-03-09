import {TestBed, inject} from '@angular/core/testing';
import {ApiHandlerService} from './api-handler.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Post} from '../app/models/posts.model';

describe('APISERVICE ', () => {
  let service: ApiHandlerService;
  let httpMock: HttpTestingController;

  afterEach(() => {
    httpMock.verify();
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiHandlerService]
    });
    service = TestBed.get(ApiHandlerService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be retrieve request from API via GET', () => {
    const dummypost: Post[] = [
      {name: 'elvis', type: '23', id: 1, link: 'ekrkk ', title: 'song', share: 'gkky'},
      {name: 'elvis', type: '23', id: 1, link: 'ekrkk ', title: 'song', share: 'gkky'},
      {name: 'elvis', type: '23', id: 1, link: 'ekrkk ', title: 'song', share: 'gkky'},
      {name: 'elvis', type: '23', id: 1, link: 'ekrkk ', title: 'song', share: 'gkky'}
      ];
    service.get('https://deezerdevs-deezer.p.rapidapi.com/artist/13468').subscribe(posts => {
        expect(posts['length']).toBe(4);
    })
    const request = httpMock.expectOne(service.url);

    expect(request.request.method).toBe('GET');

    request.flush(dummypost);
  });
})
