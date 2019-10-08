try{
  timeStart = thisProperty.key(1).time; // beginning with the first keyframe
  duration = thisProperty.key(thisProperty.numKeys).time-timeStart; //duration of animation
  pingPong = true; //set to false if you don't need pingpong

  quant=Math.floor((time-timeStart)/duration); //here's the number of the cycle
  if(quant<0) quant = 0 //we don't need negative numbers here

  if(quant%2 == 1 && pingPong == true){ //if the cycle is odd and pingpong is true
    t = 2*timeStart+ (quant+1)*duration - time; //good to figure out for yourself what this means
  }
  else{ //pingpong is off and the cycle is odd
    t = time-quant*duration;
  }
}
catch(err){
  t = time;
}
thisProperty.valueAtTime(t)
