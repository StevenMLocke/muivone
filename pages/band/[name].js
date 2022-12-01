import useSWR from "swr";

export async function getServerSideProps({ query }) {
	const fetcher = (...args) => { fetch(...args).then((res) => res.json()) };
	
	const authString = Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64url');
	const url = 'https://accounts.spotify.com/api/token';
	const options = {
		'headers': {
			'Authorization' : 'Basic ' + authString
		}
	}

	const [data, err] = useSWR([url, options], fetcher);

	return {
		props: {
			query,
			data
		}
	}
}

const Band = ({ query, data }) => { 
	console.log({ query });
	console.log(data);
	return (
		<>
			check the console!
		</>
	)
}

export default Band;