<?php
session_start();

if(!isset($_SESSION['user']))
{
      
    include("classe/class.php");
	
    $user = new user();

    if (isset($_POST['connexion'])) 
    {
        $user->connect($_POST['login'], $_POST['mdp']);
    }


?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/style-nav.css">
	<title>Connexion Admin</title>
</head>
<body>
<header></header>

<section class="container navbar-light" id="mh-form-co" style="background-color: #82b2e2;">
	<h2 class="text-center" style="color: white;">Connexion</h2>
       <form class="" method='POST'>
       	<div class="col my-4">
            <input class="form-control" type='text' placeholder="Login" name='login' required>
        </div></br>
        <div class="col my-4">
            <input class="form-control" type='password' placeholder="Mot de passe" name='mdp' required>
        </div></br>
        <div id="mh-bo-co">
            <button class="btn btn-success" type='submit' name='connexion'>Connexion</button>
        </div>
            <?php
                if(isset($_GET['erreur']))
                {
                    $err = $_GET['erreur'];
                    if($err==1 || $err==2)
                        echo "<p class='erreur'><b>*Utilisateur ou mot de passe incorrect*</b></p>";
                }
                        
                ?>
        </form>
</section>
</body>
</html>
<?php
}
else
{
    echo "déja connecter";
}
?>