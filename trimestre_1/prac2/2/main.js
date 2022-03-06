

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
    let contexto = cargaContextoCanvas('miCanvas');
    if (contexto) {
       let img = new Image();
       img.src = 'img.jpg';
       img.onload = function() {
           contexto.drawImage(img,0,0);
           contexto.drawImage(img,330,200,350,363,50,540,300,500); 
        }

    }
}