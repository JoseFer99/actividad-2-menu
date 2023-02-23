function abrirMenu(){
    document.getElementById("leftMenu").style.width = "150px";
}
function cerrarMenu(){
    document.getElementById("leftMenu").style.width = "0";
}
function redireccion(){
    location.href="index.html"
}
function Seguidor(){
           var Vs=parseFloat(document.getElementById("Vs").value)

           document.getElementById("Vo").value=1*Vs;
}
