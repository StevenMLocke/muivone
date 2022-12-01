import { Button, ButtonGroup, Card, Divider, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import shuffle from "lodash/shuffle";
import { useState } from "react";
import { Flipped, Flipper } from "react-flip-toolkit";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpwardRounded';
import { ArrowDownward } from "@mui/icons-material";

const ShiftyList = ({ randos }) => {
	const [data, setData] = useState(randos)

	const shuffleList = () => {
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
		<Container>
			<Box sx={{
				minHeight: '100px',
				outline: '2px dashed blue'
			}}>
				<Flipper flipKey={data}>
					<button onClick={shuffleList}>Shuffle</button>
					<Stack spacing={1} sx={{ padding: '1rem' }}>
						{
							data.map((item, i) => {
								return (
									<Flipped
										flipId={item.id}
										key={i}
										spring={'wobbly'}
										stagger={true}
									>
										<Card display='flex' raised sx={{ p: 1 }} >
											<Typography sx={{
												fontWeight: 'bold',
												display: 'inline-flex'
											}}
											>Name: </Typography>
											<Typography sx={{ display: 'inline-flex' }}>{item.name}</Typography>
											<Typography sx={{
												fontWeight: 'bold',
												display: 'inline-flex'
											}}
											>ID: </Typography>
											<Typography sx={{ display: 'inline-flex' }}>{item.id}</Typography>
											<ButtonGroup
												variant="contained"
												size="small"
												color="primary"
												sx={{ float: 'right' }}
											>
												<Button id='up' ind={i} onClick={arrowClickHandler}>
													<ArrowUpwardIcon />
												</Button>
												<Button id='down' ind={i} onClick={arrowClickHandler}>
													<ArrowDownward />
												</Button>
											</ButtonGroup>
											<Typography
												variant="h6"
												sx={{
													marginRight: '1rem',
													float: 'right'
												}}
											>
												Rank: {i + 1}
											</Typography>
										</Card>
									</Flipped>
								)
							})
						}
					</Stack>
				</Flipper>
			</Box>
		</Container>
	)
}

export default ShiftyList;