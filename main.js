// comprobamos que encontramos un elemento y podemos extraer su contexto
// con getContent() 

function cargaContextoCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }
    return false;
}

window.onload = function () {
    
    let contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        setInterval(cuadradosAleatorios, 500, contexto);
        //cuadradosAleatorios(contexto);
        //canva1.fillStyle = '#6634A2';
        //canva1.fillRect(10,10,100,100);

        //canva1.fillStyle = '#289AED';
        //canva1.fillRect(80,80,100,100);
        /**
         * 
         contexto.fillStyle = 'rgba(255,0,0,0.5)';
         for (index = 0; index <=500; index+=10) {
             contexto.fillRect(index,index,10,10);  
            }
            contexto.fillStyle = 'rgba(70%,50%,20%,0.5)';
            for (index = 500; index >= 0; index-=10) {
                contexto.fillRect(index,500-index,10,10);  
            }
            contexto.strokeStyle = 'rgba(100,255,46,0.9)';
            for (index = 0; index <=500; index+=10) {
                contexto.strokeRect(250,index,10,10);  
            }
            */
    
    }

}

function aleatorio(inferior, superior) {
    let numPosib = superior - inferior;
    let random = Math.random() * numPosib;
    random = Math.floor(random);
    return parseInt(inferior)+random;
}


function colorAleatorio() {
    return "rgb( " + aleatorio(0,255) + "," + aleatorio(0,255) + "," + aleatorio(0,255) + ")";
}

function cuadradosAleatorios(contexto) {
    for (let index = 0; index < 200; index+=10) {
        for (let j = 0; j <= 200; j+=10) {
            contexto.fillStyle = colorAleatorio();
            contexto.fillRect(index,j,10,10);
        }
        
    }
}