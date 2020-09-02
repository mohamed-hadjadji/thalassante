<?php 
// if (isset($_POST[''])) {
//   # code...
// }
// /////////////////////////////////////////////////////////FONCTION INSERTION EN IMAGE//////////////////////////////
// function modif_en_image()
// {

// 	   if ( isset($_FILES['en_image']) AND !empty($_FILES['en_image']['name']))
//                                 { 
//                               $liens = $_FILES['en_image']['name'];
//                                  //taille en octe
//                                    $taillemax = 2097152 ;  
//                                    $extensionvalide = array('jpg', 'jpeg', 'gif', 'png');  
//                                    //veri la taille
//                                      if ($_FILES['en_image']['size'] <= $taillemax)
//                                       { 
//                                         // met tous les carractere en minuscule                                    1=limite de chaine
//                                          $extensionupload = strtolower(substr(strchr($_FILES['en_image']['name'],'.'), 1));
//                                          //verif extention
//                                              if (in_array($extensionupload, $extensionvalide)) 
//                                              {
//                                              //  $chemin = "../avatar/".".".$_SESSION['id'].".".$extensionupload;
//                                                $chemin = "images/en_image/".$liens ;
//                                                $couenta = move_uploaded_file($_FILES['en_image']['tmp_name'],$chemin);
//                                                     if ($couenta)
//                                                      { 
//                                                       $connexion=mysqli_connect("localhost","root","","thalassante");
//                                                       $requeteupdate ="INSERT INTO en_image (liens) VALUES ('$chemin')"; 
//                                                       $inser= mysqli_query($connexion,$requeteupdate);
//                                                        unset($FILES);
//                                                      }
//                                                      else
//                                                      {
//                                                        echo "erreur lors du telechargement !";
//                                                      }
//                                              }
//                                              else
//                                              {
//                                               echo "votre imga doit etre au format jpg, jpeg, gif, png";
//                                              }
//                                       }
//                                       else
//                                       {
//                                         echo "votre foto ne doit pas depasser 2 mo";
//                                       }
//                                         }   
// }

function modif_en_image()
{
   
echo "string";
     $liens = $_FILES['carou_1']['toto'];

                                 //taille en octe
                                   $taillemax = 2097152 ;  
                                   $extensionvalide = array('jpg', 'jpeg', 'gif', 'png');  
                                   //veri la taille
                                     if ($_FILES['carou_1']['size'] <= $taillemax)
                                      { 
                                        // met tous les carractere en minuscule                                    1=limite de chaine
                                         $extensionupload = strtolower(substr(strchr($_FILES['carou_1']['name'],'.'), 1));
                                         //verif extention
                                             if (in_array($extensionupload, $extensionvalide)) 
                                             { echo "string";
                                             //  $chemin = "../avatar/".".".$_SESSION['id'].".".$extensionupload;
                                               $chemin = "images/en_image/".$liens ;
                                               $couenta = move_uploaded_file($_FILES['carou_1']['tmp_name'],$chemin);
                                                    if ($couenta)
                                                     { 
                                                      $connexion=mysqli_connect("localhost","root","","thalassante");
                                                      $requeteupdate ="UPDATE en_image SET liens = '$chemin' where id=58"; 

                                                      $inser= mysqli_query($connexion,$requeteupdate);
                                                       unset($FILES);
                                                     }
                                                     else
                                                     {
                                                       echo "erreur lors du telechargement !";
                                                     }
                                             }
                                             else
                                             {
                                              echo "votre imga doit etre au format jpg, jpeg, gif, png";
                                             }
                                      }
                                      else
                                      {
                                        echo "votre foto ne doit pas depasser 2 mo";
                                      }
    
  
  // elseif (isset($_FILES['carou_2']) AND !empty($_FILES['carou_2']['name'])) 
  // {
  //   # code...
  // }
  // elseif (isset($_FILES['carou_3']) AND !empty($_FILES['carou_3']['name']))
  //  {
  //   # code...
  // }
}

/////////////////////////////////////////////////FONCTION AFFICHAGE D'IMAGE//////////////

//////////////////image 1 du caroussel
function en_image1()
{
$reqimg = ("SELECT liens FROM en_image ");
    $connexion=mysqli_connect("localhost","root","","thalassante");
    $reqimgco = mysqli_query($connexion,$reqimg);
          $imgrecup = mysqli_fetch_all($reqimgco);
        $count = count($imgrecup);
      echo $imgrecup[0][0];
}
//////////////////image 2 du caroussel
function en_image2()
{
  $reqimg = ("SELECT liens FROM en_image ");
    $connexion=mysqli_connect("localhost","root","","thalassante");
    $reqimgco = mysqli_query($connexion,$reqimg);
          $imgrecup = mysqli_fetch_all($reqimgco);
        $count = count($imgrecup); 

 echo $imgrecup[1][0] ; 
  }
        
//////////////////image 3 du caroussel
function en_image3()
{
  $reqimg = ("SELECT liens FROM en_image ");
    $connexion=mysqli_connect("localhost","root","","thalassante");
    $reqimgco = mysqli_query($connexion,$reqimg);
          $imgrecup = mysqli_fetch_all($reqimgco);
        $count = count($imgrecup); 

 echo $imgrecup[2][0] ; 
  }
     
?>

