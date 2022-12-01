import { Button, ButtonGroup, Card, Divider, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import shuffle from "lodash/shuffle";
import { useState } from "react";
import { Flipped, Flipper } from "react-flip-toolkit";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpwardRounded';
import { ArrowDownward } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

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
					<Grid2 xs container>
						<Box sx={{ m: 'auto' }}>
							<Button variant="contained" onClick={shuffleList}>Shuffle</Button>
						</Box>
					</Grid2>
					<Typography>
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
											<Card display='flex' raised sx={{ pl: 2, pr: 2, pt: 1, pb: 1 }} >
												<Grid2 xs container sx={{ml:1, mr :1}}>
													<Grid2 xs={6}>
														<Stack>
															<Box>
																<Typography sx={{
																	display: 'inline-flex',
																	fontWeight: 'bold'
																}}
																>
																	Name:
																</Typography>
																<Typography sx={{
																	display: 'inline-flex',
																	marginLeft: '1rem'
																}}
																>{item.name}
																</Typography>
															</Box>
															<Divider variant="middle"></Divider>
															<Box>
																<Typography sx={{
																	display: 'inline-flex',
																	fontWeight: 'bold'
																}}
																>
																	ID:
																</Typography>
																<Typography sx={{
																	display: 'inline-flex',
																	marginLeft: '3.25rem'
																}}
																>{item.id}
																</Typography>
															</Box>
														</Stack>
													</Grid2>
													<Grid2 xs={6} container sx={{
														m: 'auto',
														display: 'inline-flex',
														justifyContent: 'flex-end'
													}}>
														<Divider
															flexItem
															orientation="vertical"
															variant="middle"
															sx={{
																mr:'1rem'
															}}
														></Divider>
														<Typography sx={{
															marginRight: '1rem',
															mt: 'auto',
															mb: 'auto',
															float: 'right',
															fontWeight: 'bold'
														}}
														>
															Rank: {i + 1}
														</Typography>
														<Divider
															flexItem
															orientation="vertical"
															variant="middle"
															sx={{
																mr:'1rem'
															}}
														></Divider>
														<ButtonGroup
															variant="contained"
															size="medium"
															color="primary"
														>
															<Button id='up' ind={i} onClick={arrowClickHandler}>
																<ArrowUpwardIcon />
															</Button>
															<Button id='down' ind={i} onClick={arrowClickHandler}>
																<ArrowDownward />
															</Button>
														</ButtonGroup>
													</Grid2>
												</Grid2>
											</Card>
										</Flipped>
									)
								})
							}
						</Stack>
					</Typography>
				</Flipper>
			</Box>
		</Container>
	)
}

export default ShiftyList;