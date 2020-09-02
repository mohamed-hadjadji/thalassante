
///////////////////////////////////////////////////////////bouton modif block admin/////////////////////////////////
$(document).ready(function() {
//oc_lieu_tous();
oc_lieu_comuns();
service();
libre();
//get_tous();
tous();

$(function() {
    $("#oc_dialog").dialog({
    autoOpen: false,
    width: 600
  });
  $("#oc_add").on("click", function() {
  $("#oc_dialog").dialog("open");
  });
  });

});




///////////////change img  //////////////////
function plan_tous()
{
 // je recupere la source de limage 
         imag = document.getElementById("oc-img-lieux-site-id").getAttribute("src");
        // je compare la source
         if (imag=='images/lieux/plan/lieu_vide.png' || imag== 'images/lieux/plan/communs.png' || imag=='images/lieux/plan/service.png' || imag=='images/lieux/plan/libre.png')
          {
           document.getElementById("oc-img-lieux-site-id").src='images/lieux/plan/tous.png';

                        $('#oc_boutton_user_block1').css({"background-color":"#FFD007"});
                        $('#oc_boutton_user_block2').css({"background-color":"#FFE48C"});
                        $('#oc_boutton_user_block3').css({"background-color":"#FFEFC1"});
                         $('#oc_boutton_user_block4').css({"background-color":"#009BB5"});
                         $('#oc_boutton_user_block5').css({"background-color":"#6EC6D8"});
                         $('#oc_boutton_user_block6').css({"background-color":"#BFE3EA"});
                         $('#oc_boutton_user_block7').css({"background-color":"#008A42"});
                         $('#oc_boutton_user_block8').css({"background-color":"#2BAC6E"});
                         $('#oc_boutton_user_block9').css({"background-color":"#95CBA6"});
                         $('#oc_boutton_user_block10').css({"background-color":"#D4E8D8"});
                         $('#oc_boutton_user_block11').css({"background-color":"#F29108"});
                         $('#oc_boutton_user_block12').css({"background-color":"#B1DDD4"});
                         $('#oc_boutton_user_block13').css({"background-color":"#956F69"});
                         $('#oc_boutton_user_block14').css({"background-color":"#C3ABA5"});

           }
          else if (imag=='images/lieux/plan/tous.png') 
          {
           
            document.getElementById("oc-img-lieux-site-id").src='images/lieux/plan/lieu_vide.png';
                $('#oc_boutton_user_block1').css({"background-color":"#00998D"});
             $('#oc_boutton_user_block2').css({"background-color":"#0DA092"});
             $('#oc_boutton_user_block3').css({"background-color":"#21A595"});
             $('#oc_boutton_user_block4').css({"background-color":"#33A897"});
             $('#oc_boutton_user_block5').css({"background-color":"#44AD9B"});
             $('#oc_boutton_user_block6').css({"background-color":"#52B2A0"});
             $('#oc_boutton_user_block7').css({"background-color":"#5CB7A6"});
             $('#oc_boutton_user_block8').css({"background-color":"#68BCAC"});
             $('#oc_boutton_user_block9').css({"background-color":"#76C1B3"});
             $('#oc_boutton_user_block10').css({"background-color":"#85C6BA"});
              $('#oc_boutton_user_block11').css({"background-color":"#92CCC1"});
              $('#oc_boutton_user_block12').css({"background-color":"#A1D3C9"});
              $('#oc_boutton_user_block13').css({"background-color":"#B1DDD4"});
              $('#oc_boutton_user_block14').css({"background-color":"#BFE2D9"});


             
           }
 
          
}


////////////////////////////////////////////////////:fonction momo affichage////////////////////////////////
function tous(){
  $('#oc-lieu-tous').click(function (){
    plan_tous();
    $.ajax({
    method: "POST",
    url:"fonc_lieu.php",
    data: { 'function': 'tous'},
    datatype: "json",
    success: function(datatype){
     
      $('.oc-zone').remove();
      var lieu = JSON.parse(datatype);
      for (var i = 0; i < lieu.length; i++){ 
         $('#oc-info-lieu').append('<div class="oc-zone"><div class="oc-img-lieu"><img class="oc_img_tous" src="'+ lieu[i]["photo"] +'"></div><div class="oc-desc-lieu"><h5 class="oc-titre-lieu"><b>' + lieu[i]["nom"] +'</b></h5><p class="oc-text-lieu">' + lieu[i]["texte"] +'</p></div></div>');
      }
      
    }

   })
  })
}

