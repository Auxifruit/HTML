var nbIMG = 0;
var albums=[];
function acheter(){items="";
      for (i=0;i<albums.length;i++)
          items+=albums[i]+" ";
      document.getElementById("items").value=items; 
      if (nbItems==0){
        return false;
      }
      else {
        return true;
      }
}

function deplacer(elementImg) {
	panier=document.getElementById("panier");
  vitrine=document.getElementById("vitrine");

  var fatherLI=elementImg.parentElement;
  var album=elementImg.alt;
  if(elementImg.closest("#vitrine")){
  
       panier.appendChild(fatherLI);
       var varspan = document.createElement('span');
       var text = document.createTextNode(" Album " +elementImg.alt + " ");
       varspan.appendChild(text);
       fatherLI.insertBefore(varspan, elementImg);
      nbIMG++;
      albums.push(elementImg.alt);
      
    }
  else{
	 
  //Q6: ajouter elementImg � elementSrc
 fatherLI.removeChild(elementImg.previousSibling);
   vitrine.appendChild(fatherLI);
   nbIMG--;
  albums=albums.filter(item=>item!=elementImg.alt)
  }
 document.getElementById('prix').innerHTML=nbIMG*7.5;
  
}
