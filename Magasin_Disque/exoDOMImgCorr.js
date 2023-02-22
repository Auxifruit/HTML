let valeur=0;

function deplacer(img) {
    var image=img;
    var element=document.createElement('li');
    var panier=document.getElementById('panier');
    var vitrine=document.getElementById('vitrine');
    var label = document.createElement('label');
    label=image.alt;
    
    if(image.parentElement.parentElement.id=='vitrine') {
        element.appendChild(image)
        panier.appendChild(element);
        valeur=valeur+7.5;
        document.getElementById('prix').innerHTML=valeur+" &#8364;";
        panier.appendChild(label);
    }
    else {
        element.appendChild(image)
        vitrine.appendChild(element);
        valeur=valeur-7.5;
        document.getElementById('prix').innerHTML=valeur+" &#8364;";
    }
    
}
