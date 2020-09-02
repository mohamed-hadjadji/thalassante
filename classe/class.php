<?php
class user
{
    private $id;
    public $login;
    private $mdp;

    public function connect($login,$mdp)
   {
     $connexion =  mysqli_connect("localhost","root","","thalassante");

     if(isset($_POST['login']) && isset($_POST['mdp']))
        {
             
            $login = mysqli_real_escape_string($connexion,htmlspecialchars($_POST['login']));
            $mdp = mysqli_real_escape_string($connexion,htmlspecialchars($_POST['mdp']));

            if($login !== "" && $password !== "")
            {
                $requete = "SELECT count(*) FROM utilisateurs where
                user = '".$login."' ";
                $exec_requete = mysqli_query($connexion,$requete);
                $reponse      = mysqli_fetch_array($exec_requete);
                $count = $reponse['count(*)'];

                $requete4 = "SELECT * FROM utilisateurs WHERE user='".$login."'";
                $exec_requete4 = mysqli_query($connexion,$requete4);
                $reponse4 = mysqli_fetch_array($exec_requete4);

                if( $count!=0 && $_SESSION['user'] !== "" && password_verify($mdp, $reponse4[2]) )
                {
            
                $_SESSION['user'] = $_POST['login'];
                $_SESSION['id'] = $reponse4[0];
               
                header('Location: index.php');
                }
                else
                {
                header('Location: admin.php?erreur=1'); // utilisateur ou mot de passe incorrect
                }
            }
        }
            
    }

}

class activite
{  
    public function add_activite()
    {
        
        $path = 'uploads/'; // télécharger le répertoire
        $pathf = 'uploads_f/';
        
        $img = $path . basename($_FILES["image"]["name"]); //stocke le nom de fichier d'origine du client

        $fich = $pathf . basename($_FILES["fiche"]["name"]);
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

	
	public function get_activite()
	{
		$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
        $connexion->exec("set names utf8");
        $reponseget = $connexion->query("SELECT * FROM activites");
        $reponseget->execute();
        $resultat = $reponseget->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resultat);
	} 

	 public function del_activite($idact)
    {
        $connexion = new PDO('mysql:host=localhost;dbname=thalassante', 'root', '');
        $connexion->exec("set names utf8");
        $repensesup = $connexion->query("DELETE FROM activites WHERE id = '$idact'");
        $repensesup->execute();
    }
    public function get_incub()
    {
    	$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
        $connexion->exec("set names utf8");
        $reponseinc = $connexion->query("SELECT * FROM activites WHERE incubation = '#AA3614'");
        $reponseinc->execute();
        $resulinc = $reponseinc->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resulinc);
    } 
    public function get_marit()
    {
    	$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
        $connexion->exec("set names utf8");
        $reponsemar = $connexion->query("SELECT * FROM activites WHERE maritime = '#D35315'");
        $reponsemar->execute();
        $resulmar = $reponsemar->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resulmar);
    }
    public function get_socia()
    {
    	$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
        $connexion->exec("set names utf8");
        $reponsesoc = $connexion->query("SELECT * FROM activites WHERE social = '#EE7810'");
        $reponsesoc->execute();
        $resulsoc = $reponsesoc->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resulsoc);
    } 

    public function get_territ()
    {
    	$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
        $connexion->exec("set names utf8");
        $reponseter = $connexion->query("SELECT * FROM activites WHERE territoire = '#6E473C'");
        $reponseter->execute();
        $resulter = $reponseter->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resulter);
    } 

    public function get_enviro()
    {
    	$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
        $connexion->exec("set names utf8");
        $reponsenv = $connexion->query("SELECT * FROM activites WHERE 	environ = '#E8521F'");
        $reponsenv->execute();
        $resulenv = $reponsenv->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resulenv);
    }

    public function get_sport()
    {
    	$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
        $connexion->exec("set names utf8");
        $reponsespo = $connexion->query("SELECT * FROM activites WHERE 	sport = '#E30E20'");
        $reponsespo->execute();
        $resulspo = $reponsespo->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resulspo);
    }
    public function get_art()
    {
    	$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
        $connexion->exec("set names utf8");
        $reponseart = $connexion->query("SELECT * FROM activites WHERE 	art = '#F08574'");
        $reponseart->execute();
        $resulart = $reponseart->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resulart);
    }

    public function get_pedag()
    {
    	$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
        $connexion->exec("set names utf8");
        $reponseped = $connexion->query("SELECT * FROM activites WHERE 	pedago = '#E40C50'");
        $reponseped->execute();
        $resulped = $reponseped->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resulped);
    }

    public function get_const()
    {
    	$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
        $connexion->exec("set names utf8");
        $reponsecon = $connexion->query("SELECT * FROM activites WHERE 	construc = '#B2004B'");
        $reponsecon->execute();
        $resulcon = $reponsecon->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resulcon);
    }

    public function get_cuisin()
    {
    	$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
        $connexion->exec("set names utf8");
        $reponsecui = $connexion->query("SELECT * FROM activites WHERE 	cuisine = '#D5328A'");
        $reponsecui->execute();
        $resulcui = $reponsecui->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resulcui);
    }

    public function get_recher()
    {
    	$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
        $connexion->exec("set names utf8");
        $reponserec = $connexion->query("SELECT * FROM activites WHERE 	recherche = '#C795C3'");
        $reponserec->execute();
        $resulrec = $reponserec->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resulrec);
    }

    public function get_year($year)
    {
    	$connexion = new PDO("mysql:host=localhost;dbname=thalassante", "root", "");
        $connexion->exec("set names utf8");
        $reponsey = $connexion->query("SELECT * FROM activites WHERE 	date = '$year'");
        $reponsey->execute();
        $resuly = $reponsey->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resuly);
    }

}

?>