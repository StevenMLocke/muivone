import { indexOf } from "lodash";
import getAlbumsAndTracks from "../../../lib/getAlbumsAndTracks";
export const getServerSideProps = async (ctx) => {

	const q = ctx.query;

	const list = await getAlbumsAndTracks(q.id);

/* 	const test = list.map((set, i) => {
		return set.releases.filter((release) => {
			return release.country == 'US'
		}).map((filtered) => {
			return {
				id: filtered.id,
				name: filtered.title,
				tracks: filtered.media[0].tracks.map((track) => {
					return {
						trackId: track.id,
						trackNum: track.number,
						trackName: track.title
					}
				}),
				country: filtered.country
			}
		})
	}).flat(); */

	const test = list.map((set) => {
		return set.releases.filter((release) => release.country == 'US')
	});

	const data = ['a'];
	const albumNames = [];

	const flat = test.flat();

	flat.forEach((rel) => { 
		if (albumNames.indexOf(rel.title) < 0) { 
			albumNames[albumNames.length] = rel.title;
			data[data.length] = rel;
		}
	})

	return {
		props: {
			q,
			data
		}
	}
}

const id = (props) => {
	console.log(props)
	return (
		<div>
			Check Console...
		</div>
	);
}

export default id;