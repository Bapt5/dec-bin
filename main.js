//programme en python

function decimal()
{
    var bin = 0;
    var restDiv = 0;
    var dec = document.getElementById("dec").value;
    while (dec!=0){
        resteDiv=dec%2;
        bin=resteDiv.toString()+bin;
        dec=Math.floor(dec/2);
    }
    document.getElementById("repBin").innerHTML  = bin;
    
}

function hexadecimal()
{
    var hex = document.getElementById("hex").value;
    alert (hex);
    d= decimal
    h= hexadecimal
    b= binaire
}

function binaire()
{
    var bin = document.getElementById("bin").value;
    alert (bin);
    d= decimal
    h= hexadecimal
    b= binaire
}
