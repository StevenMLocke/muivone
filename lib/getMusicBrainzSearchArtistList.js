import { get } from "lodash";

const getMusicBrainzSearchArtistList = async (q) => {
	const urlBase = 'https://musicbrainz.org/ws/2/artist?';
	const params = new URLSearchParams(
		{
			'query':q
		}
	)

	const options = {
		'method': 'get',
		headers: {
			'accept': 'application/json',
			'user-agent': 'developing sort tracks by fav app/a0.0.0.1'
		}
	}

	const res = await fetch(urlBase + params, options);
	const data = await res.json();

	return data.artists.map((artist) => { 
		return {
			id: artist.id,
			name: artist.name,
			reliability: artist.score
		}
	});
}

export default getMusicBrainzSearchArtistList;