
<?php

//////////////////////////////////////////////////////////////////affichage nom des block////////////////////////////////////////
function nom_block1()
{
	$connexion=mysqli_connect("localhost","root","","thalassante");
	mysqli_set_charset($connexion,"utf8");
	$requette_nom = "SELECT block FROM lieu WHERE id = 1";
	$envoi_requette = mysqli_query($connexion,$requette_nom);
	$nom = mysqli_fetch_all($envoi_requette);
	echo $nom[0][0];
}

function nom_block2()
{
	$connexion=mysqli_connect("localhost","root","","thalassante");
	mysqli_set_charset($connexion,"utf8");
	$requette_nom = "SELECT block FROM lieu WHERE id = 2";
	$envoi_requette = mysqli_query($connexion,$requette_nom);
	$nom = mysqli_fetch_all($envoi_requette);
	echo $nom[0][0];
}

function nom_block3()
{
	$connexion=mysqli_connect("localhost","root","","thalassante");
	mysqli_set_charset($connexion,"utf8");
	$requette_nom = "SELECT block FROM lieu WHERE id = 3";
	$envoi_requette = mysqli_query($connexion,$requette_nom);
	$nom = mysqli_fetch_all($envoi_requette);
	echo $nom[0][0];
}

function nom_block4()
{
	$connexion=mysqli_connect("localhost","root","","thalassante");
	mysqli_set_charset($connexion,"utf8");
	$requette_nom = "SELECT block FROM lieu WHERE id = 4";
	$envoi_requette = mysqli_query($connexion,$requette_nom);
	$nom = mysqli_fetch_all($envoi_requette);
	echo $nom[0][0];
}

function nom_block5()
{
	$connexion=mysqli_connect("localhost","root","","thalassante");
	mysqli_set_charset($connexion,"utf8");
	$requette_nom = "SELECT block FROM lieu WHERE id = 5";
	$envoi_requette = mysqli_query($connexion,$requette_nom);
	$nom = mysqli_fetch_all($envoi_requette);
	echo $nom[0][0];
}

function nom_block6()
{
	$connexion=mysqli_connect("localhost","root","","thalassante");
	mysqli_set_charset($connexion,"utf8");
	$requette_nom = "SELECT block FROM lieu WHERE id = 6";
	$envoi_requette = mysqli_query($connexion,$requette_nom);
	$nom = mysqli_fetch_all($envoi_requette);
	echo $nom[0][0];
}

function nom_block7()
{
	$connexion=mysqli_connect("localhost","root","","thalassante");
	mysqli_set_charset($connexion,"utf8");
	$requette_nom = "SELECT block FROM lieu WHERE id = 7";
	$envoi_requette = mysqli_query($connexion,$requette_nom);
	$nom = mysqli_fetch_all($envoi_requette);
	echo $nom[0][0];
}

function nom_block8()
{
	$connexion=mysqli_connect("localhost","root","","thalassante");
	mysqli_set_charset($connexion,"utf8");
	$requette_nom = "SELECT block FROM lieu WHERE id = 8";
	$envoi_requette = mysqli_query($connexion,$requette_nom);
	$nom = mysqli_fetch_all($envoi_requette);
	echo $nom[0][0];
}

function nom_block9()
{
	$connexion=mysqli_connect("localhost","root","","thalassante");
	mysqli_set_charset($connexion,"utf8");
	$requette_nom = "SELECT block FROM lieu WHERE id = 9";
	$envoi_requette = mysqli_query($connexion,$requette_nom);
	$nom = mysqli_fetch_all($envoi_requette);
	echo $nom[0][0];
}

function nom_block10()
{
	$connexion=mysqli_connect("localhost","root","","thalassante");
	$requette_nom = "SELECT block FROM lieu WHERE id = 10";
	$envoi_requette = mysqli_query($connexion,$requette_nom);
	$nom = mysqli_fetch_all($envoi_requette);
	echo $nom[0][0];
}

function nom_block11()
{
	$connexion=mysqli_connect("localhost","root","","thalassante");
	mysqli_set_charset($connexion,"utf8");
	$requette_nom = "SELECT block FROM lieu WHERE id = 11";
	$envoi_requette = mysqli_query($connexion,$requette_nom);
	$nom = mysqli_fetch_all($envoi_requette);
	echo $nom[0][0];
}

function nom_block12()
{
	$connexion=mysqli_connect("localhost","root","","thalassante");
	mysqli_set_charset($connexion,"utf8");
	$requette_nom = "SELECT block FROM lieu WHERE id = 12";
	$envoi_requette = mysqli_query($connexion,$requette_nom);
	$nom = mysqli_fetch_all($envoi_requette);
	echo $nom[0][0];
}

function nom_block13()
{
	$connexion=mysqli_connect("localhost","root","","thalassante");
	mysqli_set_charset($connexion,"utf8");
	$requette_nom = "SELECT block FROM lieu WHERE id = 13";
	$envoi_requette = mysqli_query($connexion,$requette_nom);
	$nom = mysqli_fetch_all($envoi_requette);
	echo $nom[0][0];
}

function nom_block14()
{
	$connexion=mysqli_connect("localhost","root","","thalassante");
	mysqli_set_charset($connexion,"utf8");
	$requette_nom = "SELECT block FROM lieu WHERE id = 14";
	$envoi_requette = mysqli_query($connexion,$requette_nom);
	$nom = mysqli_fetch_all($envoi_requette);
	echo $nom[0][0];
}


/**
 * ///////:fonction pour les quatres bouttons///////////////
 */
class quatre_bouton_lieux
{
	/////////////////////////TOUS////////////////////////////
	public function tous()
	{
		$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
		$connexion->exec("set names utf8");
        $tous = $connexion->query("SELECT * FROM lieux WHERE nom = 'tous'");
        $tous->execute();
        $tous_les_bloc = $tous->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($tous_les_bloc);
        
	} 
	
    public function communs()
    {
    	$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
    	$connexion->exec("set names utf8");
        $tous = $connexion->query("SELECT * FROM lieux WHERE nom = 'communs'");
        $tous->execute();
        $tous_les_bloc = $tous->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($tous_les_bloc);
    }

    public function service()
    {
    	$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
    	$connexion->exec("set names utf8");
        $tous = $connexion->query("SELECT * FROM lieux WHERE nom = 'services'");
        $tous->execute();
        $tous_les_bloc = $tous->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($tous_les_bloc);
    }

    public function espace()
    {
    	$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
    	////////////////////////////////////////////////////////////////////////RAJOOUT:::::::::::::::::::::::::::::::::::::::
    	$connexion->exec("set names utf8");
        $tous = $connexion->query("SELECT * FROM lieux WHERE nom = 'espace'");
        $tous->execute();
        $tous_les_bloc = $tous->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($tous_les_bloc);
      
    }

}


    //   $tous = new quatre_bouton_lieux();
    // $tous -> espace();

// if (isset($_GET['#oc_boutton_user_block1]'))
//  {
// 	# code...
// }






?>