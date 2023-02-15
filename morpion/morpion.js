grille=[[-1,-1,-1], [-1,-1,-1], [-1,-1,-1]]
let joueur=0;


function round(image,x,y) {
    joueur=(joueur+1)%2;
    if (joueur==1) {
        image.src="circle.png";
    }
    else {
        image.src="cross.png";
    }
}
