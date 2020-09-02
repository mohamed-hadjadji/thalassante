<?php

if (isset($_FILES['image']) && isset($_FILES['fiche'])) {
$path = 'uploads/'; // télécharger le répertoire
$pathf = 'uploads_f/';

$img = $path . basename($_FILES['image']['name']); //stocke le nom de fichier d'origine du client

$fich = $pathf . basename($_FILES['fiche']['name']);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($img,PATHINFO_EXTENSION));
$ficheFileType = strtolower(pathinfo($fich,PATHINFO_EXTENSION));

$check = getimagesize($_FILES["image"]["tmp_name"]);
$checkf = getimagesize($_FILES["fiche"]["tmp_name"]);
    if($check !== false && $checkf !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }

		if(!isset($_POST['incub']))
		{
		    $incub = null;
		}
		else
		{
		    $incub = $_POST['incub'];
		}
		if(!isset($_POST['mari']))
		{
		    $mari = null;
		}
		else
		{
		    $mari = $_POST['mari'];
		}
		if(!isset($_POST['social']))
		{
		    $social = null;
		}
		else
		{
		    $social = $_POST['social'];
		}
		if(!isset($_POST['territ']))
		{
		    $territ = null;
		}
		else
		{
		    $territ = $_POST['territ'];
		}
		if(!isset($_POST['enviro']))
		{
		    $enviro = null;
		}
		else
		{
		    $enviro = $_POST['enviro'];
		}
		if(!isset($_POST['sport']))
		{
		    $sport = null;
		}
		else
		{
		    $sport = $_POST['sport'];
		}
		if(!isset($_POST['art']))
		{
		    $art = null;
		}
		else
		{
		    $art = $_POST['art'];
		}
		if(!isset($_POST['pedago']))
		{
		    $pedago = null;
		}
		else
		{
		    $pedago = $_POST['pedago'];
		}
		if(!isset($_POST['const']))
		{
		    $const = null;
		}
		else
		{
		    $const = $_POST['const'];
		}
		if(!isset($_POST['cuisine']))
		{
		    $cuisine = null;
		}
		else
		{
		    $cuisine = $_POST['cuisine'];
		}
		if(!isset($_POST['reche']))
		{
		    $reche = null;
		}
		else
		{
		    $reche = $_POST['reche'];
		}


	$titre = $_POST['titre'];
	$titro = addslashes($titre);
	$description = $_POST['description'];
	$descripto = addslashes($description);
	$year = $_POST['annee'];
	// inclut le fichier de configuration de la base de données
	include_once 'bdd.php';
	// insérer des données de formulaire dans la base de données
	$insert = $db->query("INSERT activites (titre, description, image, affiche, date, incubation, maritime, social, territoire, environ, sport, art, pedago, construc, cuisine, recherche) VALUES ('".$titro."','".$descripto."','".$img."','".$fich."', '".$year."', '".$incub."', '".$mari."', '".$social."', '".$territ."', '".$enviro."', '".$sport."', '".$art."', '".$pedago."', '".$const."', '".$cuisine."', '".$reche."')");
	
	header("location:index.php");
}
?>