import { FormInputModule } from './form-input.module';

describe('FormInputModule', () => {
  let formInputModule: FormInputModule;

  beforeEach(() => {
    formInputModule = new FormInputModule();
  });

  it('should create an instance', () => {
    expect(formInputModule).toBeTruthy();
  });
});
