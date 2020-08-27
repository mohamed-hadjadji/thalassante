<?php 
session_start();
// simulation de l'admin
$_SESSION['user'] = true ;
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-------------bootstrap css---------->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	<!-------------bootstrap js--------------->
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
	<!---------------JS-------------------->
	
	<script src="source/module.js/oc-fonction.js" type="text/javascript"></script>
	<!----------- police------------>

	<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
	 <!------------------------- LIENS CSS ----------------------->
	<link rel="stylesheet" type="text/css" href="css/oc-presentation.css">
	<link rel="stylesheet" type="text/css" href="css/en_image.css">
	<link rel="stylesheet" media="screen and (min-width: 1000px)" type="text/css" href="css/nav.css">
	<link rel="stylesheet" media="screen and (max-width: 1000px)" href="css/nav-tel.css" type="text/css" />

	<title>thalassanté</title>
</head>
<body class="oc-main-marseille">
	<main >
		<?php
		include('source/oc-fonction-php/oc-fonction-image.php');
		?>

	<!----------------------------------PARTIE presentation------------------------------------------>
	<section >
<header>
		<article class="oc-article-image-presentation">
			<img class="oc-h1-titre-presentation" src="images/titre/Website_THALA_LOGO  THALASSANTÉ whitesmall.png">
		<!--<h1 >THALASSANTé</h1>-->
		<img id="oc-ancre-presentation" class="oc-img-grand-logo" src="images/background/181223_Logo Thala 01.png">
		</article>
</header>
		<!-------------------------------NAV----------------------NAV------------------------------>
		<?php 
		include("source/nav.php");
		include("source/nav-tel.php");
		 ?>
		<!-------------------article de presentation ------->
		<article class="oc-article-presentation">
			<p class="oc-p-presentation">Thalassanté est un tiers-lieu portuaire qui s'inscrit, complètement et transforme l'écosystème de son environement ; avec un impact sur le travail, le loisir, l'éducation, le transport et l'écologie...
		</br>
		   Thalassanté est une "boite à outils" à disposition de tous, "un jeu de lego" qui peut s'adapter à l'infini.
	       </p>
	       <p id="oc-para-presentation-cacher" class="oc-p-presentation">fkhjsdhfkjhsdkfjhsdkjhkfjsdhfkjhskjdhfksjhfkjshdksjhdkjfghjhskjhkhl</p>
	       <p id="oc-js-img-icone" class="oc-p-img-presentation">
	       	<img id="oc-logo-id-presentation"  class="oc-icone-presentation" src="images/icone/Website_THALA_Flèche Basse BLUE.png"  onclick="change();"/>
	       </p>
		</article>
		<!-------------------------------------FIN DE PRESENTATION---------------------------->
		<!---------------------------NAV---------------->
		</section>
		
		<section>
            <!-- ----------------------------CAROUSSEL BOOTSTRAP fonction oc-fonction-image.php--------------------------- -->
			<article class="test">
				<div id="carouselExampleSlidesOnly" class="carousel slide " data-ride="carousel">
					<div class="oc-taille-caroussele  carousel-inner">
						<div class="carousel-item active">
							<img id="en_image1" src="<?php en_image1(); ?>" class="d-block w-100" alt="...">
						</div> 

						<div class="carousel-item ">
							<img id="en_image2" src="<?php en_image2(); ?>" class="d-block w-100" alt="...">
						</div>
						<div class="carousel-item">
							<img id="en_image3" src="<?php en_image3(); ?>" class="d-block w-100" alt="...">
						</div> 
					</div>
				</div>
			</article>
			<article>
			
			  <!-- -----------------session admin en image--------------- -->
<?php if ($_SESSION['user'] == true ) { ?>
	

	<form method="POST" enctype="multipart/form-data" action="">
		<input type="file" name="en_image">
				 
		<input type="submit" name="validation_en_image"> 
	</form>

	<!-- <button id="LoadImage" onclick="LoadImgs()">validation_en_image</button> -->
<?php

if (isset($_POST['validation_en_image'])) 
	{
	modif_en_image();
	}
 } ?>
		</article>
		</section>
	
	</main>

</body>

<script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>
  <script type="text/javascript" src="oc-api.js"></script>
</html>
 <!--  <div class="carousel-item active">
        <img src="images/en_image/foule.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="images/en_image/IMG_5654 2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="images/en_image/thalassanteboat.jpg" class="d-block w-100" alt="...">
    </div> -->