import { Button, ButtonGroup, Card, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import shuffle from "lodash/shuffle";
import { useState } from "react";
import { Flipped, Flipper } from "react-flip-toolkit";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpwardRounded';
import { ArrowDownward } from "@mui/icons-material";
import { set } from "lodash";

const ShiftyList = ({ randos }) => {
	const [data, setData] = useState(randos)

	const shuffleList = () => {
		setData(shuffle(data));
	}

	const arrowClickHandler = (event) => {
		const ind = parseInt(event.currentTarget.parentNode.parentNode.getAttribute('ind'))
		const direction = event.currentTarget.id;

		let tempArr = [...data];

		if (direction === 'up' && ind > 0) {
			const pulled = tempArr.splice(ind, 1)[0]
			tempArr.splice(ind - 1, 0, pulled)
		} else if (ind < tempArr.length - 1 && direction === 'down') {
			const pulled = tempArr.splice(ind, 1)[0]
			console.log(ind + 1)
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
										<Card raised sx={{ p: 1 }} ind={i}>
											Name: {item.name} - ID: {item.id}
											<ButtonGroup
												variant="contained"
												size="small"
												color="primary"
												sx={{ float: 'right' }}
											>
												<Button id='up' onClick={arrowClickHandler}>
													<ArrowUpwardIcon />
												</Button>
												<Button id='down' onClick={arrowClickHandler}>
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