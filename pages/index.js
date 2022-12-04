import Head from "next/head";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import { CardContent, FormControl, FormHelperText, Input, InputLabel, Typography } from "@mui/material";
import Contents from "../components/layouts/Contents";
import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Stack } from "@mui/system";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = (props) => {
	const [searchTerm, setSearchTerm] = useState('');

	const changeHandler = (e) => {
		setSearchTerm(e.target.value);

	}

	const buttonClickHandler = (e) => {
		slug = encodeURI(searchTerm);
		console.log(searchTerm);
	}

	let slug = searchTerm;

	return <>
		<Head>
			<meta name="viewport" content="initial-scale=1, width=device-width" />
		</Head>
		<Contents>
			<Divider variant={'middle'} sx={{m:'1rem'}}></Divider>
			<Grid2 display='flex' spacing={2} justifyContent="center" alignItems="center">
				<Card>
					<CardContent>
						<Typography>Who would you like to search for?</Typography>
					</CardContent>
					<Divider></Divider>
					<CardContent>
						<form action={slug} method="get">
							<Stack>
								<FormControl variant="outlined">
									<InputLabel htmlFor="my-input">Who?</InputLabel>
									<Input
										id="my-input"
										aria-describedby="my-helper-text"
										onChange={changeHandler}
										value={searchTerm}
										placeholder='Who are you looking for?'
									/>
									<FormHelperText id="my-helper-text">We'll never share our candy.</FormHelperText>
								</FormControl>
								<FormControl>
									<Button
										variant="contained"
										onClick={buttonClickHandler}
										type='submit'
									>
										Search
									</Button>
								</FormControl>
							</Stack>
						</form>
					</CardContent>
				</Card>
			</Grid2>
			<Divider variant={'middle'} sx={{m:'1rem'}}></Divider>
		</Contents>
	</>
}

export default Home;