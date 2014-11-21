function iniciar() {
  

function sleep(milliSeconds) {  
    // obten la hora actual
    var startTime = new Date().getTime();
    // atasca la cpu
    var count=0;
    while (new Date().getTime() < startTime + milliSeconds){

    	console.log("Esperando...."+ (count)+" iteraciones");
    	count++;
    }; 
  }

  sleep(10000);

console.log("Manipulador de petición 'iniciar' ha sido llamado.");


}

function subir() {
  console.log("Manipulador de petición 'subir' ha sido llamado.");
}

exports.iniciar = iniciar;
exports.subir = subir;