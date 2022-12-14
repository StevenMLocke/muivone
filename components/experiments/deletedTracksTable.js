import shuffle from "lodash/shuffle";
import { useState } from "react";
import { Flipped, Flipper } from "react-flip-toolkit";
import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, TableSortLabel } from "@mui/material";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import makeStyles from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useGridState } from "@mui/x-data-grid";

const TracksTable = ({ tracks }) => {
	const [data, setData] = useState(tracks);
	const [flip, setFlip] = useState(true);
	const [deletedTracks, setDeleteTracks] = useState([]);

	const headers = Object.keys(tracks[0]);
	headers[0] = <Delete />
	headers[headers.length] = 'rank';
	headers[headers.length] = <SwapVertIcon />



	const shuffleList = () => {
		setData(shuffle(data));
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

	const deleteClickHandler = (e) => {
		const ind = parseInt(e.currentTarget.getAttribute('ind'));
		let tempArr = [...data];
		let removed = tempArr.splice(ind, 1)[0];
		setData(tempArr);
		setDeleteTracks((p) => [[...p], removed]);
		setFlip(!flip);
	}

	const unDeleteClickHandler = (e) => {
		const ind = parseInt(e.currentTarget.getAttribute('ind'));
		let tempArr = [...deletedTracks];
		let removed = tempArr.splice(ind, 1)[0];
		setDeleteTracks(tempArr);
		setData((p) => [[...p], removed]);
		setFlip(!flip);
	}

	return (
		<Grid2 xs display='flex' container justifyContent='center' spacing={2}
			sx={{ px: 0 }}
		>
			<Grid2 xs={12} display='flex' justifyContent='center'
				sx={{ px: 0 }}
			>
				<Button variant="contained" onClick={shuffleList}>Shuffle</Button>
			</Grid2>
			<Grid2 display='flex' xs={12}
				sx={{
					px: 0,
					justifyContent: 'center',
					alignContent: 'center'
				}}
			>
				<TableContainer component={Paper} elevation={2}
					sx={{
						display: 'flex',
						justifyContent: 'center'
					}}
				>
					<Flipper flipKey={flip} >
						<Table size="small">
							<TableHead>
								<TableRow>
									{headers.map((header) => {
										return (
											<TableCell key={header} align="center"
												sx={{
													wordBreak: 'normal'
												}}
											>
												{header}
											</TableCell>
										)
									})}
								</TableRow>
							</TableHead>
							<TableBody>
								{data.map((track, i) =>
									<Flipped flipId={track.id} key={i}>
										<TableRow
											sx={{
												willChange: 'transform'
											}}
										>
											<TableCell align='center'>
												<Button size="small" id='up' ind={i} onClick={deleteClickHandler}
													sx={{
														boxShadow: '1',
														'&:hover': {
															boxShadow: '2',
															outline: '1px solid red',
															transform: 'scale(1.07) rotate(0.003turn)'
														}
													}}
												>
													<Delete size='small'></Delete>
												</Button>
											</TableCell>
											<TableCell sx={{ maxWidth: '100ch' }}>{track.name}</TableCell>
											<TableCell sx={{ maxWidth: '100ch' }}>{track.album}</TableCell>
											<TableCell align='center'>{i + 1}</TableCell>
											<TableCell align='center'
												sx={{
													px: 0
												}}
											>
												<Stack
												>
													<Button size="small" id='up' ind={i} onClick={arrowClickHandler}>
														<ArrowUpwardIcon fontSize="small" />
													</Button>
													<Button size="small" id='down' ind={i} onClick={arrowClickHandler}>
														<ArrowDownward fontSize="small" />
													</Button>
												</Stack>
											</TableCell>
										</TableRow>
									</Flipped>
								)}
							</TableBody>
						</Table >
					</Flipper>
				</TableContainer>
			</Grid2>
		</Grid2>
	)
}

export default TracksTable;