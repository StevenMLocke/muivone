import spotAuth from "../lib/spotAuth";
import getSpotifySearchArtistsList from "../lib/getSpotifySearchArtistsList";
import { List, ListItem } from "@mui/material";
import Link from "next/link";
import Card from "@mui/material/Card";

export const getServerSideProps = async (ctx) => {
	const q = ctx.query.search;
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
	console.log(list);
	return (
		<Card raised>
			<List>
				{list.map((item) => {
					return <ListItem><Link href={`/band/${encodeURI(item.name)}`} >{item.name}</Link></ListItem>
				})}
			</List>
		</Card>
	);
}

export default search;