<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
  <head>
    <title>Exemple de manipulation du DOM</title>
    <link rel="stylesheet" type="text/css" href="formeCorr.css" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <meta http-equiv="content-language" content="FR"/>
    <script type="text/javascript" src="exoDOMImgCorr.js"> </script>
  </head>
  <style>
    
  img{
    width:100px;
    height:100px;
    border:4px solid black;
  }

  hr{
    border:4px solid white;
  }
  ul{
    list-style:none;
  }

  </style>
 <body>

  <div id="titre">
  	<h1>Magasin de disques</h1>
  	Tous les disques &agrave; 7&#8364;50!!!<br/>
  	cliquez sur l'image pour (d&eacute;)s&eacute;lectionner un album<br/>
  	Montant du panier : <span id="prix"> 0</span>&#8364;
  </div>
  <br><br><br>
  <div id="source">
    <h3>Albums disponibles</h3>
    <hr>
    <br>
    <ul id="vitrine">  
    
    <li><img onclick="deplacer(this)" src="./img/punk.bmp" alt="punk"/></li>
    
    <li ><img onclick="deplacer(this)" src="./img/Ccc.gif" alt="Ccc"/></li>
    
    <li><img onclick="deplacer(this)" src="./img/cav.gif" alt="cav"/></li>		

    </ul> 
  </div>

  <div id="destination">
    <h3>Albums choisis</h3>
    <hr>
    <br>
    
    <ul id="panier">
              
    </ul>
  </div>

  <form action="magasin.php" method="POST" onsubmit="return acheter()" >
    <input type="hidden" name="items" id="items"> 
    <input type="submit" value="Acheter" style="margin-left:20px;margin-top: 100px;padding:10px">
  </form> 
    
 </body>
</html>
