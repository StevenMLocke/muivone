
const getSpotifyAlbumIds =  async (artistId, token) => {
	const url = 'https://api.spotify.com/v1/artists/' + artistId + '/albums?';
	
	const params = new URLSearchParams({
		'include_groups' : 'album',
		'market' : 'US'
	});

	const headers = {
		'Authorization' : 'Bearer ' + token.access_token
	};

	const options = {
		method : 'GET',
		headers,
	};

	let uri = url + params;

	const albumIdsArr = [];

	do {
	let res = await fetch(uri, options);

	let albumsData = await res.json();

	let tempArr = albumsData.items.map((item) => item.id);

	albumIdsArr[albumIdsArr.length] = tempArr;

	uri = albumsData.next ? albumsData.next : null;

	}while(uri);

	return {
		albumIdsArr //[[0-19], [20-29],...]
	}
}

export default getSpotifyAlbumIds;