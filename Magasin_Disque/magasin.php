<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
  <head>
    <title>Exemple de manipulation du DOM</title>
    <link rel="stylesheet" type="text/css" href="formeCorr.css" />
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <meta http-equiv="content-language" content="FR"/>
    <script type="text/javascript" src="exoDOMImgCorr.js"> </script>
    <style>
        hr {
            height: 5px;
            background-color: black;
        }
        h1 {
            text-align: center;
            border: solid 2px black;
            padding: 10px;
            background-color: lightblue;
        }
        #tot {
            padding: 10px;
            border: solid 2px black;
            background-color: lightblue;
        }
        table {
          border: solid 2px black;
        }
        tr,th,td {
            padding: 10px;
        }
        tr {
            background-color: lightblue;
        }
    </style>
  </head>
 <body>
    <h1>Facture</h1>
 <?php
    $panier=$_POST['items'];
    $albums=(explode(" ",$panier));
    echo "
    <table border='2px'>
    <tr>
        <th>ALBUM</th>
        <th>PRIX</th>
    </tr>";
    for($i=0; $i<sizeof($albums)-1; $i++) {
        echo "<tr>";
        echo "<td>".$albums[$i]."</td>";
        echo "<td>prix: 7€5</td>";
        echo "</tr>";
    }
    echo "</table>";
    echo "<br><hr><br>";
    $prix=7.5;
    echo "<span id='tot'>Facture total: ".$prix*$i."€</span>";
?>
 </body>
</html>
