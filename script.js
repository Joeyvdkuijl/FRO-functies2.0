let gerechten = ["macaroni", "lasagne", "schotel", "soep", "Tomatensaus"];
showArray();
showCijp(0);
function showArray() {
    for (i=0; i< gerechten.length; i++) {
        document.write(`${gerechten[i]} <br/>`);
        console.log(gerechten[i]);
    }
}

function showCijp(num) {
        console.log(gerechten[num]);
        document.write(`${gerechten[0]}<br>`);
}

function rijp(){
    return gerechten[2];
}
let showt = rijp()
document.write(showt + "</br>");


function doorgaan(from, to) {
    for (var i = 0; i <gerechten.length; i++) {
        if (i=> from && i <= to) {
            document.write (gerechten[i] + "<br>")
        }
    }
}
doorgaan(4, 8)
