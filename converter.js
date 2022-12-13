const hbar = 1.054571817E-34;
const AA2m = 1.0E-10;
const bohr2m = 5.292E-11;
const Ry2J = 2.179872E-18;
const Eh2J = 4.3597447222071E-18;
const eV2J = 1.602176634E-19;
const me2kg = 9.1093837015E-31;
const da2kg = 1.66053906660E-27;
const pi = 3.14159265359;
const kB = 1.380649E-23;

function fix(x){
    y = x;
    x = Math.abs(x);
    x = Math.log10(x);
    x = Math.abs(x);
    if (x < 2) {
       y = y.toFixed(3);
    } else {
       y = y.toExponential(3);
    }
    return y;
}

function length(x,y){
    y = parseFloat(y);
    var y_meter = document.getElementById("meter");
    var y_bohr = document.getElementById("bohr");
    var y_angstrom = document.getElementById("angstrom");
    if (x=="meter"){
        y_bohr.value = fix(y * 1.0/bohr2m);
        y_angstrom.value = fix(y * 1.0/AA2m);
    }
    if (x=="bohr"){
        y_meter.value = fix(y * bohr2m);
        y_angstrom.value = fix(y * bohr2m / AA2m);
    }
    if (x=="angstrom"){
        y_meter.value = fix(y * AA2m);
        y_bohr.value = fix(y * AA2m / bohr2m);
    }
}

function mass(x,y){
    y = parseFloat(y);
    var y_kg = document.getElementById("kg");
    var y_me = document.getElementById("me");
    var y_dalton = document.getElementById("dalton");
    if (x=="kg"){
        y_me.value = fix(y / me2kg);
        y_dalton.value = fix(y / da2kg);
    }
    if (x=="me"){
        y_kg.value = fix(y * me2kg);
        y_dalton.value = fix(y * me2kg / da2kg);
    }
    if (x=="dalton"){
        y_kg.value = fix(y * da2kg);
        y_me.value = fix(y * da2kg / me2kg);
    }
}

function energy(x,y){
    y = parseFloat(y);
    var y_J = document.getElementById("J");
    var y_Eh = document.getElementById("Eh");
    var y_eV = document.getElementById("eV");
    var y_Ry = document.getElementById("Ry");
    if (x=="J"){
        y_Eh.value = fix(y / Eh2J);
        y_eV.value = fix(y / eV2J);
        y_Ry.value = fix(y / Ry2J);
    }
    if (x=="Eh"){
        y_J.value = fix(y * Eh2J);
        y_eV.value = fix(y * Eh2J / eV2J);
        y_Ry.value = fix(y * Eh2J / Ry2J);
    }
    if (x=="eV"){
        y_J.value = fix(y * eV2J);
        y_Eh.value = fix(y * eV2J / Eh2J);
        y_Ry.value = fix(y * eV2J / Ry2J);
    }
    if (x=="Ry"){
        y_J.value = fix(y * Ry2J);
        y_Eh.value = fix(y * Ry2J / Eh2J);
        y_eV.value = fix(y * Ry2J / eV2J);
    }
}

function time(x,y){
    y = parseFloat(y);
    var y_s = document.getElementById("s");
    var y_at = document.getElementById("at");
    if (x=="s"){
        y_at.value = fix(y / hbar * Eh2J);
    }
    if (x=="at"){
        y_s.value = fix(y / Eh2J * hbar);
    }
}

function temperture(x,y){
    y = parseFloat(y);
    var y_K = document.getElementById("K");
    var y_kT = document.getElementById("kT");
    if (x=="K"){
        y_kT.value = fix(y * kB / Eh2J);
    }
    if (x=="kT"){
        y_K.value = fix(y * Eh2J / kB);
    }
}

function wn(x,y){
    y = parseFloat(y);
    var y_kayser = document.getElementById("kayser");
    var y_meV = document.getElementById("meV");
    if (x=="kayser"){
        y_meV.value = fix(y * 1.986E-23 / eV2J * 1.0E+3);
    }
    if (x=="meV"){
        y_kayser.value = fix(y * 1.0E-3 * eV2J / 1.986E-23);
    }
}
