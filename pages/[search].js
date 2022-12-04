import spotAuth from "../lib/spotAuth";
import getSpotifySearchArtistsList from "../lib/getSpotifySearchArtistsList";
import CardGrid from "../components/experiments/CardGrid";

export const getServerSideProps = async (ctx) => {
	const q = decodeURI(ctx.query.search);
	const scid = process.env.SPOTIFY_CLIENT_ID;
	const scs = process.env.SPOTIFY_CLIENT_SECRET;
	const token = await spotAuth(scid, scs);
	const list = await getSpotifySearchArtistsList(q, token);
	return {
		props: {
			q,
			list,
		}
	}
}

const search = ({ q, list }) => {
	return (
		<CardGrid artists={list}>
		</CardGrid>
	);
}

export default search;