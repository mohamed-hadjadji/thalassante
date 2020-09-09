<?php 
session_start();

if(isset($_GET['deconnexion']))
{ 
    if($_GET['deconnexion']==true)
    {  
        session_unset();
        header("location:index.php");
    }
}
// simulation de l'admin
//$_SESSION['user'] = false ;
?>
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<!--redoone des valeur par defaut au navigateur -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
		<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

		<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<!---------------------boot strap momo ------------------->
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

	<!-------------bootstrap css---------->
	<!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"> -->
	<!-------------bootstrap js--------------->
<!-- 	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script> --> 

   <!---------------JS-------------------->

	<!---------js olive-----------> 
	<script src="source/module.js/oc-fonction-lieu.js" type="text/javascript"></script>
	<script src="source/module.js/oc-fonction.js" type="text/javascript"></script>
	
	<!----------- police------------>
	<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
	 <!------------------------- LIENS CSS ----------------------->
		 
	 <link rel="stylesheet" type="text/css" href="css/adhesion.css">
	<link rel="stylesheet" type="text/css" href="css/oc-presentation.css">
	<link rel="stylesheet" type="text/css" media="screen and (min-width: 1000px)" href="css/lieu.css">
    <link rel="stylesheet" type="text/css" href="css/style-nav.css">

	<link rel="stylesheet" type="text/css" href="css/en_image.css">
	<link rel="stylesheet" type="text/css" href="css/nav.css">
	<link rel="stylesheet" media="screen and (max-width: 1000px)" href="css/nav-tel.css" type="text/css" />
	
	<link rel="stylesheet" media="screen and (max-width: 1000px)" href="css/lieu-tel.css" type="text/css" />

	<title>thalassanté</title>
</head>
<body class="oc-main-marseille">
		<?php
		if (isset($_SESSION['user']))
		{
			?>
			<div class="headto">
				 <div class="navbar navbar-light" style="background-color: #82b2e2;">
		        	<div class="nav">
			        	<h2 class="">Bienvenue Admin</h2>
			            <h3><a href="index.php?deconnexion=true">Déconnexion</a></h3>
			        </div>
		        </div>
	        </div>
			<?php
		}
		include("source/nav-tel.php");
		include('source/oc-fonction-php/oc-fonction-image.php');
		?>
	<main >

	<!----------------------------------PARTIE presentation------------------------------------------>
	<section id="oc-ancre-presentation-tel" >
<header>
		<article class="oc-article-image-presentation">
			<img class="oc-h1-titre-presentation" src="images/titre/Website_THALA_LOGO  THALASSANTÉ whitesmall.png">
		<!--<h1 >THALASSANTé</h1>-->
		<img id="oc-ancre-presentation" class="oc-img-grand-logo" src="images/background/181223_Logo Thala 01.png">
		</article>
</header>
		<!-------------------------------NAV------------>
		<?php 
		include("source/nav.php"); 
		?>
		<!-------------------article de presentation ------->
		<article class="oc-article-presentation">
			<p class="oc-p-presentation">Thalassanté est un tiers-lieu portuaire qui s'inscrit, complètement et transforme l'écosystème de son environement ; avec un impact sur le travail, le loisir, l'éducation, le transport et l'écologie...
		</br>
		   Thalassanté est une "boite à outils" à disposition de tous, "un jeu de lego" qui peut s'adapter à l'infini.
	       </p>
	       <p id="oc-para-presentation-cacher" class="oc-p-presentation">fkhjsdhfkjhsdkfjhsdkjhkfjsdhfkjhskjdhfksjhfkjshdksjhdkjfghjhskjhkhl</p>
	       <p id="oc-js-img-icone" class="oc-p-img-presentation">
	       	<img id="oc-logo-id-presentation"  class="oc-icone-presentation" src="images/icone/Website_THALA_Flèche Basse BLUE.png"  onclick="oc_change();"/>
	       </p>
		</article>
		<!-------------------------------------FIN DE PRESENTATION---------------------------->
		<!---------------------------NAV---------------->
		


		<!-- <section  class="claque"> -->
	<!--------------------------------------------------------------PARTIE DE LIEU---------------------------------------------------->
	   	<!--paragraphe du haut lieu -->
	   	<p id="oc-ancre-lieux" class="oc-lieu-parah">Sur un terrain de 700 m2 le parcabloc est composé de 28 conteneurs entre 20 et 40 pieds.<br>Leur disposition fabrique des espaces praticables, adaptables et modulables selon les projets</p>

	   	<h1 class="oc-h1-lieu">LIEU</h1>
	   		<!--------------------------------------CONDITION ADMIN------------------------------------->
	   	<?php include"source/formulaire/lieux.php" ?>
	            <?php buttton_modif_lieux(); ?>
	   	<article class="oc-article-lieux">
                     <!---------------------------------------- les quatre boutton den haut------------------------------------>
	   		<div class="oc-quatre-bouton">
	   			<button id="oc-lieu-tous"  class="oc-button-par-quatre">TOUS</button>
	   			<button id="oc_lieu_communs" class="oc-button-par-quatre">LES COMMUNS</button>
	   			<button id="oc_lieu_service" class="oc-button-par-quatre">SERVICES SPÉCIFIQUES</button>
	   			<button id="oc-lieu-libre" class="oc-button-par-quatre">ESPACE LIBRES</button>
	   		</div>
	   		 <!-------------------------------------------------------------------partie boutton block------------------------------------------->
