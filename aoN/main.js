function abrirMenu(){
    document.getElementById("leftMenu").style.width = "150px";
}
function cerrarMenu(){
    document.getElementById("leftMenu").style.width = "0";
}
function redireccion(){
    location.href="index.html"
}
function No_inversor(){
           var R1=parseFloat(document.getElementById("R1").value);
           var R2=parseFloat(document.getElementById("R2").value);
           var Vs=parseFloat(document.getElementById("Vs").value)

           document.getElementById("Vo").value=((R2/R1)+1)*Vs;
}
