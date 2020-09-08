
$(document).ready(function (e) {
  get_act();
  get_tous();
  get_incub();
  get_marit();
  get_social();
  get_territoire();
  get_environ();
  get_sport();
  get_art();
  get_pedago();
  get_construct();
  get_cuisine();
  get_recherche();
  get_year();

  //afficher le formulaire
  $(function() {
    $("#dialog").dialog({
    autoOpen: false,
    width: 600
  });
  $("#add").on("click", function() {
  $("#dialog").dialog("open");
  });
  });

  ///////fait apparaitre le texte
  $('#mh-js-img-icone').click(function(){
    $('#oc-para-act-cacher').toggle(250); //affiche et desafiche
  })

  //pour les années
  $(function() {
    $('#datepicker').datepicker({
        changeYear: true,
        showButtonPanel: true,
        dateFormat: 'yy',
        onClose: function(dateText, inst) { 
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).datepicker('setDate', new Date(year, 1));
        }
    });
 $(".date-picker-year").focus(function () {
        $(".ui-datepicker-month").hide();
    });
});

});

//////change le logofleche du bas de activités
 function flech()
    {
      //je recupere la source de limage 
     icone = document.getElementById("oc-logo-id-act").getAttribute("src");
    // je compare la source
     if (icone=='images/icone/Website_THALA_Flèche Basse WHITE.png') {
                  document.getElementById("oc-logo-id-act").src='images/icone/Website_THALA_Flèche Haute WHITE.png';
              }

              else {
             document.getElementById("oc-logo-id-act").src='images/icone/Website_THALA_Flèche Basse WHITE.png';
              }

    }

function carrousel()
{
   $('.carousel[data-type="multi"] .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        for (var i=0;i<2;i++) {
          next=next.next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });
}
function get_act()
{
 
  $.ajax({
    method: "POST",
    url:"source/fonc_act.php",
    data: { 'function': 'get_activite'},
    datatype: "json",
    success: function(datatype){

      $('.cont').remove();
      $('#activy').empty();

      var act = JSON.parse(datatype);
      // var ite = true;
      for (var i = 0; i < act.length; i++){
        if ( i == 0 ){
          $("#activy").append(`
          <div id="geta${i}" class="item active">
            <div id="cActivity${i}" class="carousel-col">
              <div class="block">
                <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
              </div>
            </div>
          </div>
          `)
        }
        else {
          $("#activy").append(`
            <div id="geta${i}" class="item">
              <div class="carousel-col">
                <div id="cActivity${i}" class="block">
                  <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
                </div>
              </div>
            </div>
          `)
        }
         $(function() {
          var fiche = "#fic"+ act[i]['id'];      
            $(`${fiche}`).dialog({
            autoOpen: false,
            width: 1030
          });
            var bofic = "#affic"+ act[i]['id'];
          $(document).on("click", `${bofic}`, function() {                           
          $(`${fiche}`).dialog('open');
          });
          });

          $(document).on("click", '#ann' + act[i]["id"], function(){
      
            supp_act(act[i-1]["id"], i-1);
            })
                 
          $('#cActivity' + i).append("<button class='btn btn-outline-danger' id='ann" + act[i]["id"] + "'>Annuler</button>");
          
    }
      carrousel();
  }
  })
}

function supp_act(value, i){
          console.log("ok");
    
            $.ajax({
                url: "source/fonc_act.php",
                method : "POST",
                data : {'function' : 'del_activite', 'id_act' : value},
                datatype : "json",
                success: (data) => {
                  $("#geta" + i).remove();
                  $("#activy").empty();
                  get_act();
                }
            })
    
    }

function get_tous(){
  $('#tous').click(function (){
    get_act();
  })
}

