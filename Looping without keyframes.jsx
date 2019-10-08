//Cycle----------------------------------------

loopDuration = 2; //Loop duration in seconds
t = time-loopDuration*Math.floor(time/loopDuration);
ease(t,0,loopDuration,100,200)

//Pingpong----------------------------------------

loopDuration = 2; //Loop duration in seconds
start = 100;
end = 200;

cycle = Math.floor(time/loopDuration); //Cycle number

if(cycle%2 ==1){
	t = time-loopDuration*cycle;
}
else{
	t=loopDuration*(cycle+1)-time;
}
ease(t,0,loopDuration,start, end)

//Offset----------------------------------------

loopDuration = 2; //Loop duration
cycle = Math.floor(time/loopDuration);
start = 100;
end = 200;

if(time<loopDuration){
    linear(time,0,loopDuration,start,end);
}
else{
    lastVelocity = linear(loopDuration-0.01,0,loopDuration,start,end)-linear(loopDuration-0.02,0,loopDuration,start,end)
    end+(time-loopDuration)*100*lastVelocity
}

//Continue----------------------------------------

loopDuration = 2; //Loop duration
cycle = Math.floor(time/loopDuration);
start = 100;
end = 200;

if(time<loopDuration){
    linear(time,0,loopDuration,start,end);
}
else{
    lastVelocity = linear(loopDuration-0.01,0,loopDuration,start,end)-linear(loopDuration-0.02,0,loopDuration,start,end)
    end+(time-loopDuration)*100*lastVelocity
}
