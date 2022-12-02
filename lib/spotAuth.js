const spotAuth = async (id, sec) => {
	const client_id = id;
	const client_secret = sec;
	const url = 'https://accounts.spotify.com/api/token';

	const authOptions = {
		method: 'POST',
		headers: {
			'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
			//'Basic MGZkNGNiNzFjZDFiNDAyMjgwMTk5YTk3NDFkYzY5OTY6OTVjZmZkZDcyMjg0NDczMjhiOTQ5OWQ4OGQ5NDNlOTA'
		},
		body: new URLSearchParams({
			'grant_type': 'client_credentials'
		})
	};

	const res = await fetch(url, authOptions);

	const tokObj = await res.json();

	return tokObj;
}

export default spotAuth;