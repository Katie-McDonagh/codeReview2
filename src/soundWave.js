function soundWaveFilter(soundWave, lowerLimit, upperLimit){
  let result = []
    soundWave.forEach(frequency => {
      if(frequency < lowerLimit){
       frequency = lowerLimit
      result.push(frequency)
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
