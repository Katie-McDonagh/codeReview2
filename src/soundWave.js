function soundWaveFilter(soundWave, lowerLimit, upperLimit){
  let result = []
  if(soundWave < lowerLimit){
    result.push(lowerLimit)
    return result
  } else if(soundWave > upperLimit) {
    result.push(upperLimit)
    return result
  } else {
  return soundWave
  }
};