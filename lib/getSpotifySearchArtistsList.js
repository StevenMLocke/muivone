const getSpotifySearchArtistsList = async (q, token) => {
	const url = "https://api.spotify.com/v1/search?"
	const params = new URLSearchParams({
		'type' : 'artist',
		'market' : 'US',
		'q'	: q
	})
	const headers = {
		'Authorization' : 'Bearer ' + token.access_token
	}

	const options = {
		method : 'GET',
		headers,
	}

	const res = await fetch(url + params, options)
	const data = await res.json();
	return data.artists.items.map((artist) => {
		return {
			id : artist.id,
			name : artist.name,
			images : artist.images,
		}
	});
}

export default getSpotifySearchArtistsList;