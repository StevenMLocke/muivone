import shuffle from "lodash/shuffle";
import { useEffect, useState } from "react";
import { Flipped, Flipper } from "react-flip-toolkit";
import { Button, ButtonGroup, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { Box } from "@mui/system";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import { indexOf } from "lodash";

const TracksTable = ({ tracks }) => {
	const [data, setData] = useState(tracks);
	const [flip, setFlip] = useState(true);

	const headers = Object.keys(tracks[0]);
	headers.shift();
	headers[headers.length] = 'rank';
	headers[headers.length] = <SwapVertIcon />


	const shuffleList = () => {
		setData(shuffle(tracks));
		setFlip(!flip)
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
		setData(tempArr);
		setFlip(!flip);
	};

	return (
		<Stack>
			<Box sx={{ m: 'auto' }}>
				<Button variant="contained" onClick={shuffleList}>Shuffle</Button>
			</Box>
			<TableContainer component={Paper} elevation={20}>
				<Flipper flipKey={flip} >
					<Table size="small">
						<TableHead>
							<TableRow>
								{headers.map((header) => {
									return (
										<TableCell key={header}
											align="center"
										>{header}</TableCell>
									)
								})}
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map((track, i) =>
								<Flipped flipId={track.id} key={i}>
									<TableRow sx={{willChange:'transform'}}>
										<TableCell>{track.name}</TableCell>
										<TableCell>{track.album}</TableCell>
										<TableCell align='center'>{i + 1}</TableCell>
										<TableCell align='center'>
											<ButtonGroup
												variant="contained"
												size="small"
												color="primary"
											>
												<Button
													id='up'
													ind={i}
													onClick={arrowClickHandler}
												>
													<ArrowUpwardIcon fontSize="small" />
												</Button>
												<Button
													id='down'
													ind={i}
													onClick={arrowClickHandler}
												>
													<ArrowDownward fontSize="small" />
												</Button>
											</ButtonGroup>
										</TableCell>
									</TableRow>
								</Flipped>
							)}

						</TableBody>
					</Table >
				</Flipper>
			</TableContainer>
		</Stack>
	)
}

export default TracksTable;