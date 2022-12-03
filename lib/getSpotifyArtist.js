const getSpotifyArtist = async (q, token) => {
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
	const artists = await res.json();
	const artist = artists.artists.items[0];

	return {
		id: artist.id,
		name: artist.name,
		imgUrl : artist.images[0].url,
		albums : []
	}
}

export default getSpotifyArtist;