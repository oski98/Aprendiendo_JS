let bandera = true;

function changeText(){
    let parrafo = document.getElementById("titulo");    

    if(bandera)
    {
        parrafo.innerHTML = "Este texto se esta cambiando con una funcion on Click de JavaScript!";
        bandera = false;
    }        
    else{
        parrafo.innerHTML = "Haga click aqui nuevamente";
        bandera = true;
    }
        
}