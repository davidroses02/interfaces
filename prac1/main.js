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
       
       contexto.beginPath();
       contexto.lineTo(130,80);
       contexto.moveTo(120,129);
       contexto.bezierCurveTo(140,70,95,102,152,0);
       /**
         
        contexto.bezierCurveTo(90,125,100,150,100,150);
        contexto.bezierCurveTo(111,184.5,110,262,110,262);
        contexto.bezierCurveTo(143,274,175,262,175,262);
        contexto.bezierCurveTo(177,188,191,145,191,145);
        contexto.bezierCurveTo(191,145,199,121.5,194,102.5);
        contexto.lineTo(194,79);
        */
        contexto.stroke();
    }

}