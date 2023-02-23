function abrirMenu(){
    document.getElementById("leftMenu").style.width = "150px";
}
function cerrarMenu(){
    document.getElementById("leftMenu").style.width = "0";
}
function redireccion(){
    location.href="index.html"
}
function Sumador_inversor(){
           var R1=parseFloat(document.getElementById("R1").value);
           var R2=parseFloat(document.getElementById("R2").value);
           var Vs1=parseFloat(document.getElementById("Vs1").value);
            var Rf=parseFloat(document.getElementById("Rf").value);
           var Vs2=parseFloat(document.getElementById("Vs2").value);

           document.getElementById("Vo").value=-Rf*((Vs1/R1)+(Vs2/R2));
}