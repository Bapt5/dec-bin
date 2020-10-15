function decimal()
{
    var dec = document.getElementById("dec").value;
    var hex = parseInt(dec-0).toString(16);
    var bin = parseInt(dec-0).toString(2);
    document.getElementById("bin").value ="";
    document.getElementById("hex").value ="";
    document.getElementById("repBin").innerHTML  = bin + " en binaire";
    document.getElementById("repHex").innerHTML  = hex + " en héxadécimal";
    document.getElementById("repDec").innerHTML  = "";
    
}

function hexadecimal()
{
    var hex = document.getElementById("hex").value;
    var dec = parseInt(hex,16);
    var bin = parseInt(hex,16).toString(2);
    document.getElementById("bin").value ="";
    document.getElementById("dec").value ="";
    document.getElementById("repBin").innerHTML  = bin + " en binaire";
    document.getElementById("repDec").innerHTML  = dec + " en décimal";
    document.getElementById("repHex").innerHTML  = "";
}

function binaire()
{
    var bin = document.getElementById("bin").value;
    var dec = parseInt(bin,2);
    var hex = parseInt(bin,2).toString(16);
    document.getElementById("dec").value ="";
    document.getElementById("hex").value ="";
    document.getElementById("repDec").innerHTML  = dec + " en décimal";
    document.getElementById("repHex").innerHTML  = hex + " en héxadécimal";
    document.getElementById("repBin").innerHTML  = "";
}

function ascii()
{
    var str=document.getElementById("ascii").value;
    var hex ="";
    for (var i=0; l=str.lenght; i<l; i++;)
    {
        var code =Number(str.charCodeAt(i)).toString(16);
        hex+=code;
    }
    document.getElementById("repHex").innerHTML  = hex + " en héxadécimal";
    var dec = parseInt(hex,16);
    var bin = parseInt(hex,16).toString(2);
    document.getElementById("repBin").innerHTML  = bin + " en binaire";
    document.getElementById("repDec").innerHTML  = dec + " en décimal";
}
