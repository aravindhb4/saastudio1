function smoothScroll() {
	// Add smooth scrolling to all links
    $("a").on('click', function(event) {
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
        } // End if
    });
}
function populatePics(){
	for(i=1; i<=30; i++){
		$('#populateTitlePics').append("<div class='col-xs-4 col-sm-4 col-md-2 col-lg-2 flip-container'><img src='src/images/minified/"+i+".jpg' class='img-responsive'></div>");
	}
	$('.menuRight').mouseover(function(){
		$(this).addClass('active');
	});
	$('.menuRight').mouseout(function(){
		$(this).removeClass('active');
	});
	$('.menuRight, .sideNavClose').click(function(){
		//$('.menuRight, .sideNav').toggleClass('hide');
		setTimeout(function(){
			$('.sideNav').toggleClass('active');
			$('.sideNavClose, .menuRight').toggleClass('hide');
		}, 100);
	});
}

function eventsSlideInit(item){
	$('#contentBody').toggleClass('active hide');
	$('.eventTitle').toggleClass('hide');
	refreshContent();
	switch(item){
		case 1:
			contentPopulateJson(0);
			$('#event'+item).toggleClass('active fleft');
			$('#contentBody').toggleClass('fright');
			
		break;
		case 2:
			contentPopulateJson(1);
			$('#event'+item).toggleClass('active fleft');
			$('#contentBody').toggleClass('fright');
			//$('.events25:not(#event'+item+')').toggleClass('width1 inactive');
		break;
		case 3:
			contentPopulateJson(2);
			$('#event'+item).toggleClass('active fright');
			$('#contentBody').toggleClass('fleft');
			//$('.events25:not(#event'+item+')').toggleClass('width1 inactive');
		break;
		case 4:
			contentPopulateJson(3);
			$('#event'+item).toggleClass('active fright');
			$('#contentBody').toggleClass('fleft');
			//$('.events25:not(#event'+item+')').toggleClass('width1 inactive');
		break;
		default:
	}
	$('.events25').toggleClass('width1 inactive');
}

function backToSections(){
	$('#contentBody').addClass('hide');
	$('.events25').removeClass('inactive width1 fleft fright active');
}

function contentPopulateJson(eventIndex){
	$('#albums').empty();
	$('.menuicon').toggleClass('hide');
	$('#contentTitle').text(contentJSON[eventIndex].eventTitle);
	$('#contentInnerWrapper').text(contentJSON[eventIndex].wrapperContent);
	if(eventIndex != 1){
		for(var index in contentJSON[eventIndex].albums){
			$('#albums').append('<div id="album'+(parseInt(index)+1)+'" class="album col-lg-4 col-md-4 col-sm-6 col-xs-12"><div class="albumImg"><div class="albumHover"></div><img class="img-responsive" onclick="javascript:weddingAlbum('+ (parseInt(index)+1) +');" src="'+ contentJSON[eventIndex].albums[index].titleImage +'"></div><div class="albumTitle">'+ contentJSON[eventIndex].albums[index].albmTitle +'</div></div>');
		}
	}
	else{
		$('#albums').append('<iframe width="100%" height="300" src="https://www.youtube.com/embed/bLwkyc7DNTg" frameborder="0" allowfullscreen></iframe><div class="albumTitle">Swetha <3 Aravind</div>');
		$('#albums').css('width','100%');
	}
}

function weddingAlbum(albumNo){
	var dummy = "javascript:contentPopulateJson(0);";
	$('#albums').empty();
	$('#albums').addClass('col-xs-12 col-sm-12 col-md-12 col-lg-12');
	$('#albums').append('<div id="backToAlbumbutton" onclick="'+ dummy +'"><i class="fa fa-chevron-left" aria-hidden="true"></i><span>Albums</span></div><div id="subAlbumTitle">'+ contentJSON[0].albums[parseInt(albumNo)-1].albmTitle +'</div');
	for(i=1; i<=10; i++){
		$('#albums').append("<img class='albumPics col-xs-12 col-sm-6 col-md-4 col-lg-4' src='src/images/Wedding/Album"+ albumNo +"/1.jpg' class='padB20 img-responsive'>");
	}
}

function refreshContent(){
	$('#contentTitle, #contentInnerWrapper, #albums').empty();
}