<div class="oc-display-img-lieux">
	   		<div class="oc-div-liste-lieux">			
	   	<div class="oc-div-liste-butt" >	
						<!----------------------------------------BOUTON CONTENEUR----------------------------------->
	   		<button   id="oc_boutton_user_block1"  type="button"  class="oc-bouton-lieu-cont" class="color1" style="background-color: #00998D"> </button><p class="oc-p-nom-block"><?php nom_block1(); ?></p>
	   			</div>
	   			
	   			<!----------------------------------------BOUTON CONTENEUR----------------------------------->
	   			<div class="oc-div-liste-butt">
	   			<button id="oc_boutton_user_block2" class="oc-bouton-lieu-cont" style="background-color: #0DA092"></button><p class="oc-p-nom-block"><?php nom_block2(); ?></p>
	   		    </div>
	   		    <div class="oc-div-liste-butt">
	   			<button id="oc_boutton_user_block3" class="oc-bouton-lieu-cont" style="background-color: #21A595"></button><p class="oc-p-nom-block"><?php nom_block3(); ?></p>
	   		    </div>
	   		    <div class="oc-div-liste-butt">
	   			<button id="oc_boutton_user_block4" class="oc-bouton-lieu-cont" style="background-color: #33A897"></button><p class="oc-p-nom-block"><?php nom_block4(); ?></p>
	   			</div>
	   			<div class="oc-div-liste-butt">
	   			<button id="oc_boutton_user_block5" class="oc-bouton-lieu-cont" style="background-color: #44AD9B"></button><P class="oc-p-nom-block"><?php nom_block5(); ?></P>
	   			</div>
	   			<div class="oc-div-liste-butt">
	   			<button id="oc_boutton_user_block6" class="oc-bouton-lieu-cont" style="background-color: #52B2A0"></button><p class="oc-p-nom-block"><?php nom_block6(); ?></p>
	   		    </div>
	   		    <div class="oc-div-liste-butt">
	   			<button id="oc_boutton_user_block7" class="oc-bouton-lieu-cont" style="background-color: #5CB7A6"></button><p class="oc-p-nom-block"><?php nom_block7(); ?></p>
	   		    </div>
	   		    <div class="oc-div-liste-butt">
	   			<button id="oc_boutton_user_block8" class="oc-bouton-lieu-cont" style="background-color: #68BCAC"></button><p class="oc-p-nom-block"><?php nom_block8(); ?></p>
	   		    </div>
	   		    <div class="oc-div-liste-butt" >
	   			<button id="oc_boutton_user_block9" class="oc-bouton-lieu-cont" style="background-color: #76C1B3"></button><p class="oc-p-nom-block"><?php nom_block9(); ?></p>
	   			</div>
	   			<div class="oc-div-liste-butt">
	   			<button id="oc_boutton_user_block10" class="oc-bouton-lieu-cont" style="background-color: #85C6BA"></button><p class="oc-p-nom-block"><?php nom_block10(); ?></p>
	   		    </div>
	   		    <div class="oc-div-liste-butt">
	   			<button id="oc_boutton_user_block11" class="oc-bouton-lieu-cont" style="background-color: #92CCC1"></button><p class="oc-p-nom-block"><?php nom_block11(); ?></p>
	   		    </div>
	   		    <div class="oc-div-liste-butt">
	   			<button id="oc_boutton_user_block12" class="oc-bouton-lieu-cont" style="background-color: #A1D3C9"></button><p class="oc-p-nom-block"><?php nom_block12(); ?></p>
	   			</div> 
	   			<div class="oc-div-liste-butt">
	   			<button id="oc_boutton_user_block13" class="oc-bouton-lieu-cont" style="background-color:#B1DDD4"></button><P class="oc-p-nom-block"><?php nom_block13(); ?></P>
	   			</div>
	   			<div class="oc-div-liste-butt">
	   			<button id="oc_boutton_user_block14" class="oc-bouton-lieu-cont" style="background-color:#BFE2D9"></button><p class="oc-p-nom-block"><?php nom_block14(); ?></p>
	   			</div>
	   		</div>
	   		<!-------------------------------------------PLAN-------------------------->
	   		 <img id="oc-img-lieux-site-id" class="oc-img-lieux-site" src="images/lieux/plan/lieu_vide.png">
</div>

	   		   	   	</article>
	   		   	<!--  </section> -->
<!-----------------------------momo lieux---------------------------------------->
	   		   	   		   <div id="oc-info-lieu">
	   	
	   		   	   		   </div>
<!------------------------momo activité -------------------->
	   		   	   	<?php include "momo_activite.php" ?>

	   		   	   	<article id="oc-ancre-adhésion" class="oc-article-adhesion">
	   		   	   		<?php include("adhesion.php") ?>
	   		   	   	</article>

	   </section>
<?php include("footer.php") ; ?>
	</main>
</body>	
	


</html>
 