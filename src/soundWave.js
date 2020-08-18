function soundWaveFilter(soundWave, lowerLimit, upperLimit){
  let result = []
  if(soundWave < lowerLimit){
    soundWave.forEach(frequency => {
       frequency = lowerLimit
      result.push(frequency)
    });
  }else if(soundWave > upperLimit) {
    result.push(upperLimit)
   } else {
    soundWave.forEach(frequency => {
      result.push(frequency)
    })
  }
  return result
};