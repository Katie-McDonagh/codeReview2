describe ("soundWaveFilter", function (){

  it ("returns a single soundwave unchanged when the upper and lower limits are not reached", function (){
    expect(soundWaveFilter([20], 10, 30)).toEqual([20])
  })

  it ("returns a single soundwave modified when the lower limit is breached", function (){
    expect(soundWaveFilter([9], 10, 30)).toEqual([10])
  })

  it ("returns a single soundWave modified when the upper limit is reached", function (){
    expect(soundWaveFilter([31], 10, 30)).toEqual([30])
  })

  it ("returns multiple soundwaves unchanged when the upper and lower limits are not reached", function (){
    expect(soundWaveFilter([20, 20, 20, 20], 10, 30)).toEqual([20, 20, 20, 20])
  })

  it ("returns multiple soundwaves modified when the lower limit is breached twice", function (){
    expect(soundWaveFilter([9, 9], 10, 30)).toEqual ([10, 10])
  })

  it ("returns multiple soundwaves modified when the upper limit is breached multiple times", function (){
    expect(soundWaveFilter([31, 31, 38, 45], 10, 30)).toEqual ([30, 30, 30, 30])
  })

  it ("returns multiple soundwaves modified when only one has breached the lower limit", function (){
    expect(soundWaveFilter([20, 9], 10, 30)).toEqual([20, 10])
  })

  it ("returns multiple soundwaves when only one has breached the upper limit", function () {
    expect(soundWaveFilter([20, 31], 10, 30)).toEqual([20, 30])
  })

  it ("returns multiple soundwaves when they breach upper and lower limits", function (){
    expect(soundWaveFilter([9, 20, 31], 10, 30)).toEqual([10, 20, 30])
  })

  xit('should throw an error if the soundWave is empty', function(){
    expect(function() { soundWaveFilter([], 10, 30); }).toThrow("No soundWave provided");
});

  it("should provide a default upperLimit of 10000 if none is provided", function (){
    expect(soundWaveFilter([20000], 30)).toEqual([10000])
  })

  });