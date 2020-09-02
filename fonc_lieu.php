<?php
include("source/oc-fonction-php/oc-fonction-lieu.php");


if(!isset($lieux))
{
 $lieux = new quatre_bouton_lieux();
}

if(isset($_POST['function']) || isset($_GET['function']))
{
    $function= $_POST["function"];
    
    switch($function)  
   {
      case "tous":
        $lieux->tous();
      break;

      case "communs":
        $lieux->communs();
      break;

      case "service":
        $lieux->service();
      break;

      case "espace":
        $lieux->espace();
      break;

   }

}
?>