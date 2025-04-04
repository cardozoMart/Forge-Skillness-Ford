/*Punto 1*/ 
var btncambio = document.getElementById("btncambio");

btncambio.addEventListener("click",function(){
    this.innerText = "Cerrar Sesion"
});
/*Punto 2*/

var agrdef = document.getElementById("agrdef");

agrdef.addEventListener("click", function(){
   this.style.display= "none"; 
});

/*Punto 3*/ 
var btnmg = document.getElementById('btnmg');

    btnmg.addEventListener("click",function(){
    alert("Gato Atigrado was liked");
     });

     var btnmg = document.getElementById('btnmg2');

     btnmg.addEventListener("click",function(){
     alert("Golden Retriever was liked");
      });
 