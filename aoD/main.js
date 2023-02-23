function abrirMenu(){
    document.getElementById("leftMenu").style.width = "150px";
}
function cerrarMenu(){
    document.getElementById("leftMenu").style.width = "0";
}
function redireccion(){
    location.href="index.html"
}

function Diferencial(){
           var R1=parseFloat(document.getElementById("R1").value);
           var R2=parseFloat(document.getElementById("R2").value);
           var Vs1=parseFloat(document.getElementById("Vs1").value);
            var R3=parseFloat(document.getElementById("R3").value);
           var R4=parseFloat(document.getElementById("R4").value);
           var Vs2=parseFloat(document.getElementById("Vs2").value);

           document.getElementById("Vo").value=((R2/R1)*(Vs2-Vs1));
}
