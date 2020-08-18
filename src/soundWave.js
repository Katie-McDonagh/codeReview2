function soundWaveFilter(soundWave, lowerLimit){
  let result = []
  if(soundWave < lowerLimit){
    result.push(lowerLimit)
    return result
  } else {
  return soundWave
  }
};