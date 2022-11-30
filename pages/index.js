import Head from "next/head";
import Button from "@mui/material/Button";
import Main from "../components/layouts/main/MainLayout";
import Container from "@mui/system/Container";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { flexbox } from "@mui/system";
import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import ShiftyList from "../components/experiments/shiftyList";

export const getStaticProps = async () => {
	const res = await fetch('https://gorest.co.in/public/v2/users');
	const data = await res.json();
	return {
		props: {
			randomData: data
		}
	}
}

const Home = (props) => {
	return <>
		<Head>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
			/>
			<meta name="viewport" content="initial-scale=1, width=device-width" />
		</Head>
		<Main>
			<ShiftyList randos={props.randomData}></ShiftyList>
			<Divider variant="middle"></Divider>
			<Button variant="outlined">Hello World!</Button>
			<Divider></Divider>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus est quis orci tempus suscipit. Maecenas et tincidunt tortor, in porttitor ligula. Sed tincidunt ac felis id consequat. In hac habitasse platea dictumst. Pellentesque erat nulla, fermentum quis facilisis eget, maximus sit amet arcu. Vestibulum efficitur eu odio in gravida. Sed sed arcu maximus, ultrices arcu in, lacinia tellus. Sed ultrices auctor erat quis hendrerit. Aenean interdum purus congue metus molestie, non imperdiet eros condimentum. Suspendisse potenti. Ut id pharetra lorem. Sed ac velit hendrerit, feugiat est quis, scelerisque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas in lobortis nibh, ut tincidunt arcu. Aenean sagittis tellus sit amet finibus maximus.

				Nulla sed tempor tellus. Sed vitae tempor justo. Mauris nec vestibulum mi, id dignissim felis. Ut interdum tincidunt ullamcorper. In gravida orci non velit egestas, et ultricies lorem lobortis. Duis tincidunt porta eros, eu malesuada erat accumsan vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse mattis diam nibh, vitae gravida urna volutpat a. Etiam tincidunt eleifend diam a convallis. Aenean vitae facilisis urna, non porta felis. Donec tempor arcu id laoreet porttitor. Quisque sit amet turpis sed nunc eleifend tincidunt quis eu nulla. Sed fermentum arcu non nulla tristique porttitor. Nunc vitae lacinia leo, vitae lacinia sapien. Proin in tincidunt mauris.
			</p>
			<Divider></Divider>
			<Container style={{ marginTop: '1rem' }}>
				<Grid2 container spacing={4}>
					<Grid2 xs={3} justifyContent="center" alignItems="center">
						<Card raised={true} style={{ minHeight: '100px', textAlign: 'center' }} className={flexbox}>
							<Typography>
								a thing
							</Typography>
						</Card>
					</Grid2>
					<Grid2 xs={3} justifyContent="center" alignItems="center">
						<Card raised={true} style={{ minHeight: '100px', textAlign: 'center' }} className={flexbox}>
							Another thing
						</Card>
					</Grid2>
					<Grid2 xs={3} justifyContent="center" alignItems="center">
						<Card raised={true} style={{ minHeight: '100px', textAlign: 'center' }} className={flexbox}>
							a third thing
						</Card>
					</Grid2>
					<Grid2 xs={3} justifyContent="center" alignItems="center">
						<Card raised={true} style={{ minHeight: '100px', textAlign: 'center' }} className={flexbox}>
							The last thing
						</Card>
					</Grid2>

					<Grid2 item xs={3} style={{ outline: 'solid blue' }}>
						<Card raised={true} style={{ minHeight: '100px', textAlign: 'center' }} className={flexbox}>
							<Typography>
								a thing
							</Typography>
						</Card>
					</Grid2>
					<Grid2 item xs={3} style={{ outline: 'solid red' }}>
						<Card raised={true} style={{ minHeight: '100px', textAlign: 'center' }} className={flexbox}>
							Another thing
						</Card>
					</Grid2>
					<Grid2 item xs={3} style={{ outline: 'solid yellow' }}>
						<Card raised={true} style={{ minHeight: '100px', textAlign: 'center' }} className={flexbox}>
							a third thing
						</Card>
					</Grid2>
					<Grid2 item xs={3} style={{ outline: 'solid purple' }}>
						<Card raised={true} style={{ minHeight: '100px', textAlign: 'center' }} className={flexbox}>
							The last thing
						</Card>
					</Grid2>

					<Grid2 item xs={3} style={{ outline: 'solid blue' }}>
						<Card raised={true} style={{ minHeight: '100px', textAlign: 'center' }} className={flexbox}>
							<Typography>
								a thing
							</Typography>
						</Card>
					</Grid2>
					<Grid2 item xs={3} style={{ outline: 'solid red' }}>
						<Card raised={true} style={{ minHeight: '100px', textAlign: 'center' }} className={flexbox}>
							Another thing
						</Card>
					</Grid2>
					<Grid2 item xs={3} style={{ outline: 'solid yellow' }}>
						<Card raised={true} style={{ minHeight: '100px', textAlign: 'center' }} className={flexbox}>
							a third thing
						</Card>
					</Grid2>
					<Grid2 item xs={3} style={{ outline: 'solid purple' }}>
						<Card raised={true} style={{ minHeight: '100px', textAlign: 'center' }} className={flexbox}>
							The last thing
						</Card>
					</Grid2>
				</Grid2>
			</Container>
			<Divider variant={'middle'}></Divider>
			<Container style={{ outline: 'solid chartreuse', padding: '1rem' }}>
				<Divider variant={'middle'}></Divider>
				<Grid2 container>
					<Grid2 xs display="flex" justifyContent="center" alignItems="center">
						<Divider orientation="vertical" flexItem variant="middle" />
					</Grid2>
					<Grid2 xs={4} display="flex" justifyContent="center" alignItems="center">
						<Card
							raised
							sx={{
								p: 1,
								m: 1,
								minHeight: '100px',
								width: '100%'
							}}
						>
							<Typography>a thing</Typography>
						</Card>
					</Grid2>
					<Grid2 xs display="flex" justifyContent="center" alignItems="center">
						<Divider orientation="vertical" flexItem variant="middle" />
					</Grid2>
					<Grid2 xs={4} display="flex" justifyContent="center" alignItems="center">
						<Card
							raised
							sx={{
								p: 1,
								m: 1,
								minHeight: '100px',
								width: '100%'
							}}
						>
							<Typography>a thing</Typography>
						</Card>
					</Grid2>
					<Grid2 xs display="flex" justifyContent="center" alignItems="center">
						<Divider orientation="vertical" flexItem variant="middle" />
					</Grid2>
					<Grid2 xs={4} display="flex" justifyContent="center" alignItems="center">
						<Card
							raised
							sx={{
								p: 1,
								m: 1,
								minHeight: '100px',
								width: '100%'
							}}
						>
							<Typography>a thing</Typography>
						</Card>
					</Grid2>
					<Grid2 xs display="flex" justifyContent="center" alignItems="center">
						<Divider orientation="vertical" flexItem variant="middle" />
					</Grid2>
				</Grid2>
				<Divider variant={'middle'}></Divider>
			</Container>
			<Divider variant={'middle'}></Divider>
		</Main>
	</>
}

export default Home;