function soundWaveFilter(soundWave, lowerLimit, upperLimit){
  let result = []
  if(soundWave < lowerLimit){
    soundWave.forEach(element => {
      result.push(lowerLimit)
    });
    result.push(lowerLimit)
  }else if(soundWave > upperLimit) {
    result.push(upperLimit)
  } else {
    soundWave.forEach(frequency => {
      result.push(frequency)
    })
  }
  return result
};