function get_incub(){
  $('#incub').click(function (){
     $.ajax({
    method: "POST",
    url:"source/fonc_act.php",
    data: { 'function': 'get_incub'},
    datatype: "json",
    success: function(datatype){

      $('.cont').remove();
      $('#activy').empty();

      var act = JSON.parse(datatype);
      // var ite = true;
      for (var i = 0; i < act.length; i++){
        if ( i == 0 ){
          $("#activy").append(`
          <div id="geta${i}" class="item active">
            <div id="cActivity${i}" class="carousel-col">
              <div class="block">
                <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
              </div>
            </div>
          </div>
          `)
        }
        else {
          $("#activy").append(`
            <div id="geta${i}" class="item">
              <div class="carousel-col">
                <div id="cActivity${i}" class="block">
                  <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
                </div>
              </div>
            </div>
          `)
        }
        $(function() {
          var fiche = "#fic"+ act[i]['id'];      
            $(`${fiche}`).dialog({
            autoOpen: false,
            width: 1030
          });
            var bofic = "#affic"+ act[i]['id'];
          $(document).on("click", `${bofic}`, function() {                           
          $(`${fiche}`).dialog('open');
          });
          });

   $(document).on("click", '#ann' + act[i]["id"], function(){
      
            supp_act(act[i-1]["id"], i-1);
            })
                 
          $('#cActivity' + i).append("<button class='btn btn-outline-danger' id='ann" + act[i]["id"] + "'>Annuler</button>");
   
    }
    carrousel();
  }
})
})
}

function get_marit(){
  $('#marit').click(function (){
     $.ajax({
    method: "POST",
    url:"source/fonc_act.php",
    data: { 'function': 'get_marit'},
    datatype: "json",
    success: function(datatype){

      $('.cont').remove();
      $('#activy').empty();

      var act = JSON.parse(datatype);
      // var ite = true;
      for (var i = 0; i < act.length; i++){
        if ( i == 0 ){
          $("#activy").append(`
          <div id="geta${i}" class="item active">
            <div id="cActivity${i}" class="carousel-col">
              <div class="block">
                <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
              </div>
            </div>
          </div>
          `)
        }
        else {
          $("#activy").append(`
            <div id="geta${i}" class="item">
              <div class="carousel-col">
                <div id="cActivity${i}" class="block">
                  <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
                </div>
              </div>
            </div>
          `)
        }
        $(function() {
          var fiche = "#fic"+ act[i]['id'];      
            $(`${fiche}`).dialog({
            autoOpen: false,
            width: 1030
          });
            var bofic = "#affic"+ act[i]['id'];
          $(document).on("click", `${bofic}`, function() {                           
          $(`${fiche}`).dialog('open');
          });
          });

        $(document).on("click", '#ann' + act[i]["id"], function(){
      
            supp_act(act[i-1]["id"], i-1);
            })
                 
          $('#cActivity' + i).append("<button class='btn btn-outline-danger' id='ann" + act[i]["id"] + "'>Annuler</button>");
   
      }
    carrousel();
  }
})
})
}

function get_social(){
  $('#socia').click(function (){
     $.ajax({
    method: "POST",
    url:"source/fonc_act.php",
    data: { 'function': 'get_socia'},
    datatype: "json",
    success: function(datatype){

      $('.cont').remove();
      $('#activy').empty();

      var act = JSON.parse(datatype);
      // var ite = true;
      for (var i = 0; i < act.length; i++){
        if ( i == 0 ){
          $("#activy").append(`
          <div id="geta${i}" class="item active">
            <div id="cActivity${i}" class="carousel-col">
              <div class="block">
                <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
              </div>
            </div>
          </div>
          `)
        }
        else {
          $("#activy").append(`
            <div id="geta${i}" class="item">
              <div class="carousel-col">
                <div id="cActivity${i}" class="block">
                  <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
                </div>
              </div>
            </div>
          `)
        }
        $(function() {
          var fiche = "#fic"+ act[i]['id'];      
            $(`${fiche}`).dialog({
            autoOpen: false,
            width: 1030
          });
            var bofic = "#affic"+ act[i]['id'];
          $(document).on("click", `${bofic}`, function() {                           
          $(`${fiche}`).dialog('open');
          });
          });

        $(document).on("click", '#ann' + act[i]["id"], function(){
      
            supp_act(act[i-1]["id"], i-1);
            })
                 
          $('#cActivity' + i).append("<button class='btn btn-outline-danger' id='ann" + act[i]["id"] + "'>Annuler</button>");
   
      }
    carrousel();
  }
})
})
}

