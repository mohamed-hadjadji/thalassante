<?php
include("../classe/class.php");
 session_start();

if(!isset($active))
{
 $active = new activite();
}

if(isset($_POST['function']) || isset($_GET['function']))
{
    $function= $_POST["function"];

    switch($function)  
  {
      case "get_activite":
        $active->get_activite();
      break;

      case "del_activite":
          $idact = $_POST['id_act'];
          $active->del_activite($idact);
      break;

      case "get_incub":
        $active->get_incub();
      break;

      case "get_marit":
        $active->get_marit();
      break;

      case "get_socia":
        $active->get_socia();
      break;

      case "get_territ":
        $active->get_territ();
      break;

      case "get_enviro":
        $active->get_enviro();
      break;

      case "get_sport":
        $active->get_sport();
      break;

      case "get_art":
        $active->get_art();
      break;

      case "get_pedag":
        $active->get_pedag();
      break;

      case "get_const":
        $active->get_const();
      break;

      case "get_cuisin":
        $active->get_cuisin();
      break;

      case "get_recher":
        $active->get_recher();
      break;

      case "get_year":
        $year = $_POST["year"];
        $active->get_year($year);
      break;
  }
}	           	

?>