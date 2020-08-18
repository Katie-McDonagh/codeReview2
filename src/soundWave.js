function soundWaveFilter(soundWave, lowerLimit, upperLimit){
  let result = []
  if(soundWave < lowerLimit){
    result.push(lowerLimit)
  }else if(soundWave > upperLimit) {
    result.push(upperLimit)
  } else {
  result.push(soundWave[0])
  }
  return result
};