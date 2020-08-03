var statistics = {
    democrats: 0,
    republicans: 0,
    independent: 0,
    promedioDem: 0,
    promedioRep: 0,
    promedioInd: 0,
}


var allMembers;
var miembrosMenosleales;
var miembrosMasleales;
var miembrosMenosAsistencia;
var miembrosMasAsistencia;

console.log(allMembers)

var dList = [];
var rList = [];
var iList = [];


function numMembers(allMembers) {



    for (var i = 0; i < allMembers.length; i++) {

        if (allMembers[i].party == "D") {
            dList.push(allMembers[i]);

        } else if (allMembers[i].party == "R") {
            rList.push(allMembers[i]);
        } else iList.push(allMembers[i])

    }
    console.log(dList)
    console.log(rList)
    console.log(iList)





    statistics.democrats = dList.length;
    statistics.republicans = rList.length;
    statistics.independent = iList.length;

    console.log(statistics.democrats)
    console.log(statistics.republicans)
    console.log(statistics.independent)

    console.log(typeof dList[0].votes_with_party_pct)
    console.log(dList[0].first_name + " " + dList[0].last_name)
    console.log(dList[0].votes_with_party_pct)

}





function promMembers() {


    var suma = 0
    var promedio = 0
    for (var i = 0; i < dList.length; i++) {
        suma += dList[i].votes_with_party_pct;
    }

    promedio = suma / dList.length;
    console.log(promedio.toFixed(2))
    statistics.promedioDem = promedio.toFixed(2);


    suma = 0
    promedio = 0
    for (var i = 0; i < rList.length; i++) {
        if (rList[i].hasOwnProperty('votes_with_party_pct')) {
            suma += rList[i].votes_with_party_pct;
        }
    }

    promedio = suma / rList.length;
    console.log(promedio.toFixed(2))
    statistics.promedioRep = promedio.toFixed(2);

    suma = 0
    promedio = 0
    for (var i = 0; i < iList.length; i++) {

        suma += iList[i].votes_with_party_pct;



    }
    if (suma > 0) {

        promedio = suma / iList.length;
    } else {

        promedio = 0
    }
    console.log(promedio.toFixed(2))
    statistics.promedioInd = promedio.toFixed(2);

}

function glanceTable() {

    document.getElementById("numberDem").innerHTML = stadistics.democrats;
    document.getElementById("numberRep").innerHTML =
        stadistics.republicans;
    document.getElementById("numberInd").innerHTML =
        stadistics.independent;

    document.getElementById("%votesDem").innerHTML = stadistics.promedioDem.toFixed(2);
    document.getElementById("%votesRep").innerHTML = stadistics.promedioRep.toFixed(2);
    document.getElementById("%votesInd").innerHTML = stadistics.promedioInd.toFixed(2);
}



function ordenar(a, b) {
    if (a.votes_with_party_pct < b.votes_with_party_pct) {
        return -1
    } //a va primero
    else if (a.votes_with_party_pct > b.votes_with_party_pct) {
        return 1
    } // b va primero
    else {
        return 0
    } // es igual, no se ordena
}

function menosLeales(allMembers) {

    allMembers.sort(ordenar);
    console.log(allMembers);


    var totalMenosleales = Math.ceil((allMembers.length * 10) / 100);
    miembrosMenosleales = allMembers.slice(0, totalMenosleales + 1)

    console.log(miembrosMenosleales)


    var valorRep = miembrosMenosleales[miembrosMenosleales.length - 1].votes_with_party_pct

    console.log(valorRep)


    for (var i = miembrosMenosleales; i < allMembers.length; i++) {
        if (allMembers[i].votes_with_party_pct == valorRep) {
            miembrosMenosleales.push(allMembers[i])
        }

    }

    console.log(miembrosMenosleales)
}

function masLeales(allMembers) {
    allMembers.reverse();
    console.log(allMembers)

    var totalMasleales = Math.ceil((allMembers.length * 10 / 100));
    miembrosMasleales = allMembers.slice(0, totalMasleales + 1)
    console.log(miembrosMasleales);

    var valorRep2 = miembrosMasleales[miembrosMasleales.length - 1].votes_with_party_pct

    console.log(valorRep2)

    for (var i = miembrosMasleales; i < allMembers.length; i++) {
        if (allMembers[i] == valorRep2) {
            miembrosMasleales.push(allMembers[i])
        }

    }
    console.log(miembrosMasleales)
}

//    for (var i = 0; i < miembrosMenosleales.length; i ++){
//        


function tablaMenosyMasLeales() {
    var crearTabla = "";
    for (var i = 0; i < miembrosMenosleales.length; i++) {

        crearTabla += "<tr><td>" + miembrosMenosleales[i].first_name + " " + miembrosMenosleales[i].last_name + "</td>";
        crearTabla += "<td>" + miembrosMenosleales[i].total_votes + "</td>";
        crearTabla += "<td>" + miembrosMenosleales[i].votes_with_party_pct + "</td></tr>"
    }
    if (document.getElementById("miembrosMenos") != null)
        document.getElementById("miembrosMenos").innerHTML = crearTabla;




    crearTabla = "";

    for (var i = 0; i < miembrosMasleales.length; i++) {
        crearTabla += "<tr><td>" + miembrosMasleales[i].first_name + " " + miembrosMasleales[i].last_name + "</td>";
        crearTabla += "<td>" + miembrosMasleales[i].total_votes + "</td>";
        crearTabla += "<td>" + miembrosMasleales[i].votes_with_party_pct + "</td></tr>"
    }
    if (document.getElementById("miembrosMas") != null)
        document.getElementById("miembrosMas").innerHTML = crearTabla;

    console.log(miembrosMasleales)
    console.log(miembrosMenosleales)

}