function get_territoire(){
  $('#terri').click(function (){
     $.ajax({
    method: "POST",
    url:"source/fonc_act.php",
    data: { 'function': 'get_territ'},
    datatype: "json",
    success: function(datatype){

     $('.cont').remove();
      $('#activy').empty();

      var act = JSON.parse(datatype);
      // var ite = true;
      for (var i = 0; i < act.length; i++){
        if ( i == 0 ){
          $("#activy").append(`
          <div id="geta${i}" class="item active">
            <div id="cActivity${i}" class="carousel-col">
              <div class="block">
                <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
              </div>
            </div>
          </div>
          `)
        }
        else {
          $("#activy").append(`
            <div id="geta${i}" class="item">
              <div class="carousel-col">
                <div id="cActivity${i}" class="block">
                  <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
                </div>
              </div>
            </div>
          `)
        }
        $(function() {
          var fiche = "#fic"+ act[i]['id'];      
            $(`${fiche}`).dialog({
            autoOpen: false,
            width: 1030
          });
            var bofic = "#affic"+ act[i]['id'];
          $(document).on("click", `${bofic}`, function() {                           
          $(`${fiche}`).dialog('open');
          });
          });

       $(document).on("click", '#ann' + act[i]["id"], function(){
      
            supp_act(act[i-1]["id"], i-1);
            })
                 
          $('#cActivity' + i).append("<button class='btn btn-outline-danger' id='ann" + act[i]["id"] + "'>Annuler</button>");
   
      }
    carrousel();
  }
})
})
}

function get_environ(){
  $('#envir').click(function (){
     $.ajax({
    method: "POST",
    url:"source/fonc_act.php",
    data: { 'function': 'get_enviro'},
    datatype: "json",
    success: function(datatype){

      $('.cont').remove();
      $('#activy').empty();

      var act = JSON.parse(datatype);
      // var ite = true;
      for (var i = 0; i < act.length; i++){
        if ( i == 0 ){
          $("#activy").append(`
          <div id="geta${i}" class="item active">
            <div id="cActivity${i}" class="carousel-col">
              <div class="block">
                <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
              </div>
            </div>
          </div>
          `)
        }
        else {
          $("#activy").append(`
            <div id="geta${i}" class="item">
              <div class="carousel-col">
                <div id="cActivity${i}" class="block">
                  <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
                </div>
              </div>
            </div>
          `)
        }
        $(function() {
          var fiche = "#fic"+ act[i]['id'];      
            $(`${fiche}`).dialog({
            autoOpen: false,
            width: 1030
          });
            var bofic = "#affic"+ act[i]['id'];
          $(document).on("click", `${bofic}`, function() {                           
          $(`${fiche}`).dialog('open');
          });
          });

        $(document).on("click", '#ann' + act[i]["id"], function(){
      
            supp_act(act[i-1]["id"], i-1);
            })
                 
          $('#cActivity' + i).append("<button class='btn btn-outline-danger' id='ann" + act[i]["id"] + "'>Annuler</button>");
   
      }
    carrousel();
  }
})
})
}

