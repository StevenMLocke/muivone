import Head from "next/head";
import Button from "@mui/material/Button";
import Main from "../components/layouts/main/MainLayout";
import Container from "@mui/system/Container";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { flexbox } from "@mui/system";
import { FormControl, FormHelperText, Input, InputLabel, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import ShiftyList from "../components/experiments/shiftyList";
import useSWR from 'swr';
import ATable from "../components/experiments/tableExp";
import Contents from "../components/layouts/Contents";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = (props) => {
/* 	const { data, error } = useSWR('https://gorest.co.in/public/v2/users', fetcher)

	if (error) return <div>Failed to load</div>
	if (!data) return <div>Loading...</div> */

	const [searchTerm, setSearchTerm] = useState('Who');

	const changeHandler = (e) => {
		setSearchTerm(e.target.value);

	}

	const buttonClickHandler = (e) => {
		e.preventDefault();
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
						<InputLabel htmlFor="my-input">{searchTerm}</InputLabel>
						<Input id="my-input" aria-describedby="my-helper-text" onChange={changeHandler}/>
						<FormHelperText id="my-helper-text">We'll never share our candy.</FormHelperText>
					</FormControl>
					<FormControl>
						<Button onClick={buttonClickHandler}>
							A button
						</Button>
					</FormControl>
					<button type="submit">Submit</button>
				</form>
			</Card>
			<Divider variant={'middle'}></Divider>
		</Contents>
	</>
}

export default Home;