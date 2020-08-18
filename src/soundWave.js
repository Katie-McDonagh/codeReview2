function soundWaveFilter(soundWave, lowerLimit, upperLimit){
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
