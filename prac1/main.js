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

let i = 0;

window.onload = function () {
    
    let contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        
        //contexto.fillStyle = '#800099';
        coche(contexto,0);
        setInterval(coche,50, contexto);
        
    }   
    
}

function coche(contexto) {

    contexto.clearRect(0, 0, 800, 800);
    
    contexto.strokeRect(107+i, 65, 10, 10);
        contexto.strokeRect(43+i, 65, 10, 10);
        
        
        contexto.beginPath();
        
        contexto.moveTo(25+i,25);
        contexto.lineTo(100+i,25);
        
        contexto.moveTo(25+i,25);
        contexto.lineTo(20+i,45);
        
        contexto.moveTo(20+i,45);
        contexto.lineTo(5+i,45);
        
        contexto.moveTo(5+i,45);
        contexto.lineTo(5+i,70);
        
        contexto.moveTo(5+i,70);
        contexto.lineTo(35+i,70);
        
        contexto.moveTo(60+i,70);
        contexto.lineTo(100+i,70);
        
        contexto.moveTo(125+i,70);
        contexto.lineTo(160+i,70);
        
        contexto.moveTo(160+i,70);
        contexto.lineTo(165+i,60);
        
        contexto.moveTo(165+i,60);
        contexto.lineTo(165+i,50);
        
        contexto.moveTo(165+i,50);
        contexto.lineTo(115+i,40);
        
        contexto.moveTo(115+i,40);
        contexto.lineTo(93+i,40);
        
        contexto.moveTo(93+i,40);
        contexto.lineTo(100+i,25);
        
        contexto.fill();
        
        contexto.arc(48+i,70,12,0,Math.PI*2,true);
        contexto.stroke();
        contexto.beginPath();
        contexto.arc(112+i,70,12,0,Math.PI*2,true);
        contexto.stroke();

        i = i +10;
}


