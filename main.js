//programme en python

function decimal()
{
    var dec = document.getElementById("dec").value;
    var hex = dec.toString(16);
    var bin = dec.toString(2);
    document.getElementById("repBin").innerHTML  = "Votre nombre s'écrit " + bin + " en binaire";
    document.getElementById("repHex").innerHTML  = "Votre nombre s'écrit " + hex + " en héxadécimal";
    
}

function hexadecimal()
{
    var hex = document.getElementById("hex").value;
    var dec = parseInt(hex,16);
    var bin = parseInt(hex,16).toString(2);
    document.getElementById("repBin").innerHTML  = "Votre nombre s'écrit " + bin + " en binaire";
    document.getElementById("repDec").innerHTML  = "Votre nombre s'écrit " + dec + " en décimal";
}

function binaire()
{
    var bin = document.getElementById("bin").value;
    var dec = parseInt(binaire,2);
    var hex = parseInt(binaire,2).toString(16);
    document.getElementById("repDec").innerHTML  = "Votre nombre s'écrit " + dec + " en décimal";
    document.getElementById("repHex").innerHTML  = "Votre nombre s'écrit " + hex + " en héxadécimal";
}