function get_sport(){
  $('#sport').click(function (){
     $.ajax({
    method: "POST",
    url:"source/fonc_act.php",
    data: { 'function': 'get_sport'},
    datatype: "json",
    success: function(datatype){

      $('.cont').remove();
      $('#activy').empty();

      var act = JSON.parse(datatype);
      // var ite = true;
      for (var i = 0; i < act.length; i++){
        if ( i == 0 ){
          $("#activy").append(`
          <div id="geta${i}" class="item active">
            <div id="cActivity${i}" class="carousel-col">
              <div class="block">
                <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
              </div>
            </div>
          </div>
          `)
        }
        else {
          $("#activy").append(`
            <div id="geta${i}" class="item">
              <div class="carousel-col">
                <div id="cActivity${i}" class="block">
                  <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
                </div>
              </div>
            </div>
          `)
        }
        $(function() {
          var fiche = "#fic"+ act[i]['id'];      
            $(`${fiche}`).dialog({
            autoOpen: false,
            width: 1030
          });
            var bofic = "#affic"+ act[i]['id'];
          $(document).on("click", `${bofic}`, function() {                           
          $(`${fiche}`).dialog('open');
          });
          });

       $(document).on("click", '#ann' + act[i]["id"], function(){
      
            supp_act(act[i-1]["id"], i-1);
            })
                 
          $('#cActivity' + i).append("<button class='btn btn-outline-danger' id='ann" + act[i]["id"] + "'>Annuler</button>");
   
      }
   carrousel();
  }
})
})
}

function get_art(){
  $('#art').click(function (){
     $.ajax({
    method: "POST",
    url:"source/fonc_act.php",
    data: { 'function': 'get_art'},
    datatype: "json",
    success: function(datatype){

     $('.cont').remove();
      $('#activy').empty();

      var act = JSON.parse(datatype);
      // var ite = true;
      for (var i = 0; i < act.length; i++){
        if ( i == 0 ){
          $("#activy").append(`
          <div id="geta${i}" class="item active">
            <div id="cActivity${i}" class="carousel-col">
              <div class="block">
                <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
              </div>
            </div>
          </div>
          `)
        }
        else {
          $("#activy").append(`
            <div id="geta${i}" class="item">
              <div class="carousel-col">
                <div id="cActivity${i}" class="block">
                  <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
                </div>
              </div>
            </div>
          `)
        }
        $(function() {
          var fiche = "#fic"+ act[i]['id'];      
            $(`${fiche}`).dialog({
            autoOpen: false,
            width: 1030
          });
            var bofic = "#affic"+ act[i]['id'];
          $(document).on("click", `${bofic}`, function() {                           
          $(`${fiche}`).dialog('open');
          });
          });

        $(document).on("click", '#ann' + act[i]["id"], function(){
      
            supp_act(act[i-1]["id"], i-1);
            })
                 
          $('#cActivity' + i).append("<button class='btn btn-outline-danger' id='ann" + act[i]["id"] + "'>Annuler</button>");
   
      }
    carrousel();
  }
})
})
}

function get_pedago(){
  $('#pedag').click(function (){
     $.ajax({
    method: "POST",
    url:"source/fonc_act.php",
    data: { 'function': 'get_pedag'},
    datatype: "json",
    success: function(datatype){

      $('.cont').remove();
      $('#activy').empty();

      var act = JSON.parse(datatype);
      // var ite = true;
      for (var i = 0; i < act.length; i++){
        if ( i == 0 ){
          $("#activy").append(`
          <div id="geta${i}" class="item active">
            <div id="cActivity${i}" class="carousel-col">
              <div class="block">
                <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
              </div>
            </div>
          </div>
          `)
        }
        else {
          $("#activy").append(`
            <div id="geta${i}" class="item">
              <div class="carousel-col">
                <div id="cActivity${i}" class="block">
                  <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
                </div>
              </div>
            </div>
          `)
        }
        $(function() {
          var fiche = "#fic"+ act[i]['id'];      
            $(`${fiche}`).dialog({
            autoOpen: false,
            width: 1030
          });
            var bofic = "#affic"+ act[i]['id'];
          $(document).on("click", `${bofic}`, function() {                           
          $(`${fiche}`).dialog('open');
          });
          });

        $(document).on("click", '#ann' + act[i]["id"], function(){
      
            supp_act(act[i-1]["id"], i-1);
            })
                 
          $('#cActivity' + i).append("<button class='btn btn-outline-danger' id='ann" + act[i]["id"] + "'>Annuler</button>");
   
      }
    carrousel();
  }
})
})
}

