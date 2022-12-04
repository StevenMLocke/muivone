const getSpotifyArtist = async (q, token) => {
	const url = "https://api.spotify.com/v1/artists/"

	const headers = {
		'Authorization' : 'Bearer ' + token.access_token
	}

	const options = {
		method : 'GET',
		headers,
	}

	const res = await fetch(url + q, options)
	const artist = await res.json();

	return {
		id: artist.id,
		name: artist.name,
		images : artist.images,
		albums : []
	}
}

export default getSpotifyArtist;