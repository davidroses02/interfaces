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
    // sin cierre explicito
    let contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        
        //contexto.fillStyle = '#FF0000';
        contexto.beginPath();
        contexto.moveTo(50,15);
        contexto.lineTo(112,15);
        contexto.lineTo(143,69);
        contexto.lineTo(112,123);
        contexto.lineTo(50,123);
        contexto.lineTo(19,69);

        contexto.fill();
    }
    // cierre explicito
    contexto = cargaContextoCanvas('micanvas2');
    if (contexto) {
        
        contexto.fillStyle = '#990000';
        contexto.beginPath();
        contexto.moveTo(50,15);
        contexto.lineTo(112,15);
        contexto.lineTo(143,69);
        contexto.lineTo(112,123);
        contexto.lineTo(50,123);
        contexto.lineTo(19,69);

        contexto.fill();
    }

    // sin relleno y con cierre explicito
    contexto = cargaContextoCanvas('micanvas3');
    if (contexto) {
        
        contexto.fillStyle = '#000099';
        contexto.beginPath();
        contexto.moveTo(50,15);
        contexto.lineTo(112,15);
        contexto.lineTo(143,69);
        contexto.lineTo(112,123);
        contexto.lineTo(50,123);
        contexto.lineTo(19,69);

        contexto.stroke();
    }

    // camino sin relleno y con cierre explicito
    contexto = cargaContextoCanvas('micanvas4');
    if (contexto) {
        
        contexto.fillStyle = '#800099';
        contexto.beginPath();
        contexto.moveTo(50,15);
        contexto.lineTo(112,15);
        contexto.lineTo(143,69);
        contexto.lineTo(112,123);
        contexto.lineTo(50,123);
        contexto.lineTo(19,69);
        contexto.closePath();
        contexto.stroke();
    }


}

