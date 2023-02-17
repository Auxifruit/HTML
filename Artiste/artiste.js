function ajouter() {
    liste = document.getElementById('liste_artiste');
    art = document.getElementById('add').value;
    for (var i=0; i<liste.length; i++) {
        if (liste.options[i].value == art) {
            alert("Artiste déjà présent");
            return;
        }
    }
    document.getElementById('liste_artiste').appendChild(new Option(art));
}

function supprimer() {
    liste = document.getElementById('liste_artiste');
    art = document.getElementById('delete').value;
    for (var i=0; i<liste.length; i++) {
        if (liste.options[i].value == art) {
            liste.remove(i);
            return;
        }
    }
    alert("Artiste pas présent");
}