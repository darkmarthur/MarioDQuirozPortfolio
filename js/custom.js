/* =================================
   innerDiv
=================================== */
function ajaxget(archivo,nav){
var conexion;
var conexion2;
var direccion = archivo;
var navigator = nav;

var container=$("#content");
  container.fadeOut("fast");


if (window.XMLHttpRequest)
    {
        conexion = new XMLHttpRequest();
    }
else
    {
        conexion = new ActivexObject("Microsoft.XMLHTTP");
    }

conexion.onreadystatechange = function()
    {
        if (conexion.readyState == 4 && conexion.status == 200 )
        {
            document.getElementById("content").innerHTML = conexion.responseText;
        }
    }

conexion.open("GET",direccion,true);
conexion.send();

container.fadeIn("slow");


var container=$("#extraOptions");
  container.fadeOut("fast");

    if (window.XMLHttpRequest)
    {
        conexion2 = new XMLHttpRequest();
    }
else
    {
        conexion2 = new ActivexObject("Microsoft.XMLHTTP");
    }


conexion2.onreadystatechange = function()
    {
        if (conexion2.readyState == 4 && conexion2.status == 200 )
        {
                document.getElementById("extraOptions").innerHTML = conexion2.responseText;
        }
    }
conexion2.open("GET",navigator,true);
conexion2.send();

container.fadeIn("slow");


}
