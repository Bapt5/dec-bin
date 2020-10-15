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
    var hex = hex.toString();
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    document.getElementById("repAscii").innerHTML  = str + " en ASCII";    
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
    var hex = hex.toString();
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    document.getElementById("repAscii").innerHTML  = str + " en ASCII";
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
    var hex = hex.toString();
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    document.getElementById("repAscii").innerHTML  = str + " en ASCII";
}

function ascii()
{
    var str=document.getElementById("ascii").value;
    var hex ="";
    for (var i = 0, l = str.length; i < l; i ++) {
        var code =Number(str.charCodeAt(i)).toString(16);
        hex+=code;
    }
    document.getElementById("repHex").innerHTML  = hex + " en héxadécimal";
    var dec = parseInt(hex,16);
    var bin = parseInt(hex,16).toString(2);
    document.getElementById("repBin").innerHTML  = bin + " en binaire";
    document.getElementById("repDec").innerHTML  = dec + " en décimal";
    document.getElementById("repAscii").innerHTML  = "";
}
