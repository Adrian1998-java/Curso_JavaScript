//https://github.com/public-apis/public-apis#development
console.log("### fetch() ###");

/*=============================================
FUNCIÓN FETCH(): Nos permite ejecutar servicios HTTP: GET, POST, PUT, DELETE
=============================================*/

let getApi = () =>{

	const endPoint = "http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en";

	const params = {

		method: "GET",
		header: {

			"Content-Type": "application/json"
		}
	}

	fetch(endPoint, params).then( response =>{
		
		// console.log("response", response);

		return response.json();

	}).then(result => {

		const resultado = result.sanctorale;
		
        console.log("resultado", resultado);

		const {title, language} = resultado;
		
		console.log("title", title);	

	})

}

getApi();
