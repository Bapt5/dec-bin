//programme en python

function decimal()
{
    var dec = document.getElementById("dec").value;
    var bin = dec.toString(2);;
    var hex = dec.toString(16);;
    document.getElementById("repBin").innerHTML  = "Votre nombre s'écrit " + bin + " en binaire";
    document.getElementById("repHex").innerHTML  = "Votre nombre s'écrit " + hex + " en héxadécimal";
    
}

function hexadecimal()
{
    var hex = document.getElementById("hex").value;
    var bin = hex.toString(2);;
    var dec = hex.toString(10);;
    document.getElementById("repBin").innerHTML  = "Votre nombre s'écrit " + bin + " en binaire";
    document.getElementById("repDec").innerHTML  = "Votre nombre s'écrit " + dec + " en décimal";
}

function binaire()
{
    var bin = document.getElementById("bin").value;
    var dec = bin.toString(10);;
    var hex = bin.toString(16);;
    document.getElementById("repDec").innerHTML  = "Votre nombre s'écrit " + dec + " en décimal";
    document.getElementById("repHex").innerHTML  = "Votre nombre s'écrit " + hex + " en héxadécimal";
}
