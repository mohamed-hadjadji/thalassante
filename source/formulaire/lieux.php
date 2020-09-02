
<?php 

function buttton_modif_lieux()
{


if (isset($_SESSION['user'])) { ?>
	
	   			<button id="oc_add" class="btn btn-outline-success">Modifier un block</button><?php } ?>
						
						<div id="oc_dialog" title="modifier un block">
							<form id="form" action="fonction.php" method="post" enctype="multipart/form-data"> 

								<label>choisisser le conteneur a modifier</label>
									<select class="custom-select" id="inputGroupSelect01">
										<option selected>Choose...</option>
										<option value="1">conteneur 1</option>
										<option value="2">conteneur 2</option>
										<option value="3">conteneur 3</option>
										<option value="4">conteneur 4</option>
										<option value="5">conteneur 5</option>
										<option value="6">conteneur 6</option>
										<option value="7">conteneur 7</option>
										<option value="8">conteneur 8</option>
										<option value="9">conteneur 9</option>
										<option value="10">conteneur 10</option>
										<option value="11">conteneur 11</option>
										<option value="12">conteneur 12</option>
										<option value="13">conteneur 13</option>
										<option value="14">conteneur 14</option>
									</select>

									<div class="form-group">
										<label for="formGroupExampleInput">Nom du block</label>
										<input id="nom-block-form-lieu" type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" name="block">
									</div>
									<div class="form-group">
										<label for="formGroupExampleInput2">Sous-titre</label>
										<input id="sous-titre-form-lieu" type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" name="Sous-titre">
									</div>
									<div class="form-group">
										<label for="formGroupExampleInput2">Texte</label></br>
										<textarea id="texte-form-lieu" id="w3review" name="w3review" rows="4" cols="50"></textarea>
									</div>
									<div class="form-check form-check-inline">
										<input id="bouton-form-tous-lieu" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Tous">
										<label class="form-check-label" for="inlineCheckbox1">Tous</label>
									</div>
									<div class="form-check form-check-inline">
										<input id="bouton-form-communs-lieu" class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Les communs">
										<label class="form-check-label" for="inlineCheckbox2">Les communs</label>
									</div>
									<div class="form-check form-check-inline">
										<input id="bouton-form-service-lieu" class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Service spécifiques">
										<label class="form-check-label" for="inlineCheckbox2">Service spécifiques</label>
									</div>
									<div class="form-check form-check-inline">
										<input id="bouton-form-libre-lieu" class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Espace libre">
										<label class="form-check-label" for="inlineCheckbox2">Espace libre</label>
									</div>
									<div class="form-check form-check-inline">
										<input name='oc-image-modif-lieu' type='file'>
									</div>

				<!----------------------validation------------------------------------->
									<input id="save" name="validation-modif-lieux" class="btn btn-success" type="submit" value="Valider">
									<?php include 'source/oc-fonction-php/oc-fonction-lieu.php'; ?>
							</form>
						</div>	
<?php } ?>
