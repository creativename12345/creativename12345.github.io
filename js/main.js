var $animation_elements = $('.animation-element');
var $window = $(window);

$(document).ready(function () {
  // Force top position after page refresh
  $("html, body").scrollTop(0);

  //Cache reference to window and animation items

  var $window = $(window);

  $(window).on('scroll', check_if_in_view);
        
//menu staff
        $("a.tab").click(function () {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp();
var content_show = $(this).attr("title");
           $("#"+content_show).slideDown(); 
       });

});

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var offset = 250;
    
$(function() {  
    // Custom Easing
    jQuery.scrollSpeed(0.5, 1);
    
});

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position - offset) && $element.data("viewed") == 0) {
      $element.data("viewed",1);
      incrementreceipt($element.data());
    }
  });
}


// Increment receipt number
function incrementreceipt(dataset) {
  if (dataset.subject == "travels") {
    var likes = +$(".travelLikes").html();
    $(".travelLikes").html(likes+1);
              if (likes > 0) {
        $(".travels").fadeIn().fadeOut().fadeIn(stop);
    }
   } 
    
  else if (dataset.subject == "selfie") {
    var likes = +$(".selfieLikes").html();
    $(".selfieLikes").html(likes+1);
              if (likes > 0) {
        $(".selfie").fadeIn().fadeOut().fadeIn(stop);
    }
  }
  else if (dataset.subject == "cute") {
    var likes = +$(".cuteLikes").html();
    $(".cuteLikes").html(likes+1);
              if (likes > 0) {
        $(".cute").fadeIn().fadeOut().fadeIn(stop);
    }
  }
      else if (dataset.subject == "uf") {
    var likes = +$(".ufLikes").html();
    $(".ufLikes").html(likes+1);
              if (likes > 0) {
        $(".uf").fadeIn().fadeOut().fadeIn(stop);
    }
  }
    
    else if (dataset.subject == "food") {
    var likes = +$(".foodLikes").html();
    $(".foodLikes").html(likes+1);
            if (likes > 0) {
        $(".food").fadeIn().fadeOut().fadeIn(stop);
    }
  }
    
    else if (dataset.subject == "ha") {
    var likes = +$(".haLikes").html();
    $(".haLikes").html(likes+1);
    if (likes > 0) {
        $(".ha").fadeIn().fadeOut().fadeIn(stop);
    }
  }
    
    
    else if (dataset.subject == "cool") {
    var likes = +$(".coolLikes").html();
    $(".coolLikes").html(likes+1);
    if (likes > 0) {
        $(".cool").fadeIn().fadeOut().fadeIn(stop);
    }
  }
    
    
    else if (dataset.subject == "weddings") {
    var likes = +$(".weddingsLikes").html();
    $(".weddingsLikes").html(likes+1);
        if (likes > 0) {
        $(".weddings").fadeIn().fadeOut().fadeIn(stop);
    }
  }
    
    
 if (dataset.country == "russia") {
    var likes = +$(".russiaLikes").html();
    $(".russiaLikes").html(likes+1);
    if (likes > 0) {
        $(".russia").fadeIn().fadeOut().fadeIn(stop);
    }
}
    
if (dataset.country == "ch") {
    var likes = +$(".chLikes").html();
    $(".chLikes").html(likes+1);
    if (likes > 0) {
        $(".ch").fadeIn().fadeOut().fadeIn(stop);
    }
}
    
    if (dataset.rel == "work") {
    var likes = +$(".workLikes").html();
    $(".workLikes").html(likes+1);
    if (likes > 0) {
        $(".work").fadeIn().fadeOut().fadeIn(stop);
    }
}
    
    if (dataset.rel == "friends") {
    var likes = +$(".friendsLikes").html();
    $(".friendsLikes").html(likes+1);
    if (likes > 0) {
        $(".friends").fadeIn().fadeOut().fadeIn(stop);
    }
}
        
    if (dataset.rel == "hslu") {
    var likes = +$(".hsluLikes").html();
    $(".hsluLikes").html(likes+1);
    if (likes > 0) {
        $(".hslu").fadeIn().fadeOut().fadeIn(stop);
    }
}


    
  updateTotalView();
}

// Every time i call this update total like amount
function updateTotalView() {
  var likes = +$(".totalLikes").html();
  $(".totalLikes").html(likes+1);

}



