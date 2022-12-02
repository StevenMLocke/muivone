
const getSpotifyAlbumIds =  async (artistId, token) => {
	const url = 'https://api.spotify.com/v1/artists/' + artistId + '/albums?';
	
	const params = new URLSearchParams({
		'include_groups' : 'album,single'
	});

	const headers = {
		'Authorization' : 'Bearer ' + token.access_token
	};

	const options = {
		method : 'GET',
		headers,
	};

	const res = await fetch(url + params, options)

	const albumsData = await res.json();

	const albumIdsArr = albumsData.items.map((item) => {
		return item.id
	})

	return {
		albumIdsArr
	}
}

export default getSpotifyAlbumIds;