function get_construct(){
  $('#const').click(function (){
     $.ajax({
    method: "POST",
    url:"source/fonc_act.php",
    data: { 'function': 'get_const'},
    datatype: "json",
    success: function(datatype){

      $('.cont').remove();
      $('#activy').empty();

      var act = JSON.parse(datatype);
      // var ite = true;
      for (var i = 0; i < act.length; i++){
        if ( i == 0 ){
          $("#activy").append(`
          <div id="geta${i}" class="item active">
            <div id="cActivity${i}" class="carousel-col">
              <div class="block">
                <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
              </div>
            </div>
          </div>
          `)
        }
        else {
          $("#activy").append(`
            <div id="geta${i}" class="item">
              <div class="carousel-col">
                <div id="cActivity${i}" class="block">
                  <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
                </div>
              </div>
            </div>
          `)
        }
        $(function() {
          var fiche = "#fic"+ act[i]['id'];      
            $(`${fiche}`).dialog({
            autoOpen: false,
            width: 1030
          });
            var bofic = "#affic"+ act[i]['id'];
          $(document).on("click", `${bofic}`, function() {                           
          $(`${fiche}`).dialog('open');
          });
          });

        $(document).on("click", '#ann' + act[i]["id"], function(){
      
            supp_act(act[i-1]["id"], i-1);
            })
                 
          $('#cActivity' + i).append("<button class='btn btn-outline-danger' id='ann" + act[i]["id"] + "'>Annuler</button>");
   
      }
    carrousel();
  }
})
})
}

function get_cuisine(){
  $('#cuisi').click(function (){
     $.ajax({
    method: "POST",
    url:"source/fonc_act.php",
    data: { 'function': 'get_cuisin'},
    datatype: "json",
    success: function(datatype){

      $('.cont').remove();
      $('#activy').empty();

      var act = JSON.parse(datatype);
      // var ite = true;
      for (var i = 0; i < act.length; i++){
        if ( i == 0 ){
          $("#activy").append(`
          <div id="geta${i}" class="item active">
            <div id="cActivity${i}" class="carousel-col">
              <div class="block">
                <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
              </div>
            </div>
          </div>
          `)
        }
        else {
          $("#activy").append(`
            <div id="geta${i}" class="item">
              <div class="carousel-col">
                <div id="cActivity${i}" class="block">
                  <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
                </div>
              </div>
            </div>
          `)
        }
        $(function() {
          var fiche = "#fic"+ act[i]['id'];      
            $(`${fiche}`).dialog({
            autoOpen: false,
            width: 1030
          });
            var bofic = "#affic"+ act[i]['id'];
          $(document).on("click", `${bofic}`, function() {                           
          $(`${fiche}`).dialog('open');
          });
          });

       $(document).on("click", '#ann' + act[i]["id"], function(){
      
            supp_act(act[i-1]["id"], i-1);
            })
                 
          $('#cActivity' + i).append("<button class='btn btn-outline-danger' id='ann" + act[i]["id"] + "'>Annuler</button>");
   
      }
    carrousel();
  }
})
})
}

