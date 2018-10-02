'use strict';

//this service which is closure
const urlRequest = (() => {

	return {
		getAllCb:(callback)=>{
			var xhttp2 = new XMLHttpRequest();
			const countryCode = "PL";
			xhttp2.onreadystatechange = (e)=> {
			    if (e.target.readyState == 4 && e.target.status == 200) {
			       const data = JSON.parse(e.target.responseText);
			       callback(data, undefined);
			    }else if (e.target.readyState == 4 ){
			    	const error = 'Something got wrong in between';
			    	callback(undefined, error);
			    }
			};
			xhttp2.open("GET", "http://restcountries.eu/rest/v2/all", true);
			xhttp2.send();
		}
	};
	
})();
