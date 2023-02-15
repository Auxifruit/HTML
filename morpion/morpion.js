/*Initialisation de la grille de jeu*/
grille=[[2,2,2], [2,2,2], [2,2,2]]

/*Initialisation du joueur*/
let joueur=0;

/*Initialisation de la condition d'arrêt*/
let stop=0;

function round(image,xray,yray) {
	/*On change de joueur*/
    joueur=(joueur+1)%2;
	
	/*On vérifie si la partie est finie ou pas*/
	if (stop == 0) {	/* Si non*/
		
		/*On affiche le tour du joueur 1 ou 2*/
		document.getElementById("tour").innerHTML = "Tour du joueur "+parseInt(joueur+1);
		
		/*On vérifie si la case est déjà jouée*/
		if (grille[xray][yray] == 2) {	/*Si non*/
		
			/*Si c'est au tour des cercles*/
			if (joueur==1) {
				/*On met le cercle*/
				image.src="circle.png";
				
				/*On change la valeur de la grille*/
				grille[xray][yray]=joueur;
				
				/*On vérifie si les cercles ont gagné*/
				stop = verifVainqueur(joueur);
			}
			
			/*Si c'est au tour des croix*/
			else {
				/*On met la croix*/
				image.src="cross.png";
				
				/*On change la valeur de la grille*/
				grille[xray][yray]=joueur;
				
				/*On vérifie si les cercles ont gagné*/
				stop = verifVainqueur(joueur);
			}
		}
		else {	/*Si oui*/
			alert("Case déjà jouée");
			/*On change de joueur*/
			joueur=(joueur+1)%2;
		}
	}
}

function verifVainqueur(joueur) {
	
	/*Vérification de la première ligne*/
	if(grille[0][0] == joueur && grille[0][1] == joueur && grille[0][2] == joueur) {
		return vainqueur(joueur);
	}
	/*Vérification de la deuxième ligne*/
	if(grille[1][0] == joueur && grille[1][1] == joueur && grille[1][2] == joueur) {
		return vainqueur(joueur);
	}
	/*Vérification de la troisième ligne*/
	if(grille[2][0] == joueur && grille[2][1] == joueur && grille[2][2] == joueur) {
		return vainqueur(joueur);
	}
	
	/*Vérification de la première colonne*/
	if(grille[0][0] == joueur && grille[1][0] == joueur && grille[2][0] == joueur) {
		return vainqueur(joueur);
	}
	/*Vérification de la deuxième colonne*/
	if(grille[0][1] == joueur && grille[1][1] == joueur && grille[2][1] == joueur) {
		return vainqueur(joueur);
	}
	/*Vérification de la troisième colonne*/
	if(grille[0][2] == joueur && grille[1][2] == joueur && grille[2][2] == joueur) {
		return vainqueur(joueur);
	}
	
	/*Vérification de la diagonale partant d'en haut à gauche*/
	if(grille[0][0] == joueur && grille[1][1] == joueur && grille[2][2] == joueur) {
		return vainqueur(joueur);
	}
	/*Vérification de la diagonale partant d'en haut à droite*/
	if(grille[0][2] == joueur && grille[1][1] == joueur && grille[2][0] == joueur) {
		return vainqueur(joueur);
	}
	
	/*Vérification du match nul*/
	if(grille[0][0] != 2 && grille[0][1] != 2 && grille[0][2] != 2 && grille[1][0] != 2 && grille[1][1] != 2 && grille[1][2] != 2 && grille[2][0] != 2 && grille[2][1] != 2 && grille[2][2] != 2) {
		return vainqueur(3);
	}
	return 0;
}

function vainqueur(joueur) {
	
	/*On vérifie quel joueur à gagné*/
	if(joueur == 1) {	/*Si les cercles ont gagné*/
		alert("Les cercles ont gagné !");
		
		/*On affiche le vainqueur sur la page*/
		document.getElementById("tour").innerHTML = "Les cercles ont gagné !"
		return 1;
	}
	else if(joueur == 0) {	/*Si les croix ont gagné*/
		alert("Les croix ont gagné !");
		
		/*On affiche le vainqueur sur la page*/
		document.getElementById("tour").innerHTML = "Les croix ont gagné !"
		return 1;
	}
	else {
		alert("Match nul !");
		
		/*On affiche le match nul sur la page sur la page*/
		document.getElementById("tour").innerHTML = "Match nul !"
		return 3;
	}
}
