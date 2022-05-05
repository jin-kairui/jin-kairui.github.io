let HP = 1.99;
let P = 2.99;
let RMT = 2.99;
let CR = 2.99;
let CN = 1.99;
let MB = 3.99;

function totalPrice() {
    var HPquantity = document.getElementById("inputHP").value * HP;
    var Pquantity = document.getElementById("inputP").value * P;
    var RMTquantity = document.getElementById("inputRMT").value * RMT;
    var CRquantity = document.getElementById("inputCR").value * CR;
    var CNquantity = document.getElementById("inputCN").value * CN;
    var MBquantity = document.getElementById("inputMB").value * MB;

    var total = +HPquantity + +Pquantity + +RMTquantity + +CRquantity + +CNquantity + +MBquantity;
    document.getElementById("finalPrice").innerHTML = total;
    
}
