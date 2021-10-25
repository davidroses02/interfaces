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
        
        contexto.fillStyle = '#800099';
        contexto.strokeRect(107, 65, 10, 10);
        contexto.strokeRect(43, 65, 10, 10);
        
        
        //contexto.rotate(200,75);
        //moverRueda(contexto);

        contexto.beginPath();
        
        contexto.moveTo(25,25);
        contexto.lineTo(100,25);
        
        contexto.moveTo(25,25);
        contexto.lineTo(20,45);
        
        contexto.moveTo(20,45);
        contexto.lineTo(5,45);

        contexto.moveTo(5,45);
        contexto.lineTo(5,70);

        contexto.moveTo(5,70);
        contexto.lineTo(35,70);

        contexto.moveTo(60,70);
        contexto.lineTo(100,70);

        contexto.moveTo(125,70);
        contexto.lineTo(160,70);

        contexto.moveTo(160,70);
        contexto.lineTo(165,60);

        contexto.moveTo(165,60);
        contexto.lineTo(165,50);

        contexto.moveTo(165,50);
        contexto.lineTo(115,40);

        contexto.moveTo(115,40);
        contexto.lineTo(93,40);

        contexto.moveTo(93,40);
        contexto.lineTo(100,25);

        //contexto.moveTo(60,70);
        
        contexto.arc(48,70,12,0,Math.PI*2,true);
        //contexto.fill();
        contexto.stroke();
        contexto.beginPath();
        contexto.arc(112,70,12,0,Math.PI*2,true);
        //contexto.fill();
        contexto.stroke();

        contexto.closePath();
        contexto.stroke();
       
    }

    
}
