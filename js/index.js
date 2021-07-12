//Get the button
var mybutton = document.getElementById("myBTN");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

////function for the submit
var mysubmit = document.getElementsByClassName("btn-contact");

function myFunction (){
    location.reload();
    alert("Thông tin của bạn đã được xác nhận");
}

// optional
$('#blogCarousel').carousel({
  interval: 5000
});

var mymodal = document.getElementById("save-id")

function myfunction (){
    location.reload();
    alert("Thông tin của bạn đã được xác nhận");
}

$("[data-toggle=tooltip]").tooltip();

(function(){

	var script = document.getElementById('bs-live-reload');
	var sseport = script.getAttribute('data-sseport');
	var lastchange = script.getAttribute('data-lastchange');

	var pageIsVisible = true;
	var needsReload = false;

	if('EventSource' in window){
		var es = new EventSource("http://" + location.hostname + ":" + sseport + "/");
		es.onmessage = function(msg){
			
			var obj = JSON.parse(msg.data);

			if(obj.type == 'full'){

				if(pageIsVisible){
					window.location.reload();
				}
				else{
					needsReload = true;
				}

				return;
			}

			if(obj.type == 'css'){

				$('link').each(function(){

					var elem = $(this);

					var parser = document.createElement('a');
					parser.href = elem.attr('href');

					for(var i = 0; i < obj.targets.length; i++){
						var target = '/' + obj.targets[i];

						if(decodeURI(parser.pathname) == target){

							if(pageIsVisible){
								elem.attr('href', target + '?r' + Math.random());
							}
							else{
								needsReload = true;
							}
						}
						
					}
					
				});

			}

		}
	}
	else {
		setInterval(checkForChanges, 2000);
	}


	function checkForChanges(){

		var req = new XMLHttpRequest();

		req.addEventListener("load", function(){

			if(lastchange != this.responseText){
				window.location.reload();
			}

		});

		req.open('GET', '/bs-lastchange', true);
		req.send();

	}

	document.addEventListener("visibilitychange", function(){

		if(document.hidden){
			pageIsVisible = false;
		}
		else{
			pageIsVisible = true;

			if(needsReload){
				window.location.reload();
			}
		}
	});
	
})();

function validate() {
      
  if( document.myForm.name.value == "" ) {
     alert( "Làm ơn nhập tên của bạn!" );
     document.myForm.name.focus() ;
     window.location.reload();
     return false;
  }
  if( document.myForm.email.value == "" ) {
     alert( "Làm ơn nhập email!" );
     document.myForm.email.focus() ;
     window.location.reload();
     return false;
  }
  if( document.myForm.phone.value == "" || isNaN( document.myForm.phone.value ) ||
     document.myForm.phone.value.length != 10 ) {
     
     alert( "Nhập sai số điện thoại, vui lòng nhập lại." );
     document.myForm.phone.focus() ;
     window.location.reload();
     return false;
  }
  return( true );
}

function validateEmail() {
  var emailID = document.myForm.email.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");
  
  if (atpos < 1 || ( dotpos - atpos < 2 )) {
     alert("Làm ơn nhập lại email ID")
     document.myForm.email.focus() ;
     window.location.reload();
     return false;
  }
  return( true );
}

var mysave = document.getElementById('formGroupExampleInput');
function mybtnsave() {

}

(function($) {
	"use strict"; // Start of use strict
  
	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
		  $('html, body').animate({
			scrollTop: (target.offset().top - 57)
		  }, 1000, "easeInOutExpo");
		  return false;
		}
	  }
	});
  
	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function() {
	  $('.navbar-collapse').collapse('hide');
	});
  
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
	  target: '#mainNav',
	  offset: 57
	});
  
	// Collapse Navbar
	var navbarCollapse = function() {
	  if ($("#mainNav").offset().top > 100) {
		$("#mainNav").addClass("navbar-shrink");
	  } else {
		$("#mainNav").removeClass("navbar-shrink");
	  }
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);
  
  
  
	// Magnific popup calls
	$('.popup-gallery').magnificPopup({
	  delegate: 'a',
	  type: 'image',
	  tLoading: 'Loading image #%curr%...',
	  mainClass: 'mfp-img-mobile',
	  gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0, 1]
	  },
	  image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
	  }
	});
  
  })(jQuery); // End of use strict

  function myFunction(imgs) {
	var expandImg = document.getElementById("expandedImg");
	var imgText = document.getElementById("imgtext");
	expandImg.src = imgs.src;
	imgText.innerHTML = imgs.alt;
	expandImg.parentElement.style.display = "block";
  }