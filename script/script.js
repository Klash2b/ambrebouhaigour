function show(id_show, id_hide) {
  document.getElementById(id_hide).style.display = "none";

  setTimeout(function () {
    document.getElementById(id_hide).style.opacity = 0;
  }, 50);

  document.getElementById(id_show).style.display = "flex";

  setTimeout(function () {
    document.getElementById(id_show).style.opacity = 1;
  }, 50);
}

$(function(){
  var cible;
  $(".nav-link").click(function(e){
       e.preventDefault();//empêcher le navigateur de suivre le lien du <a> sur lequel tu as cliqué 
     cible=$('#'+$(this).attr('href').replace('#',''));
       $('.navbar-nav').find('.nav-link').removeClass('active');//supprime la class active de tout les a.nav-link
       $(this).addClass('active');//attribuer la classe active à l’élément cliqué
       console.log('le id cible :'+cible.attr('id')
           +' est à :'+cible.offset().top+'px du top.');
       $('html,body').scrollTop(cible.offset().top);
   });
});