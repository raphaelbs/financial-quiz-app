import { BasePipe } from './base-pipe.pipe';

describe('BasePipePipe', () => {
  it('create an instance', () => {
    const pipe = new BasePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform [true, true, false, true] in [true, true, true]', () => {
    const pipe = new BasePipe();
    expect(pipe).toBeTruthy();

    const piped: Array<Boolean> = pipe.transform(
      [true, true, false, true],
      i => i
    );
    expect(piped.length).toEqual(3);
  });
});
