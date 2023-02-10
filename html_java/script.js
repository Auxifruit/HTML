function add(x,y) {
    return x+y;
}

function sub(x,y) {
    return x-y;
}

function mult(x,y) {
    return x*y;
}

function evaluer(x,y,op) {
    x=parseInt(x);
    y=parseInt(y);
    switch (op) {
        case '+': return add(x,y);
        case '-': return sub(x,y);
        case '*': return mult(x,y);
    }
}

function saisie() {
    n1=prompt("saisir n1");
    n2=prompt("saisir n2");
    op=prompt("saisir l'op");
    res=evaluer(n1,n2,op);
    document.getElementById("som").innerText=(n1+op+n2+" = "+res);
}

function table_multi() {
    n1=parseInt(prompt("sasir un chiffre entre 1 et 9"));
    while (n1 > 9 || n1 < 1) {
        console.log("chiffre non valide");
        n1=parseInt(prompt("sasir un chiffre entre 1 et 9"))
    }
    document.getElementById("table").innerText=("");
    for(i = 0; i < 11; i++) {
        document.getElementById("table").innerText+=(n1+"*"+i+" = "+mult(n1,i)+"\n");
    }
}

function chiffre() {
    const chiffre = [1, 2, 3];
    document.getElementById("chiffre").innerHTML = chiffre;
}