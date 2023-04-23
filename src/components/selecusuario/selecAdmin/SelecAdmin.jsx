import React from 'react';
import './selecAdmin.css';

function mostrarTabla() {
  var opcion = document.getElementById("opcion").value;

  if (opcion === "opcion1") {
    var url = "http://127.0.0.1:8000/apipersonal/list";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var tabla = "<table>";
        data.forEach(item => {
          tabla += "<tr><td>" + item.name + "</td><td>" + item.surname + "</td></tr>";
        });
        tabla += "</table>";
        document.getElementById("tabla").innerHTML = tabla;
      });
  } else if (opcion === "opcion2") {
    var url = "http://127.0.0.1:8000/apiworkshops/list";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var tabla = "<table>";
        data.forEach(item => {
          tabla += "<tr><td>" + item.name + "</td><td>" + item.description + "</td></tr>";
        });
        tabla += "</table>";
        document.getElementById("tabla").innerHTML = tabla;
      });
  } else if (opcion === "opcion3") {
    var url = "http://127.0.0.1:8000/apitasks/list";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var tabla = "<table>";
        data.forEach(item => {
          tabla += "<tr><td>" + item.id + "</td><td>" + item.name + "</td></tr>";
        });
        tabla += "</table>";
        document.getElementById("tabla").innerHTML = tabla;
      });
  }
}

function SelecAdmin() {
  React.useEffect(() => {
    document.getElementById("opcion").addEventListener("change", mostrarTabla);
  }, []);

  return (
    <div className="container-selec">
      <select id='opcion'>
        <option value="opcion1">Usuarios</option>
        <option value="opcion2">Talleres</option>
        <option value="opcion3">Tareas</option>
      </select>
      <div id="tabla"></div>
    </div>
  );
}

export default SelecAdmin;
