function cargaContextoCanvas(idCanvas){
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext){
        let contexto = elemento.getContext('2d');
        if (contexto){
            return contexto;
        }
    }
    return false;
}

window.onload = function (){
    let contexto = cargaContextoCanvas('micanvas');
    
    if (contexto){
        contexto.beginPath();
        contexto.stroke(); // muestra
        grad1 = contexto.createLinearGradient(50, 50, 140, 140);
        grad1.addColorStop(0.2, "blue"); 
        grad1.addColorStop(0.8, "yellow");
        grad1.addColorStop(1, "grey"); 
        contexto.fillStyle = grad1; 
        contexto.fillRect(50, 50, 180, 180); 
    }
}