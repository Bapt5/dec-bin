function decimal(e)
{
    var touche = event.keyCode;
    if (touche==13){
        var dec = document.getElementById("dec").value;
        if (dec!=""){
            var hex = parseInt(dec-0).toString(16);
            var bin = parseInt(dec-0).toString(2);
            document.getElementById("bin").value  = bin;
            document.getElementById("hex").value  = hex;
            var hex = hex.toString();
            var str = '';
            for (var i = 0; i < hex.length; i += 2) {
                str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
            }
            document.getElementById("ascii").value  = str;
        }
    }
}

function hexadecimal(e)
{
    var touche = event.keyCode;
    if (touche==13){
        var hex = document.getElementById("hex").value;
        if (hex!=""){
            var dec = parseInt(hex,16);
            var bin = parseInt(hex,16).toString(2);
            document.getElementById("bin").value  = bin;
            document.getElementById("dec").value  = dec ;
            var hex = hex.toString();
            var str = '';
            for (var i = 0; i < hex.length; i += 2) {
                str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
            }
            document.getElementById("ascii").value  = str;
        }
    }
}

function binaire(e)
{
    var touche = event.keyCode;
    if (touche==13){
        var bin = document.getElementById("bin").value;
        if (bin!=""){
            var dec = parseInt(bin,2);
            var hex = parseInt(bin,2).toString(16);
            document.getElementById("dec").value  = dec;
            document.getElementById("hex").value  = hex;
            var hex = hex.toString();
            var str = '';
            for (var i = 0; i < hex.length; i += 2) {
                str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
            }
            document.getElementById("ascii").value  = str;
        }
    }
}

function ascii(e)
{
    var touche = event.keyCode;
    if (touche==13){
        var str=document.getElementById("ascii").value;
        if (str!=""){
            var hex ="";
            for (var i = 0, l = str.length; i < l; i ++) {
                var code =Number(str.charCodeAt(i)).toString(16);
                hex+=code;
            }
            document.getElementById("hex").value  = hex;
            var dec = parseInt(hex,16);
            var bin = parseInt(hex,16).toString(2);
            document.getElementById("bin").value  = bin;
            document.getElementById("dec").value  = dec;
        }
    }
}

function erase(){
    document.getElementById("dec").value  = "";
    document.getElementById("bin").value  = "";
    document.getElementById("hex").value  = "";
    document.getElementById("ascii").value  = "";
}

function touche(e)
{
    var touche = event.keyCode;
    if (touche==46){
        erase();
    }
}