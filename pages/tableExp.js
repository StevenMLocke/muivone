import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import shuffle from "lodash/shuffle";
import { useState } from "react";
import { Flipped, Flipper } from "react-flip-toolkit";
import { Button, ButtonGroup, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { Box } from "@mui/system";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownward from "@mui/icons-material/ArrowDownward";

const ATable = ({ props }) => {
	const [data, setData] = useState(props);
	const headers = Object.keys(props[0]);
	headers[headers.length] = 'rank';
	headers[headers.length] = <SwapVertIcon />

	const shuffleList = () => {
		console.log(data);
		setData(shuffle(data));
	}

	const arrowClickHandler = (event) => {
		const ind = parseInt(event.currentTarget.getAttribute('ind'))
		const direction = event.currentTarget.id;

		let tempArr = [...data];

		if (direction === 'up' && ind > 0) {
			const pulled = tempArr.splice(ind, 1)[0]
			tempArr.splice(ind - 1, 0, pulled)
		} else if (ind < tempArr.length - 1 && direction === 'down') {
			const pulled = tempArr.splice(ind, 1)[0]
			tempArr.splice((ind + 1), 0, pulled)
		}

		setData(tempArr)
	};

	return (
		<Flipper flipKey={data} >
			<Grid2 xs container>
				<Box sx={{ m: 'auto' }}>
					<Button variant="contained" onClick={shuffleList}>Shuffle</Button>
				</Box>
			</Grid2>
			<TableContainer component={Paper} elevation={20}>
				<Table size="small">
					<TableHead>
						<TableRow>
							{headers.map((header) => {
								return (
									<TableCell align="center">{header}</TableCell>
								)
							})}
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((row, i) =>
							<Flipped flipId={row.id} key={i}>
								<TableRow>
									<TableCell>{row.id}</TableCell>
									<TableCell>{row.name}</TableCell>
									<TableCell>{row.email}</TableCell>
									<TableCell>{row.gender}</TableCell>
									<TableCell>{row.status}</TableCell>
									<TableCell>{i + 1}</TableCell>
									<TableCell>
										<ButtonGroup
											variant="contained"
											size="small"
											color="primary"
										>
											<Button id='up' ind={i} onClick={arrowClickHandler}>
												<ArrowUpwardIcon />
											</Button>
											<Button id='down' ind={i} onClick={arrowClickHandler}>
												<ArrowDownward />
											</Button>
										</ButtonGroup>
									</TableCell>
								</TableRow>
							</Flipped>
						)}
					</TableBody>
				</Table >
			</TableContainer>
		</Flipper>
	)
}

export default ATable;