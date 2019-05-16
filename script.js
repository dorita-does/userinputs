$(function() {
  //All JS goes within these brackets  
  
  $("#seats-submit").click(function(){
    
    //select the box with id of seats
    //get the value from that box
    var seatsString = $("#seats").val();

    //convert string to number
    var seats = parseInt(seatsString);

    //check if seats is greater than 500
    if ( seats >= 500 ) {
      //if seats is greater than 500 show the next question
      $("#awards-form").show();
      $("#seats-form").hide();
    } else {
      $("#answer").text("Work harder.");
      $("#drama-img").attr("src", "https://i.etsystatic.com/13221305/r/il/a9c522/1446860885/il_794xN.1446860885_nula.jpg");
    }
    
  });

  $("#awards-submit").click(function(){
    var awardsAlbumsString = $("#awards-albums").val();
    var awardsAlbums = parseInt(awardsAlbumsString);

    if ( awardsAlbums > 3 ) {
      $("#awards-form").hide();
      $("#answer").text("You're ON!");
      $("#tony-img").attr("src", "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1687,w_3000,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1556665458/19430-teeman-tony-nominations-hero_mf1wws");
      
    } else {
      $("#answer").text("Work harder.");
      $("#drama-img").attr("src", "https://i.etsystatic.com/13221305/r/il/a9c522/1446860885/il_794xN.1446860885_nula.jpg");
    }
  });

});