var contentJSON = [
	{
		"eventTitle" : "Wedding Photography",
		"wrapperContent" : "In eget augue mi. Vivamus id lacinia justo, sit amet rhoncus libero. Integer ac ultrices augue, a convallis ante. In porta diam porta eros condimentum varius. Nam eros dui, luctus a ante sed, bibendum mattis elit. Nulla eget tellus non tellus vehicula luctus. Vestibulum sollicitudin eget est vitae fermentum.",
		"albums" : [
			{
				"titleImage" : "src/images/Wedding/Album1/1.jpg",
				"images" : "",
				"albmTitle" : "Aravind <img class='hearts' src='src/images/heart.png'> Swetha"
			},
			{
				"titleImage" : "src/images/Wedding/Album2/1.jpg",
				"images" : "",
				"albmTitle" : "Abhishek <img class='hearts' src='src/images/heart.png'> Saranya"
			},
			{
				"titleImage" : "src/images/Wedding/Album3/1.jpg",
				"images" : "",
				"albmTitle" : "Aravind <img class='hearts' src='src/images/heart.png'> Swetha"
			},
			{
				"titleImage" : "src/images/Wedding/Album4/1.jpg",
				"images" : "",
				"albmTitle" : "Aravind <img class='hearts' src='src/images/heart.png'> Swetha"
			}
		]
	},
	{
		"eventTitle" : "Wedding Videography",
		"wrapperContent" : "In eget augue mi. Vivamus id lacinia justo, sit amet rhoncus libero. Integer ac ultrices augue, a convallis ante. In porta diam porta eros condimentum varius. Nam eros dui, luctus a ante sed, bibendum mattis elit. Nulla eget tellus non tellus vehicula luctus. Vestibulum sollicitudin eget est vitae fermentum.",
		"albums" : [
			{
				"titleImage" : "src/images/Wedding/Album1/1.jpg",
				"images" : "",
				"albmTitle" : "Aravind <3 Swetha"
			},
			{
				"titleImage" : "src/images/Wedding/Album2/1.jpg",
				"images" : "",
				"albmTitle" : "Abhishek <3 Saranya"
			},
			{
				"titleImage" : "src/images/Wedding/Album3/1.jpg",
				"images" : "",
				"albmTitle" : "Aravind <3 Swetha"
			},
			{
				"titleImage" : "src/images/Wedding/Album4/1.jpg",
				"images" : "",
				"albmTitle" : "Aravind <3 Swetha"
			}
		]
	},
	{
		"eventTitle" : "Fashion Photography",
		"wrapperContent" : "In eget augue mi. Vivamus id lacinia justo, sit amet rhoncus libero. Integer ac ultrices augue, a convallis ante. In porta diam porta eros condimentum varius. Nam eros dui, luctus a ante sed, bibendum mattis elit. Nulla eget tellus non tellus vehicula luctus. Vestibulum sollicitudin eget est vitae fermentum.",
		"albums" : [
			{
				"titleImage" : "src/images/Wedding/Album1/1.jpg",
				"images" : "",
				"albmTitle" : "Aravind <3 Swetha"
			},
			{
				"titleImage" : "src/images/Wedding/Album2/1.jpg",
				"images" : "",
				"albmTitle" : "Abhishek <3 Saranya"
			},
			{
				"titleImage" : "src/images/Wedding/Album3/1.jpg",
				"images" : "",
				"albmTitle" : "Aravind <3 Swetha"
			},
			{
				"titleImage" : "src/images/Wedding/Album4/1.jpg",
				"images" : "",
				"albmTitle" : "Aravind <3 Swetha"
			}
		]
	},
	{
		"eventTitle" : "Other Events",
		"wrapperContent" : "In eget augue mi. Vivamus id lacinia justo, sit amet rhoncus libero. Integer ac ultrices augue, a convallis ante. In porta diam porta eros condimentum varius. Nam eros dui, luctus a ante sed, bibendum mattis elit. Nulla eget tellus non tellus vehicula luctus. Vestibulum sollicitudin eget est vitae fermentum.",
		"albums" : [
			{
				"titleImage" : "src/images/Wedding/Album1/1.jpg",
				"images" : "",
				"albmTitle" : "Aravind <3 Swetha"
			},
			{
				"titleImage" : "src/images/Wedding/Album2/1.jpg",
				"images" : "",
				"albmTitle" : "Abhishek <3 Saranya"
			},
			{
				"titleImage" : "src/images/Wedding/Album3/1.jpg",
				"images" : "",
				"albmTitle" : "Aravind <3 Swetha"
			},
			{
				"titleImage" : "src/images/Wedding/Album4/1.jpg",
				"images" : "",
				"albmTitle" : "Aravind <3 Swetha"
			}
		]
	}
	]