////////////////////////bonton communs////////////////////////////
///////change img//////////////////////////:

function oc_color_bouton_comuns()
{
  imag = document.getElementById("oc-img-lieux-site-id").getAttribute("src");
  if (imag== 'images/lieux/plan/communs.png')
  {
                $('#oc_boutton_user_block1').css({"background-color":"#FFD007"});
                       $('#oc_boutton_user_block2').css({"background-color":"#FFE48C"});
                        $('#oc_boutton_user_block3').css({"background-color":"#FFEFC1"});
  }
  else if (imag=='images/lieux/plan/tous.png') 
  {
    $('#oc_boutton_user_block1').css({"background-color":"#00998D"});
             $('#oc_boutton_user_block2').css({"background-color":"#0DA092"});
             $('#oc_boutton_user_block3').css({"background-color":"#21A595"});
  }

}



function plan_communs()
{
 // je recupere la source de limage 
         imag = document.getElementById("oc-img-lieux-site-id").getAttribute("src");
        // je compare la source
         if (imag=='images/lieux/plan/lieu_vide.png' || imag== 'images/lieux/plan/tous.png' || imag=='images/lieux/plan/service.png' || imag=='images/lieux/plan/libre.png' )
                 {
                      document.getElementById("oc-img-lieux-site-id").src='images/lieux/plan/communs.png';
                        $('#oc_boutton_user_block1').css({"background-color":"#FFD007"});
                       $('#oc_boutton_user_block2').css({"background-color":"#FFE48C"});
                        $('#oc_boutton_user_block3').css({"background-color":"#FFEFC1"});
                  }
          else if (imag=='images/lieux/plan/tous.png' || imag=='images/lieux/plan/communs.png') 
          {
           
            document.getElementById("oc-img-lieux-site-id").src='images/lieux/plan/lieu_vide.png';
                $('#oc_boutton_user_block1').css({"background-color":"#00998D"});
             $('#oc_boutton_user_block2').css({"background-color":"#0DA092"});
             $('#oc_boutton_user_block3').css({"background-color":"#21A595"});  
          }
}
///////////:bouton comuns////////////




///////////:bouton comuns////////////
function oc_lieu_comuns(){
  $('#oc_lieu_communs').click(function (){
    plan_communs();
       $.ajax({
          method: "POST",
          url:"fonc_lieu.php",
          data: {'function': 'communs'},
          datatype: "json",
          success: function(datatype){
           
            $('.oc-zone').remove();
            var lieu = JSON.parse(datatype);
            for (var i = 0; i < lieu.length; i++){ 
               $('#oc-info-lieu').append('<div class="oc-zone"><div class="oc-img-lieu"><img class="oc_img_lieu_communs" src="'+ lieu[i]["photo"] +'"></div><div class="oc-desc-lieu"><h5 class="oc-titre-lieu"><b>' + lieu[i]["nom"] +'</b></h5><p class="oc-text-lieu">' + lieu[i]["texte"] +'</p></div></div>');
            }
      
    }
    
   })
  })
}

//////////////////////bouton service/////////////////////
///////change img//////////////////////////:
function plan_service()
{
 // je recupere la source de limage 
         imag = document.getElementById("oc-img-lieux-site-id").getAttribute("src");
        // je compare la source
         if (imag=='images/lieux/plan/lieu_vide.png' || imag== 'images/lieux/plan/tous.png' || imag== 'images/lieux/plan/communs.png' || imag=='images/lieux/plan/libre.png' ) 
         {
                      document.getElementById("oc-img-lieux-site-id").src='images/lieux/plan/service.png';
                        $('#oc_boutton_user_block4').css({"background-color":"#009BB5"});
                         $('#oc_boutton_user_block5').css({"background-color":"#6EC6D8"});
                         $('#oc_boutton_user_block6').css({"background-color":"#BFE3EA"});
                  }
          else if (imag=='images/lieux/plan/tous.png' || imag=='images/lieux/plan/communs.png'  || imag=='images/lieux/plan/service.png' || imag=='images/lieux/plan/libre.png') 
          {
           
            document.getElementById("oc-img-lieux-site-id").src='images/lieux/plan/lieu_vide.png';
             $('#oc_boutton_user_block4').css({"background-color":"#33A897"});
             $('#oc_boutton_user_block5').css({"background-color":"#44AD9B"});
             $('#oc_boutton_user_block6').css({"background-color":"#52B2A0"});
          }
}

