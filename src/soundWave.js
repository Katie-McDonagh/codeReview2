function soundWaveFilter(soundWave, lowerLimit, upperLimit){
  let result = []
  if(soundWave < lowerLimit){
    result.push(lowerLimit)
  }else if(soundWave > upperLimit) {
    result.push(upperLimit)
  } else {
    soundWave.forEach(myFunction);
    function myFunction(frequency){
      result.push(frequency)
    }
  }
  return result
};