var son = +prompt("Iltimos Raqam Kiriting!!");
while (isNaN(son)||!son) {
    var son = +prompt("Bu Raqam Emaas, Iltimos Raqam Kiriting????");
}
son % 2 == 0 ? alert("Juft Raqam") : alert("Toq Raqam");

let moon = 1;
for (let i = 0; i < son; i++) {
    moon *= son;
}
alert('Siz Yozgan Raqam Darajasi   ' + moon)