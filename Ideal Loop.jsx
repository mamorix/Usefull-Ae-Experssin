period = Math.floor(effect("pediod")("Slider"));
phaseShift = effect("phaseShift")("Slider");
amp = effect("amp")("Slider");

w=2*period*Math.PI/thisComp.duration;

value + amp*Math.sin(w*time+degreesToRadians(phaseShift))) //we have to use Radians to compute sin properly
