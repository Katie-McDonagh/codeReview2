describe ("soundWaveFilter", function (){

  it ("returns a soundwave unchanged when the upper and lower limits are not reached", function (){
    expect(soundWaveFilter([20], 10, 30)).toEqual([20])
  });

  it ("returns a soundwave modified when the lower limit is breached", function (){
    expect(soundWaveFilter([9], 10, 30)).toEqual([10])
  })
})