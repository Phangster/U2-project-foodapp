console.log('foo is working')
window.onload = function(){

	document.querySelector("#pp").addEventListener('click', function(){

		var responseHandler = function() {
		  console.log("response text", this.responseText);
		  console.log("status text", this.statusText);
		  console.log("status code", this.status);
		};

		ajaxUrl = 'http://localhost:3000/user/home'

		// make a new request
		var request = new XMLHttpRequest();

		// listen for the request response
		request.addEventListener("load", responseHandler);

		// ready the system by calling open, and specifying the url
		request.open("GET", ajaxUrl);

		// send the request
		request.send();



	})

};