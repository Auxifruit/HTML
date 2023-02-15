grille=[[-1,-1,-1], [-1,-1,-1], [-1,-1,-1]]
parseInt(joueur)=0;


function round(image,x,y) {
    joueur += 1;
    if (joueur==1) {
        image.src="circle.png";
    }
    else {
        image.src="cross.png";
    }
}