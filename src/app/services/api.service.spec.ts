import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { defer } from 'rxjs';

describe('ApiService', () => {
  let service: ApiService;
  let httpClientSpy: { get: jasmine.Spy };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['getDbData']);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
});

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
