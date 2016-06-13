/* These are JS listeners */
(function() {
  $('.btn-facebook').on('click', function(e) {
	e.preventDefault();
	facebookLogin();
  });
  $('.btn-upload').on('click', function(e) {
	e.preventDefault();
	alert('upload');
  });
})();
(function() {
	// Start listening to resize events and
	// draw canvas.
	initialize();

	function initialize() {
		// Register an event listener to
		// call the resizeCanvas() function each time 
		// the window is resized.
		window.addEventListener('resize', resizeCanvas, false);
		
		// Draw canvas border for the first time.
		resizeCanvas();
	}
	
	// Display custom canvas.
	// In this case it's a blue, 5 pixel border that 
	// resizes along with the browser window.					
	function redraw() {
		globCanvas.strokeStyle = 'blue';
		globCanvas.lineWidth = '5';
		//globCanvas.strokeRect(0, 0, parent.innerWidth, parent.innerHeight);
	}

	// Runs each time the DOM window resize event fires.
	// Resets the canvas dimensions to match window,
	// then draws the new borders accordingly.
	function resizeCanvas() {
		// var profileArea = document.getElementsByClassName('canvas__container');
		
			//con = document.getElementById("profileArea"),
			//htmlcanvas = document.getElementById('c'),
			//aspect = htmlCanvas.height/htmlCanvas.width,    
			//newWidth = ((window.innerWidth / 100) * 80),
			//newHeight = con.height;

			//htmlCanvas.width = width;
			//htmlCanvas.height = Math.round(width * aspect);
		// alert(profileArea.width);
		
		//htmlCanvas.width = window.innerWidth;
		//htmlCanvas.height = window.innerHeight;
		redraw();
	}

})();