//https://musicbrainz.org/ws/2/release?artist=66fc5bf8-daa4-4241-b378-9bc9077939d2&fmt=json&status=official&inc=recordings
const getAlbumsAndTracks = async (artistId) => {

	const url = 'https://musicbrainz.org/ws/2/release?'

	let offset = 0;
	let rc = 0;

	const data = [];

	const options = {
		'method': 'get',
		'headers': {
			'accept': 'application/json',
			'user-agent': 'developing sort tracks by fav app/a0.0.0.1'
		}
	};

	do {
		const params = new URLSearchParams({
			'artist': artistId,
			'fmt': 'json',
			'status': 'official',
			'inc': 'recordings',
			'country': 'US',
			'offset': offset
		});
	
		const res = await fetch(url + params, options);
		const jdata = await res.json();
		data[data.length] = jdata;
		rc = jdata['release-count'];
		offset += 25;
		
	} while (offset < rc);//offset < data.release-count);

	return {
		data,
	};
	/* 	return {
			uri:url + params
		} */
}

export default getAlbumsAndTracks;