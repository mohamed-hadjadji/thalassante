<?php



   // $reqimg = ("SELECT liens FROM en_image ");
   

   // $connexion=mysqli_connect("localhost","root","","thalassante");
      $db = new PDO('mysql:host=localhost;dbname=thalassante;charset=utf8', 'root', '');
   // $reqimgco = mysqli_query($connexion,$reqimg);
      $query = $db->prepare("SELECT liens FROM en_image");
      $query->execute();
     
     
      $resultat = $query->fetchAll(PDO::FETCH_OBJ);
      $count =count($resultat);
      
 
 

        $result = json_encode($resultat);

    echo $result;


//        $imgrecup = mysqli_fetch_all($reqimgco);
//        $compt = count($imgrecup);
// var_dump($imgrecup);
   
?>