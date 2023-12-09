import { TestBed, inject } from '@angular/core/testing';
import { GamesService } from './games.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

describe('GamesService', () => {
  const httpClientMock = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamesService,
      {
        provide: HttpClient,
        useValue: httpClientMock
      }]
    });
  });

  it('should be created', inject([GamesService], (service: GamesService) => {
    expect(service).toBeTruthy();
  }));

  it('should return list games camel case', inject([GamesService], (service: GamesService) => {
    const mocResult = {
      1:[
          {   
            looser_id: 1,
            looser_score: 1,
            winner_score: 1,
          }
      ]
    }
    httpClientMock.get.and.returnValue(of(mocResult));
    service.getGamesList().subscribe(data => {
      expect(data[0].looserId).toEqual(1);
    })
    expect(service).toBeTruthy();
  }));

  it('should return list participant camel case', inject([GamesService], (service: GamesService) => {
    const mocResult = {
      1: {   
        id: 1,
        ["First Name"]: "wanderson",
        ["Last Name"]: "oliveira",
        ["Banned"]: false
      }   
    }
    httpClientMock.get.and.returnValue(of(mocResult));
    service.getParticipantsList().subscribe(data => {
      expect(data[0].firstName).toEqual('wanderson');
    })
    expect(service).toBeTruthy();
  }));
});
