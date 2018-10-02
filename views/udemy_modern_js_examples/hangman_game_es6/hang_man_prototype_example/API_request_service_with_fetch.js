'use strict';

//this service which is closure
const urlRequestPromiseFetch = (() => {

	return {
		getAllCb:(countryCode) => {

			/*
					basic fetch method it would look like that 

					fetch('https://davidwalsh.name/some/url').then(function(response) {
						
					}).catch(function(err) {
						// Error :(
					});

					but you can also specify headers, response attributes etc..
			*/



			//get status chained 
			const status = (response) => {
			  if (response.status >= 200 && response.status < 300) {
			    return Promise.resolve(response)
			  } else {
			    return Promise.reject(new Error(response.statusText))
			  }
			}

			//get json response chained after status;
			const json = (response) => {
			  return response.json()
			}

			const selectCountryCode = (countryCode) => (res) => res.find((res)=> res.alpha2Code === countryCode);

			//chain main fetch to the object method getAllCb(); by return it 

			return fetch('http://restcountries.eu/rest/v2/all')
					  .then(status) //chaining
					  .then(json)   //chaining
					  .then(selectCountryCode(countryCode))   //chaining
					  .then((data) => data)
					  .catch((error) => error);
		
		}
	}
})();