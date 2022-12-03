import getSpotifyArtist from "../../lib/getSpotifyArtist";
import getSpotifyAlbumIds from "../../lib/getSpotifyAlbumIds";
import spotAuth from "../../lib/spotAuth";
import getSpotifyAlbums from "../../lib/getSpotifyAlbums";
import TracksTable from "../../components/experiments/TracksTable";
import Contents from "../../components/layouts/Contents";
import { Promise } from "bluebird";

export async function getServerSideProps({ query }) {
	const client_id = process.env.SPOTIFY_CLIENT_ID;
	const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

	const token = await spotAuth(client_id, client_secret);
	const artistObj = await getSpotifyArtist(query.name, token);
	const albumsIds = await getSpotifyAlbumIds(artistObj.id, token);

	artistObj.albums = await Promise.map(albumsIds.albumIdsArr, async (arr) => {
		return await getSpotifyAlbums(arr.join(","), token);
	}, {concurrency: 2})

	artistObj.albums = artistObj.albums.flat();

	return {
		props: {
			artistObj,
		}
	}
}

const Band = (props) => {
	//console.log(props);
	const tracks = [];
	const albumNames = [];

	props.artistObj.albums.forEach((album) => {
		if (albumNames.indexOf(album.name) === -1) {
			albumNames[albumNames.length] = album.name;
			album.tracks.forEach((track) => {
				tracks[tracks.length] = {
					id : track.id,
					name: track.name,
					album : album.name
				}
			})
		}
	})

	console.log(tracks);

	return (
		<Contents>
			Check Console...
			<TracksTable tracks={tracks}></TracksTable>
		</Contents>
	)
}

export default Band;