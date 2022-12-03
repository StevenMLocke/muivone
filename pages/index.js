import Head from "next/head";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import { FormControl, FormHelperText, Input, InputLabel, Typography } from "@mui/material";
import Contents from "../components/layouts/Contents";
import { useState } from "react";

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
			<Divider variant={'middle'}></Divider>
			<Card>
				<form action={slug} method="get">
					<FormControl>
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
							onClick={buttonClickHandler}
							type='submit'
						>
							A button
						</Button>
					</FormControl>
				</form>
			</Card>
			<Divider variant={'middle'}></Divider>
		</Contents>
	</>
}

export default Home;