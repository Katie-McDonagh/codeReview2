function soundWaveFilter(soundWave, lowerLimit, upperLimit = 1000){
  if (soundWave === []){
    throw new Error("No soundWave provided");
  }
  let result = []
    soundWave.forEach(frequency => {
      if(frequency < lowerLimit){
      result.push(lowerLimit)
    }
    else if(frequency > upperLimit){
      result.push(upperLimit)
     } 
     else{
        result.push(frequency)
      }
   
  })
  return result;
}
