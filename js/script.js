$(function(){
	/*
	$("#main").css("display", "none").fadeIn(500); 
    $("#main").css("display", "static").fadeIn(500);
	$("a").click(function(event){
    	event.preventDefault();
    	linkLocation = this.href;
    	$("#main").fadeOut(1000, redirectPage);
    });
	*/

    	 function redirectPage() {
    	 	window.location = linkLocation;
    	 }
	
	
	
		$('a[rel*=external]').click( function() {
			window.open(this.href);
			return false;
		});
		
		$('header nav ul li a.selected').click(function(){
			return false;
		})
		
		$('span#btn-grid').click(function(){
			($(this).html() == 'off') ? $(this).html('on') : $(this).html('off')
			$('#grid').toggleClass('hidden');
		});
		
		window.onload = function(){
			// Render the grid (unless on IE)
			if (!$.browser.msie) { createGrid(); }
		};

});

var createRedLine = function() {
	var i = 969, container = document.createDocumentFragment();
	while(i--)
	{
		var pixel = document.createElement('div');
		pixel.className = 'pixel';
		pixel.style.left = (968-i)+"px";
		pixel.style.top = i+"px";
		container.appendChild(pixel);
	}
	$('#red-line').append(container);
}

var createGrid = function() {
	var grid = document.createDocumentFragment();
	var alto = $(document).height() / 20;

	for(i=1; i<24; i++) {
		var row = document.createElement('div');
		row.className = 'row';
		row.style.left = (32*i)+"px";
		grid.appendChild(row);
	}
	for(i=1; i<alto; i++) {
		var column = document.createElement('div');
		column.className = 'column';
		column.style.top = (20*i)+"px";
		grid.appendChild(column);
	}
	
	$('#grid').append(grid).css('height', $(document).height()+'px')
}



