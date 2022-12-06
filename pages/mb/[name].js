import getMusicBrainzSearchArtistList from "../../lib/getMusicBrainzSearchArtistList";
import CardGrid from "../../components/experiments/CardGrid";
import Contents from "../../components/layouts/Contents"

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
		<Contents>
			<CardGrid artists={props.artistIdList} path={'mb/list'}></CardGrid>
		</Contents>
	);
}

export default Name;