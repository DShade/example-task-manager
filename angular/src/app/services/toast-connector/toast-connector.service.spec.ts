import { TestBed, inject } from '@angular/core/testing';

import { ToastConnectorService } from './toast-connector.service';

describe('ToastConnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastConnectorService]
    });
  });

  it('should be created', inject([ToastConnectorService], (service: ToastConnectorService) => {
    expect(service).toBeTruthy();
  }));
});