function get_recherche(){
  $('#reche').click(function (){
     $.ajax({
    method: "POST",
    url:"source/fonc_act.php",
    data: { 'function': 'get_recher'},
    datatype: "json",
    success: function(datatype){

      $('.cont').remove();
      $('#activy').empty();

      var act = JSON.parse(datatype);
      // var ite = true;
      for (var i = 0; i < act.length; i++){
        if ( i == 0 ){
          $("#activy").append(`
          <div id="geta${i}" class="item active">
            <div id="cActivity${i}" class="carousel-col">
              <div class="block">
                <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
              </div>
            </div>
          </div>
          `)
        }
        else {
          $("#activy").append(`
            <div id="geta${i}" class="item">
              <div class="carousel-col">
                <div id="cActivity${i}" class="block">
                  <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
                </div>
              </div>
            </div>
          `)
        }
        $(function() {
          var fiche = "#fic"+ act[i]['id'];      
            $(`${fiche}`).dialog({
            autoOpen: false,
            width: 1030
          });
            var bofic = "#affic"+ act[i]['id'];
          $(document).on("click", `${bofic}`, function() {                           
          $(`${fiche}`).dialog('open');
          });
          });

        $(document).on("click", '#ann' + act[i]["id"], function(){
      
            supp_act(act[i-1]["id"], i-1);
            })
                 
          $('#cActivity' + i).append("<button class='btn btn-outline-danger' id='ann" + act[i]["id"] + "'>Annuler</button>");
   
      }
    carrousel();
  }
})
})
}

function get_year(){
  $('#option').click(function (){
    var year = $('#year').val();
     $.ajax({
    method: "POST",
    url:"source/fonc_act.php",
    data: {'function': 'get_year', 'year': year},
    datatype: "json",
    success: function(datatype){

      $('.cont').remove();
      $('#activy').empty();

      var act = JSON.parse(datatype);
      // var ite = true;
      for (var i = 0; i < act.length; i++){
        if ( i == 0 ){
          $("#activy").append(`
          <div id="geta${i}" class="item active">
            <div id="cActivity${i}" class="carousel-col">
              <div class="block">
                <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
              </div>
            </div>
          </div>
          `)
        }
        else {
          $("#activy").append(`
            <div id="geta${i}" class="item">
              <div class="carousel-col">
                <div id="cActivity${i}" class="block">
                  <div class="imgact"><img class="oc-img-get_act-momo" src="classe/${act[i]["image"]}"></div><div class="titac"><h5 class="titre"><b>${act[i]["titre"]}</b></h5><p class="text">${act[i]["description"]}</p></div><div id="fich"><button id="affic${act[i]['id']}" type="button" class="bo-sav">En savoir plus</button><br/><br/><div id="fic${act[i]['id']}"><img height="900" src="classe/${act[i]["affiche"]}"></div></div><div id="trav"><table id="tabact"><tr><td style="background-color:${act[i]["incubation"]};"></td><td style="background-color:${act[i]["maritime"]};"></td><td style="background-color:${act[i]["social"]};"></td><td style="background-color:${act[i]["territoire"]};"></td></tr><tr><td style="background-color:${act[i]["environ"]};"></td><td style="background-color:${act[i]["sport"]};"></td><td style="background-color:${act[i]["art"]};"></td><td style="background-color:${act[i]["pedago"]};"></td></tr><tr><td style="background-color:${act[i]["construc"]};"></td><td style="background-color:${act[i]["cuisine"]};"></td><td style="background-color:${act[i]["recherche"]};"></td><td></td></tr></table></div>
                </div>
              </div>
            </div>
          `)
        }
        $(function() {
          var fiche = "#fic"+ act[i]['id'];      
            $(`${fiche}`).dialog({
            autoOpen: false,
            width: 1030
          });
            var bofic = "#affic"+ act[i]['id'];
          $(document).on("click", `${bofic}`, function() {                           
          $(`${fiche}`).dialog('open');
          });
          });

        $(document).on("click", '#ann' + act[i]["id"], function(){
      
            supp_act(act[i-1]["id"], i-1);
            })
                 
          $('#cActivity' + i).append("<button class='btn btn-outline-danger' id='ann" + act[i]["id"] + "'>Annuler</button>");
   
      }
    carrousel();
  }
})
})
}