function ordenarMissedpct(a, b) {
    if (a.missed_votes_pct < b.missed_votes_pct) {
        return -1
    } //a va primero
    else if (a.missed_votes_pct > b.missed_votes_pct) {
        return 1
    } // b va primero
    else {
        return 0
    } // es igual, no se ordena
}

function menosAsistencia(allMembers) {

    allMembers.sort(ordenarMissedpct);
    console.log(allMembers);

    var totalMenosAsistencia = Math.ceil((allMembers.length * 10) / 100);
    miembrosMenosAsistencia = allMembers.slice(0, totalMenosAsistencia + 1)

    console.log(miembrosMenosAsistencia)


    var valorRepAsistencia = miembrosMenosAsistencia[miembrosMenosAsistencia.length - 1].missed_votes_pct

    console.log(valorRepAsistencia)


    for (var i = miembrosMenosAsistencia; i < allMembers.length; i++) {
        if (allMembers[i].missed_votes_pct == valorRepAsistencia) {
            miembrosMenosAsistencia.push(allMembers[i])
        }

    }

    console.log(miembrosMenosAsistencia)


}

function masAsistencia(allMembers) {

    allMembers.reverse();
    console.log(allMembers)

    var totalMasAsistencia = Math.ceil((allMembers.length * 10 / 100));
    miembrosMasAsistencia = allMembers.slice(0, totalMasAsistencia + 1)
    console.log(miembrosMasAsistencia);

    var valorRepAsistencia2 = miembrosMasAsistencia[miembrosMasAsistencia.length - 1].missed_votes_pct
    console.log(valorRepAsistencia2)

    for (var i = miembrosMasAsistencia; i < allMembers.length; i++) {
        if (allMembers[i] == valorRepAsistencia2) {
            miembrosMasAsistencia.push(allMembers[i])
        }

    }
    console.log(miembrosMasAsistencia)

}

function tablaMenosyMasAsistencia() {
    var clearTabla2 = "";
    for (var i = 0; i < miembrosMenosAsistencia.length - 1; i++) {

        clearTabla2 += "<tr><td>" + miembrosMenosAsistencia[i].first_name + " " + miembrosMenosAsistencia[i].last_name + "</td>";
        clearTabla2 += "<td>" + miembrosMenosAsistencia[i].missed_votes + "</td>";
        clearTabla2 += "<td>" + miembrosMenosAsistencia[i].missed_votes_pct + "</td></tr>"
    }
    if (document.getElementById("miembrosMenosAsistencia") != null)
        document.getElementById("miembrosMenosAsistencia").innerHTML = clearTabla2;

    crearTabla2 = "";

    for (var i = 0; i < miembrosMasAsistencia.length - 1; i++) {
        crearTabla2 += "<tr><td>" + miembrosMasAsistencia[i].first_name + " " + miembrosMasAsistencia[i].last_name + "</td>";
        crearTabla2 += "<td>" + miembrosMasAsistencia[i].missed_votes + "</td>";
        crearTabla2 += "<td>" + miembrosMasAsistencia[i].missed_votes_pct + "</td></tr>"
    }
    if (document.getElementById("miembrosMasAsistencia") != null)
        document.getElementById("miembrosMasAsistencia").innerHTML = crearTabla2;
}




var config = {
    headers: {
        "x-api-key": "IlgroWqvRq3lJAhOggrq28Rh64EKQ2ImHzDXwc03"
    }
}

var url;
if (document.getElementById('senate-data')) {
    url = "https://api.propublica.org/congress/v1/113/senate/members.json"
} else {
    url = "https://api.propublica.org/congress/v1/116/house/members.json"
}
fetch(url, config)
    .then(recibirResponse)
    .then(recibirJson);

function recibirResponse(response) {
    return response.json();
}

function recibirJson(myJson) {
    var data = myJson;

    //    allMembers = data.results[0].members
    //dibujarTablaInicio();

    app.allMembers = data.results[0].members
    numMembers(app.allMembers);
    promMembers(app.allMembers);
    menosLeales(app.allMembers);
    masLeales(app.allMembers);
    menosAsistencia(app.allMembers);
    masAsistencia(app.allMembers);

    app.statistics = statistics;
    app.miembrosMenosleales = miembrosMenosleales;
    app.miembrosMasleales = miembrosMasleales;
    app.miembrosMenosAsistencia = miembrosMenosAsistencia;
    app.miembrosMasAsistencia = miembrosMasAsistencia;



}




var app = new Vue({

    el: "#app",
    data: {
        allMembers: [],
        statistics: {},
        miembrosMenosleales: [],
        miembrosMasleales: [],
        miembrosMenosAsistencia: [],
        miembrosMasAsistencia: [],

    }



});

//
//numMembers();
//promMembers();
//glanceTable();
//menosLeales();
//masLeales();
//tablaMenosyMasLeales();
//menosAsistencia();
//masAsistencia();
//tablaMenosyMasAsistencia();
