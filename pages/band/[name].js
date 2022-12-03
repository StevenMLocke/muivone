import getSpotifyArtist from "../../lib/getSpotifyArtist";
import getSpotifyAlbumIds from "../../lib/getSpotifyAlbumIds";
import spotAuth from "../../lib/spotAuth";
import getSpotifyAlbums from "../../lib/getSpotifyAlbums";
import ATable from "../../components/experiments/tableExp";
import Contents from "../../components/layouts/Contents";

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
	const tracks = [];
	const albumNames = [];

	props.artistObj.albums.forEach((album) => {
		console.log(album.name);
		if (albumNames.indexOf(album.name) === -1) {
			albumNames[albumNames.length] = album.name;
		}
		console.log(album.name);
		album.tracks.items.forEach((track) => {
			tracks[tracks.length] = {
				id : track.id,
				name: track.name,
				album : album.name
			}
		})
	})

	//console.log(tracks);
	return (
		<Contents>
			<ATable tracks={tracks}></ATable>
		</Contents>
	)
}

export default Band;