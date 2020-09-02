  
<?php
  $reqimg = ("SELECT liens FROM en_image ");
    $connexion=mysqli_connect("localhost","root","","thalassante");
    $reqimgco = mysqli_query($connexion,$reqimg);
          $imgrecup = mysqli_fetch_all($reqimgco);
        $count = count($imgrecup);

  for ($i=1; $i < $count ; $i++) 
      { ?>
      <div class="carousel cycle">
    <img id="<?php echo $imgrecup[$i][0]; ?>" src="<?php echo $imgrecup[$i][0] ; ?>" class="d-block w-100" alt='...'>
  </div
   <?php  
  }