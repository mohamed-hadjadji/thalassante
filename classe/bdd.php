<?php
   
   $db = new mysqli("localhost","root","","thalassante");
   if($db->connect_error)
   {
   die("Unable to connect database: " . $db->connect_error);
   }
?>