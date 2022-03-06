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
        
        let img = new Image();
        img.src='img.png';
        img.onload = function () {
            // imagen original
            contexto.drawImage(img,0,0);
            //imagen escalada
            contexto.drawImage(img,0,250,300,100);
            // imagen 2 recortada
            contexto.drawImage(img,0,0,400,239,0,360,100,239)
        }
    }
    
}

