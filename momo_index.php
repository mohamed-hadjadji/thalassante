
<!DOCTYPE html>
<html lang="fr">
	<head>
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
       <link rel="stylesheet" href="css/carousel.css">
       <link rel="stylesheet" type="text/css" href="css/style.css">
       <link rel="stylesheet" type="text/css" href="css/activite.css">
       <link rel="stylesheet" media="screen and (max-width: 1070px)" href="css/activite-tel.css" type="text/css" />

		<!-- <script type = "text/javascript" src="../js/test.js"></script> -->
  	

	</head>
	<body>
		<header>
			
		</header>
		<div class="pre-act">
			<h1 class="oc-h1-activite"><b>ACTIVITÉS</b></h1>
			<article class="oc-article-act">
			    <div id="para-act">
					<p class="oc-p-act">L’inscription sérielle de l'oeuvre architecturale de Le Corbusier sur la Liste du patrimoine mondial
		est intervenue au mois de juillet 2016 lors de la réunion du Comité du patrimoine mondial à
		Istanbul. Elle est lL’inscription sérielle de l'oeuvre architecturale de Le Corbusier sur la Liste du
		patrimoine mondial est intervenue au mois de juillet 2016 lors de la réunion du Comité du
		patrimoine mondial à Istanbul. Elle est le fruit d'un travail collectif réalisé par l'Allemagne,
		l'Argentine, la Belgique, la France, l’Inde, le Japon et la Suisse. L’inscription sérielle de l'oeuvre
		architecturale</p>
               </div>
               <div id="suite-act">
                    <p id="oc-para-act-cacher" class="oc-p-act">La suite...........</p>
               </div>
               <div id="flech-act">
		            <p id="mh-js-img-icone" class="oc-p-img-act">
			       	<img id="oc-logo-id-act"  class="oc-icone-act" height="50" src="images/icone/Website_THALA_Flèche Basse WHITE.png"  onclick="flech();"/>
			       </p>
			   </div>
		</article>
		</div>
		 <?php if (isset($_SESSION['user'])) { ?>
			<section class="container">
			
				<div class="row">
					<div class="col-md-8">
								
						 <button id="add" class="btn btn-outline-success">Ajouter une activité</button>
						  
						<hr>
						
						
						<div id="dialog" title="Créer une activité"> 
						<form id="form" method="post" enctype="multipart/form-data">
							<div class="form-group">
								<label for="titre">TITRE</label>
								<input type="text" class="form-control" id="name" name="titre" placeholder="Entrer le Titre" required />
							</div>
							<div class="form-group">
								<label for="description">DESCRIPTION</label>
								<textarea type="text" class="form-control" id="email" name="description" rows="6" maxlength="400" placeholder="Ajouter la Description" required></textarea>
							</div>
							<div class="custom-file">
							    <input type="file" class="custom-file-input" id="customFile" name="image" required/>
							    <label class="custom-file-label" for="customFile">Choisir l'image</label>
							</div><br/><br/>
							<div class="custom-file">
							    <input type="file" class="custom-file-input" id="customFile" name="fiche" required/>
							    <label class="custom-file-label" for="customFile">Choisir la fiche</label>
							</div><br/><br/>
							<div class="col">
								<p>Date: <input type="text" class="form-control" id="datepicker" name="annee"/></p>
							</div>
							<div class="custom-control custom-checkbox">
							    <input type="checkbox" class="custom-control-input" value="#AA3614" name="incub" id="customCheck1">
							    <label class="custom-control-label" for="customCheck1">INCUBATION</label>
							</div>
							<div class="custom-control custom-checkbox">
							    <input type="checkbox" class="custom-control-input" value="#D35315" name="mari" id="customCheck2">
							    <label class="custom-control-label" for="customCheck2">MARITIME</label>
							</div>
							<div class="custom-control custom-checkbox">
							    <input type="checkbox" class="custom-control-input" value="#EE7810" name="social" id="customCheck3">
							    <label class="custom-control-label" for="customCheck3">SOCIAL</label>
							</div>
							<div class="custom-control custom-checkbox">
							    <input type="checkbox" class="custom-control-input" value="#6E473C" name="territ" id="customCheck4">
							    <label class="custom-control-label" for="customCheck4">TERRITOIRE</label>
							</div>
							<div class="custom-control custom-checkbox">
							    <input type="checkbox" class="custom-control-input" value="#E8521F" name="enviro" id="customCheck5">
							    <label class="custom-control-label" for="customCheck5">ENVIRONEMENT</label>
							</div>
							<div class="custom-control custom-checkbox">
							    <input type="checkbox" class="custom-control-input" value="#E30E20" name="sport" id="customCheck6">
							    <label class="custom-control-label" for="customCheck6">SPORT</label>
							</div>
							<div class="custom-control custom-checkbox">
							    <input type="checkbox" class="custom-control-input" value="#F08574" name="art" id="customCheck7">
							    <label class="custom-control-label" for="customCheck7">ART</label>
							</div>
							<div class="custom-control custom-checkbox">
							    <input type="checkbox" class="custom-control-input" value="#E40C50" name="pedago" id="customCheck8">
							    <label class="custom-control-label" for="customCheck8">PEDAGOGIE</label>
							</div>
							<div class="custom-control custom-checkbox">
							    <input type="checkbox" class="custom-control-input" value="#B2004B" name="const" id="customCheck9">
							    <label class="custom-control-label" for="customCheck9">CONSTRUCTION</label>
							</div>
							<div class="custom-control custom-checkbox">
							    <input type="checkbox" class="custom-control-input" value="#D5328A" name="cuisine" id="customCheck10">
							    <label class="custom-control-label" for="customCheck10">CUISINE</label>
							</div>
							<div class="custom-control custom-checkbox">
							    <input type="checkbox" class="custom-control-input" value="#C795C3" name="reche" id="customCheck11">
							    <label class="custom-control-label" for="customCheck11">RECHERCHE</label>
							</div>

							<input id="save" class="btn btn-success" type="submit" value="Valider" name="submit">
						</form>
						<?php 
						include("classe/class.php");
						if (isset($_POST["submit"])) {
							
							$activ = new activite();
                            $activ->add_activite(); 
						}
						?>
					</div>
	
					</div>
				</div>
				
			</section>
			<?php } ?>
		<main class="bloc-act">
			<section class="oc-section-date-activite">
				
					<select type="text" class="custom-select" size="15" id="year" name='year' required />
				     
				   
				        <option value="2020" selected>2020</option>
				        <option value="2019">2019</option>
				        <option value="2018">2018</option>
				        <option value="2017">2017</option>
				        <option value="2016">2016</option>
				        <option value="2015">2015</option>
				        <option value="2014">2014</option>
				        <option value="2013">2013</option>
				        <option value="2012">2012</option>
				        <option value="2011">2011</option>
				        <option value="2010">2010</option>             
				    </select>
				    <button id="option">SELECTIONNER</button>
	      
			</section>
			<section class="bo-coul">
				<div class="prem-bout">
					<div id="but-cont">
						<button class="but" style="background-color: #AA3614;" id="incub" ></button> INCUBATION
					</div></br>
					<div id="but-cont">
						<button class="but" style="background-color: #D35315;" id="marit" ></button> MARITIME
					</div></br>
					<div id="but-cont">
						<button class="but" style="background-color: #EE7810;" id="socia" ></button> SOCIAL
					</div></br>
					<div id="but-cont">
						<button class="but" style="background-color: #6E473C;" id="terri" ></button> TERRITOIRE
					</div></br>
					<div id="but-cont">
						<button class="but" style="background-color: #E8521F;" id="envir" ></button> ENVIRONNEMENT
					</div></br>
					<div id="but-cont">
						<button class="but" style="background-color: #E30E20;" id="sport" ></button> SPORT
					</div></br>
				</div>
				<div class="deux-bout">
					<div id="but-cont">
						<button class="but" style="background-color: #F08574;" id="art" ></button> ART
					</div></br>
					<div id="but-cont">
						<button class="but" style="background-color: #E40C50;" id="pedag" ></button> PEDAGOGIE
					</div></br>
					<div id="but-cont">
						<button class="but" style="background-color: #B2004B;" id="const" ></button> CONSTRUCTION
					</div></br>
					<div id="but-cont">
						<button class="but" style="background-color: #D5328A;" id="cuisi" ></button> CUISINE
					</div></br>
					<div id="but-cont">
						<button class="but" style="background-color: #C795C3;" id="reche" ></button> RECHERCHE
					</div></br>
					<div id="but-cont">
						<button class="tous" style="background-color: #F29108;" id="tous">TOUS</button>
					</div>
				</div>

			</section>
			
			<section class="activites">
				
				<div class="container">
					<div class="row">
						<div class="col-xs-11 col-md-10 col-centered">

							<div id="carousel" class="carousel slide" data-ride="carousel" data-type="multi" data-interval="0">
								<div id="activy" class="carousel-inner">
									<!-- CONTENU DU SLIDER MULTI ITEMS GÉNÉRÉ PAR SCRIPT_USER.JS -->
								</div>

								<!-- Controls -->
								<div class="left carousel-control">
									<a href="#carousel" role="button" data-slide="prev">
										<span class="glyphicon" aria-hidden="false"><img height="60" src="images/activite/Website_THALA_Flèche Gauche ORANGE.png"></span>
										<span class="sr-only">Previous</span>
									</a>
								</div>
								<div class="right carousel-control">
									<a href="#carousel" role="button" data-slide="next">
										<span class="glyphicon" aria-hidden="true"><img height="60" src="images/activite/Website_THALA_Flèche Droite ORANGE.png"></span>
										<span class="sr-only">Next</span>
									</a>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
		</main>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
		<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
		<!----------js momo-------------->
		<?php
  if (isset($_SESSION['user']))  {
  	?>
<script type = "text/javascript" src="js/script.js"></script>
<?php }
else{
	?>
	<script type = "text/javascript" src="js/script_user.js"></script>
<?php } ?>
	</body>
</html>