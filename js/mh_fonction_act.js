


//////////////////////////////////fait apparaitre le texte
   $(document).ready(function(){
  $('#oc-js-img-icone').click(function(){
    $('#oc-para-presentation-cacher').toggle(250); //affiche et desafiche
  })
})


///////////////////////////////////change le logofleche du bas de presentation
     function oc_change()
        {
        	//je recupere la source de limage 
         icone = document.getElementById("oc-logo-id-presentation").getAttribute("src");
        // je compare la source
         if (icone=='images/icone/Website_THALA_Flèche Basse BLUE.png') {
                      document.getElementById("oc-logo-id-presentation").src='images/icone/Website_THALA_Flèche Haute BLUE.png';
                  }
 
                  else {
                 document.getElementById("oc-logo-id-presentation").src='images/icone/Website_THALA_Flèche Basse BLUE.png';
                  }
 
        }