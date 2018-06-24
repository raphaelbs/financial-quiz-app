import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { SummaryService } from './summary.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('SummaryService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: SummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SummaryService],
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = injector.get(SummaryService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#findSummary', () => {
    it('should return an Observable<IFormOutput>', () => {
      const dummy = {
        children: [],
        _id: '5b2fef11b631431ca0fd663b',
        question: 'FUNDOS DE INVESTIMENTO',
        answer: 'Opero pouco e não tenho familiaridade'
      };

      service.findSummary('5b2fef11b631431ca0fd663b').subscribe(d => {
        expect(d).toEqual(dummy);
      });

      service.findSummary(null).subscribe(d => {
        expect(d).toEqual(null);
      });

      const req = httpMock.expectOne(
        `${environment.api}/form-output/id/5b2fef11b631431ca0fd663b`
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummy);
    });
  });
});
