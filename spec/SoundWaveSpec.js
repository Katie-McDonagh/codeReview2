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

  xit ("returns multiple soundwaves modified when the lower limit is breached twice", function (){
    expect(soundWaveFilter([9, 9], 10, 30)).toEqual ([10, 10])
  })
});