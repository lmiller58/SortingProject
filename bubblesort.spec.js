beforeAll(function () {
  spyOn(bubbleSort, array).and.callThrough(); // replace existing `tootsiepop['lick']` method
});
it('getting to the center of tootsiepop involves exactly three licks', function () {
  tootsiepop.getToCenter();
  expect(tootsiepop.lick.calls.count()).toEqual(3);
});

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});
