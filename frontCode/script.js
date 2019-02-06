AOS.init(); // animate on scroll animations run
console.log("SUP DAWG!");

//========================================
//           STICKY NAV BAR
//======================================== 

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky", "color-change")
  } else {
    navbar.classList.remove("sticky", "color-change");
  }
};


//========================================
//           SMOOTH SCROLLING
//========================================

$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 60});   

  // Add smooth scrolling on all links inside the navbar
  $("#navbar1 a, .scroll-link, .smooth-scroll").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});


//========================================
//    THIS IS MESSY NEEDS REFACTOR
//========================================    

var circle1 = new ProgressBar.Circle('.anim-html', {
    strokeWidth: 7,  // This means 4% of the container
    color: '#bf0000'  
});

//circle.animate(0.4);

var circle2 = new ProgressBar.Circle('.anim-css', {
    strokeWidth: 7,  // This means 4% of the container
    color: '#45008b' 
});
//circle.animate(0.4);


var circle3 = new ProgressBar.Circle('.anim-js', {
    strokeWidth: 7,  // This means 4% of the container
    color: 'rgb(196, 60, 0)'
});
//circle.animate(0.4);

$(document).ready(function() {
	var bar = $(".bar-html");
	var pos = bar.position();	
    
    $(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos <=980) {    //Trigger animation when user reaches 980 point while scrolling
			circle1.animate(0), circle2.animate(0), circle3.animate(0);  //b.addClass("anim-html");
		} else {
			circle1.animate(0.6), circle2.animate(0.45), circle3.animate(0.3); //b.removeClass("anim-html");
		}
	});
});


//$('.anim.html').hover(function() {
//    circle1.animate(0.6);
//});

//=============================================
//  NAME AND TITLE ON MONITOR ON SCROLL EVENT
//============================================= 

function iDisappear() {
    if ( $( window ).scrollTop() > 375 ) {
        $("#name").addClass("disappear");
    }
    else {
        $("#name").removeClass("disappear");
    }
}

$(window).scroll(iDisappear);

$(document).ready(iDisappear);

//^FIX for the name appearing on page reload


//=============================================
//  EASTEREGG TOGGLE
//============================================= 


//$(document).ready(function(){
//  $(".card-back").click(function(){
//    $(".para").toggleClass("woah .caption-abt");
//  });
//});

//$(document).ready(function() {
//	var n = $(".name-container");
//	var pos = n.position();	
//    
//    $(window).scroll(function() {
//		var windowpos = $(window).scrollTop();
//		if (windowpos <=450) {    //Trigger animation when user reaches 980 point while scrolling
//			//$(".name-container").toggleClass("disappear");//b.addClass("anim-html");
//            $("#name").removeClass("disappear");
//           // console.log("APPEAR")
//		} else {
//            $("#name").addClass("disappear");
//			//$(".name-container").toggleClass("appear"); //b.removeClass("anim-html");
//            // console.log("DISSAPPEAR")
//		}
//	});
//});

//https://www.sitepoint.com/introduction-jquery-scroll-based-animations/
//https://stackoverflow.com/questions/13827165/element-appears-and-disappear-as-user-scroll-down-the-page
//https://stackoverflow.com/questions/50352235/scroll-event-not-firing-on-page-reload






//=============================================
//  ANIM LOADING SKILL CIRCLE ON SCROLL SCRIPT
//============================================= 


//var $bar = $(".bar-html");
//var $win = $(window);
//
//$win.on('scroll', function(){
//   console.log($win.scrollTop());
//});


//=============================================
//  NINJA SCRIPT
//============================================= 

  $("#overlay-menu, #surprise").click(function() {
        $( ".overlay" ).addClass
        ('overlay-open');
      });


    $( ".overlay-close" ).click(function() {
      $( ".overlay" ).removeClass
      ( 'overlay-open' ); 
      });

$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        $( ".overlay" ).removeClass
      ( 'overlay-open' ); 
    }
});


$("#overlay-menu, #surprise").click(function() {
    navigator.vibrate([380, 150, 200]);  
      });

//=============================================
//  BRUCE LEE SCRIPT
//=============================================


      $( "#overlay-menu-2" ).click(function() {
        $( ".overlay-2" ).addClass
        ('overlay-open-2');
      });


    $( ".overlay-close-2" ).click(function() {
      $( ".overlay-2" ).removeClass
      ( 'overlay-open-2' ); 
      });

$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        $( ".overlay-2" ).removeClass
      ( 'overlay-open-2' ); 
    }
});



