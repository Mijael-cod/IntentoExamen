var titulo=document.getElementById("titulo")
var des=document.getElementById("descripcion")
var lis="";
var estado=0;
function agregar(){
 if(estado==0){
    var table=document.getElementById("table");
    var tbd=document.getElementById("tbd");
    var fila=document.createElement("tr");
    //celda del titulo
    var c_titulo=document.createElement("td");
    c_titulo.innerHTML=titulo.value
    //celda descripcion
    var c_des=document.createElement("td");
    c_des.innerHTML=des.value;
    //celda editar
    var celda_editar=document.createElement("td");
    celda_editar.innerHTML="<a href='#' class='icono' onclick='editar(this)'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></a>";
    //celda de accion eliminar
    var celda_eliminar=document.createElement("td");
    celda_eliminar.innerHTML="<a href='#' class='icono1' onclick='eliminar(this)'><i class='fa fa-trash' aria-hidden='true'></i></a>";
    fila.appendChild(c_titulo);
    fila.appendChild(c_des);
    fila.appendChild(celda_editar);
    fila.appendChild(celda_eliminar);
    tbd.appendChild(fila);
    table.appendChild(tbd);
    limpiar();
     }else{
        lis.cells[0].innerHTML=titulo.value;
        lis.cells[1].innerHTML=des.value;
        limpiar();
        fil="";
        estado=0;
     }

}

function limpiar(){
    titulo.value="";
    des.value="";
    titulo.focus;
}


function editar(row){
    lis=row.parentNode.parentNode;
    titulo.value=lis.cells[0].innerHTML;
    des.value=lis.cells[1].innerHTML;
    estado=1;
    
}
function eliminar(row){
    let f = row.parentNode.parentNode;
    f.parentNode.removeChild(f);
  }