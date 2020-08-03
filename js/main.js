var allMembers;

function dibujarTablaInicio() {
    var crearTabla = "";
    for (var i = 0; i < allMembers.length; i++) {

        crearTabla += "<tr><td><a href=" + allMembers[i].url + ">" + allMembers[i].first_name + " " + (allMembers[i].middle_name || " ") + " " + allMembers[i].last_name + "</a></td>"
        crearTabla += "<td>" + allMembers[i].party + "</td>"
        crearTabla += "<td>" + allMembers[i].state + "</td>"
        crearTabla += "<td>" + allMembers[i].seniority + "</td>"
        crearTabla += "<td>" + allMembers[i].votes_with_party_pct + "%" + "</td>"

    }

    if (document.getElementById("house-data") != null)
        document.getElementById("house-data").innerHTML = crearTabla;
    else
        document.getElementById("senate-data").innerHTML = crearTabla;
}
//El ejercicio pedía crear una tabla con todos los senadores, específicamente con 5 columnas (rows). Para poder hacer la tabla tuve que hacer un html debido a que allí es donde las etiquetas funcionan, para luego enlazar dicho html con el javascript.
//El primer paso fue identificar el objeto "members" dentro del arreglo "data" y logré llegar a través de dicho procedimiento: data.results[0].members y lo guardé en una variable "allMembers". Sabiendo que al ser tantos senadores es necesario un bucle ó loop para que recorra de acuerdo a su longitud (lenght) y eso lo hacemos con el ciclo FOR = for (var i = 0 ; i < allMembers.length; i++ ).
// Otro paso fue crear una variable "crearTabla" con los símbolos += (concatenandola al procedimiento que haremos) con strings vacíos, para luego darle el valor de mis datos dentro del ciclo FOR. Separamos las etiquetas con "" debido a que son elementos extraños a javascript y los concatenamos con el signo + a el contenido.


//Filtrar mienbros por party y state
function filtrarParty() {

    //Filtrar miembros por party
    var checkParty = Array.from(document.querySelectorAll('input[name=party]:checked')).map(elt => elt.value);


    var checkState = document.getElementById("state").value;


    var miembrosFiltrados = [];
    for (var i = 0; i < allMembers.length; i++) {

        if ((checkParty.indexOf(allMembers[i].party) != -1) && (allMembers[i].state == checkState || checkState == "All")) {

            miembrosFiltrados.push(allMembers[i]);
        }

    }
    
    app.senators = miembrosFiltrados;
/*
    var crearTabla = "";
    for (var i = 0; i < miembrosFiltrados.length; i++) {

        crearTabla += "<tr><td><a href=" + miembrosFiltrados[i].url + ">" + miembrosFiltrados[i].first_name + " " + (miembrosFiltrados[i].middle_name || " ") + " " + miembrosFiltrados[i].last_name + "</a></td>"
        crearTabla += "<td>" + miembrosFiltrados[i].party + "</td>"
        crearTabla += "<td>" + miembrosFiltrados[i].state + "</td>"
        crearTabla += "<td>" + miembrosFiltrados[i].seniority + "</td>"
        crearTabla += "<td>" + miembrosFiltrados[i].votes_with_party_pct + "%" + "</td>"

    }

    if (document.getElementById("house-data") != null)
        document.getElementById("house-data").innerHTML = crearTabla;
    else
        document.getElementById("senate-data").innerHTML = crearTabla; */
}

var config = {
    headers: {
        "x-api-key": "IlgroWqvRq3lJAhOggrq28Rh64EKQ2ImHzDXwc03"
    }
}

var url;
if(document.getElementById('senate-data')) {
    url= "https://api.propublica.org/congress/v1/113/senate/members.json"
} else {
    url= "https://api.propublica.org/congress/v1/116/house/members.json"
}

fetch(url, config)
    .then(recibirResponse)
    .then(recibirJson);

function recibirResponse(response) {
    return response.json();
}

function recibirJson(myJson) {
    var data = myJson;
    

    allMembers = data.results[0].members
    //dibujarTablaInicio();
    
    app.senators = data.results[0].members
    console.log(app.senators)
    
}


var app = new Vue({  
  el: '#app',  
  data: {
    senators: []
  }
}); 








