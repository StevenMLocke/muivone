import getAlbumsAndTracks from "../../../lib/getAlbumsAndTracks";
export const getServerSideProps = async (ctx) => {
	
	const q = ctx.query;

	const list = await getAlbumsAndTracks(q.id);

	return {
		props:{
			q,
			list
		}
	}
}

const id = ({ q, list }) => {
	console.log(q);
	console.log(list);
	return (
		<div>
			Check Console...
		</div>
	);
}

export default id;