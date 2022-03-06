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
        contexto.fillStyle = "blue";
        contexto.arc(150,150,110,0,Math.PI*2,true); 
        contexto.fill();
        contexto.closePath();

        // ojo izq
        contexto.beginPath();
        contexto.fillStyle = "black";
        contexto.arc(185,100,20,0,Math.PI*2,true);
        contexto.fill();

        contexto.beginPath();
        contexto.fillStyle = "white";
        contexto.arc(185,100,8,0,Math.PI*2,true);
        contexto.fill();

        // ojo derecha

        contexto.beginPath();
        contexto.fillStyle = "black";
        contexto.arc(110,100,20,0,Math.PI*2,true);
        contexto.fill();

        contexto.beginPath();
        contexto.fillStyle = "white";
        contexto.arc(110,100,8,0,Math.PI*2,true);
        contexto.fill();

        // lunares 

        contexto.beginPath();
        contexto.fillStyle = "red";
        contexto.arc(200,200,8,0,Math.PI*2,true);
        contexto.fill();

        contexto.beginPath();
        contexto.fillStyle = "green";
        contexto.arc(120,190,10,0,Math.PI*2,true);
        contexto.fill();

        contexto.beginPath();
        contexto.fillStyle = "yellow";
        contexto.arc(90,150,10,0,Math.PI*2,true);
        contexto.fill();

        contexto.beginPath();
        contexto.fillStyle = "IndianRed";
        contexto.arc(220,150,10,0,Math.PI*2,true);
        contexto.fill();
        
        contexto.beginPath();
        contexto.fillStyle = "Gray";
        contexto.arc(165,170,10,0,Math.PI*2,true);
        contexto.fill();

        contexto.beginPath();
        contexto.fillStyle = "yellow";
        contexto.arc(90,150,10,0,Math.PI*2,true);
        contexto.fill();
        
    }

}

