import '../../src/script.js';

describe('just checking', function() {
  it('works for app', function() {
    expect(true).toEqual(true);
  });

  it('dont work for apps', function() {
    expect(true).toEqual(false);
  });

  it('func for sum', function () {
    expect(sum(5,2)).toEqual(7);
  })
});