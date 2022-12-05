import getMusicBrainzSearchArtistList from "../../lib/getMusicBrainzSearchArtistList";

export const getServerSideProps = async (ctx) => {
	const artistIdList = await getMusicBrainzSearchArtistList(ctx.query.name)
	return {
		props: {
			q: ctx.query,
			artistIdList,
		}
	}
}

const Name = (props) => {
	console.log(props.q)
	console.log(props.artistIdList);
	return (
		<div>
			{props.q.name}
		</div>
	);
}

export default Name;