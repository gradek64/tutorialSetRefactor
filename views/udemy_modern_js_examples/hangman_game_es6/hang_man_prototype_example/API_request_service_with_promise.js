'use strict';

//this service which is closure
const urlRequestPromise = (() => {

	return {
		getAllCb:(wordCount) => new Promise( (resolve,reject) => {

			var xhttp2 = new XMLHttpRequest();
			const countryCode = "PL";
			xhttp2.onreadystatechange = (e)=> {
			    if (e.target.readyState == 4 && e.target.status == 200) {
			       const data = JSON.parse(e.target.responseText);
			       resolve(data);
			    }else if (e.target.readyState == 4 ){
			    	const error = 'Something got wrong in between';
			    	reject(error);
			    }
			};
			xhttp2.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, true);
			xhttp2.send();

		})
	};
	
})();