//////////////// clik bouton service
//////////////// clik bouton service
function service(){
    $('#oc_lieu_service').click(function (){
    plan_service();
     $.ajax({
          method: "POST",
          url:"fonc_lieu.php",
          data: {'function': 'service'},
          datatype: "json",
          success: function(datatype){
           
            $('.oc-zone').remove();
            var lieu = JSON.parse(datatype);
            for (var i = 0; i < lieu.length; i++){ 
               $('#oc-info-lieu').append('<div class="oc-zone"><div class="oc-img-lieu"><img class="oc-img-service-lieu" src="'+ lieu[i]["photo"] +'"></div><div class="oc-desc-lieu"><h5 class="oc-titre-lieu"><b>' + lieu[i]["nom"] +'</b></h5><p class="oc-text-lieu">' + lieu[i]["texte"] +'</p></div></div>');
            } 
    }
    
   })
  })
}


///////////////////////bonton libre/////////////////////

//////////////////////////////::a finir
///////change img//////////////////////////:
function plan_libre()
{
 // je recupere la source de limage 
         imag = document.getElementById("oc-img-lieux-site-id").getAttribute("src");
        // je compare la source
         if (imag=='images/lieux/plan/lieu_vide.png' || imag=='images/lieux/plan/tous.png' || imag=='images/lieux/plan/communs.png' || imag=='images/lieux/plan/service.png') 
          {
                      document.getElementById("oc-img-lieux-site-id").src='images/lieux/plan/libre.png';

                         $('#oc_boutton_user_block7').css({"background-color":"#008A42"});
                         $('#oc_boutton_user_block8').css({"background-color":"#2BAC6E"});
                         $('#oc_boutton_user_block9').css({"background-color":"#95CBA6"});
                         $('#oc_boutton_user_block10').css({"background-color":"#D4E8D8"});


                  }
          else if (imag=='images/lieux/plan/tous.png' || imag=='images/lieux/plan/communs.png'  || imag=='images/lieux/plan/service.png' || imag=='images/lieux/plan/libre.png') 
          {
            document.getElementById("oc-img-lieux-site-id").src='images/lieux/plan/lieu_vide.png';

             $('#oc_boutton_user_block7').css({"background-color":"#5CB7A6"});
             $('#oc_boutton_user_block8').css({"background-color":"#68BCAC"});
             $('#oc_boutton_user_block9').css({"background-color":"#76C1B3"});
             $('#oc_boutton_user_block10').css({"background-color":"#85C6BA"});

          }
}

// function libre(){
//     $('#oc-lieu-libre').click(function (){
//     plan_libre();
//    // get_color_lieux();
  
//   })
// }

function libre(){
    $('#oc-lieu-libre').click(function (){
    plan_libre();
     $.ajax({
          method: "POST",
          url:"fonc_lieu.php",
          data: {'function': 'espace'},
          datatype: "json",
          success: function(datatype){
           
            $('.oc-zone').remove();
            var lieu = JSON.parse(datatype);
            for (var i = 0; i < lieu.length; i++){ 
               $('#oc-info-lieu').append('<div class="oc-zone"><div class="oc-img-lieu"><img class="oc_img_lieux_bdd" src="'+ lieu[i]["photo"] +'"></div><div class="oc-desc-lieu"><h5 class="oc-titre-lieu"><b>' + lieu[i]["nom"] +'</b></h5><p class="oc-text-lieu">' + lieu[i]["texte"] +'</p></div></div>');
            }
      
    }
    
   })
  })
}




// function test1()
// {
//  imag = document.getElementById("oc-img-site-id").getAttribute("src");
//         if (imag=='images/lieux/plan/lieu_vide.png') 
//         {

//         }


// }






