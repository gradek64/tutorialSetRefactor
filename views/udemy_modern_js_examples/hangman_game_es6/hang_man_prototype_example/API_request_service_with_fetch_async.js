'use strict';

//this service which is closure
const urlRequestPromiseFetchAwait = (() => {

	return {
		getAsyncExamples:() => {



			/*
					const processData =  async () => {
						return 12 
					}

					IMPORATAMT async method always returns a promise ! so the above has to be resolve in promise 

					processData().then((data)=>{ console.log(data) }); //return 12
			*/

			/*
				the real cool feature is async() with await promise (await always come with async)
			*/

			/*
				Async and await example;
			*/

			const myPromise = (num) => new Promise((resolve,reject)=>{
				setTimeout(()=>{
					resolve(num+2);
				},1000)
			});
			myPromise(2).then((res)=>{ console.log(res); }); //return 4 

			//the cool thing is the entire code could be replace with await but has to be in async promise wrapper function;
			const processData1 = async () => {
					let awaitResult = await myPromise(2);
					awaitResult = await myPromise(awaitResult);  //you can chain them like below
					awaitResult = await myPromise(awaitResult);
					return awaitResult;
			}

			//processData1 is promise so needs to be resolved as promise;

			processData1().then((awaitResult)=>{ console.log(awaitResult) }); //return 8 from 3 await promise;
		
		},
		getAllCb: async (countryCode) => {
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

			//fetch is a promise so it could be set in await but wrapped in promise async (async is set getAllCb: sync (countryCode))

				 const response = await fetch('http://restcountries.eu/rest/v2/all');
				 const statusBack = await status(response);	//either promise or  return funciton could be in the chain !
				 const jsonFormat = await json(statusBack); //every return funciton or promise could be return in the chain !
				 const pickCountry = await selectCountryCode(countryCode)(jsonFormat);


				return pickCountry;

		},
	}
})();


