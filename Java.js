// funcion que muestra el menu responsive

function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//funcion para aplicar estilo a la opcion seleccionada del menu y quita la previamente seleccionada

function seleccionar(link){
    var opciones = document.querySelector('#links a');
    opciones=[0].className="";
    opciones=[1].className="";
    opciones=[2].className="";
    opciones=[3].className="";
    opciones=[4].className="";

    //desaparece el menu una vez seleccionada una opcion

    var x = document.getElementById("nav");
    x.className = "";

}