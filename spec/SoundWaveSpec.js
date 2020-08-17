describe ("soundWaveFilter", function (){

  it ("returns a soundwave unchanged when the upper and lower limits are not reached", function (){
    expect(soundWaveFilter([20, 20, 20], 10, 30)).toEqual([20, 20, 20])
  });

})