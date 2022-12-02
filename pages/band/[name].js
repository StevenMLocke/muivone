import getSpotifyArtist from "../../lib/getSpotifyArtist";
import getSpotifyAlbumIds from "../../lib/getSpotifyAlbumIds";
import spotAuth from "../../lib/spotAuth";
import getSpotifyAlbums from "../../lib/getSpotifyAlbums";

export async function getServerSideProps({ query }) {
	const client_id = process.env.SPOTIFY_CLIENT_ID;
	const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

	const token = await spotAuth(client_id, client_secret);
	const artistObj = await getSpotifyArtist(query.name, token);
	const albumsIds = await getSpotifyAlbumIds(artistObj.id, token);
	const albumsQueryString = albumsIds.albumIdsArr.join(',');

	artistObj.albums = await getSpotifyAlbums(albumsQueryString, token);

	return {
		props: {
			query,
			artistObj,
			albumsQueryString
		}
	}
}

const Band = (props) => {
	console.log(props)
	return (
		<>
			check the console!
		</>
	)
}

export default Band;