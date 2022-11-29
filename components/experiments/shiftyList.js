import { Button, ButtonGroup, Card, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import shuffle from "lodash/shuffle";
import { useState } from "react";
import { Flipped, Flipper } from "react-flip-toolkit";

const ShiftyList = ({ randos }) => {
	const pplList = [
		'Bill',
		'Ted',
		'BatMan',
		'Robin',
		'Mr. T',
		'Hulk Hogan'
	];

	const [data, setData] = useState(randos)
	const shuffleList = () => {
		console.log(data);
		setData(shuffle(data));
	}
	return (
		<Container>
			<Box sx={{
				minHeight: '100px',
				outline: '2px dashed blue'
			}}>
				<Flipper flipKey={data[0].id + data[1].id}>
					<button onClick={shuffleList}>Shuffle</button>
					<Stack spacing={1} sx={{padding:'1rem'}}>
						{data.map((item, i) => {
							return (
								<Flipped 
									flipId={item.id} 
									key={item.id}
									spring={'gentle'}
									stagger={true}
									>
									<Card raised sx={{p:1}}>
										Name: {item.name} - ID: {item.id} - 
										<ButtonGroup
											variant="contained"
											size="small"
											color="primary"
											sx={{float:'right'}}
										>
											<Button>Up</Button>
											<Button>Down</Button>
										</ButtonGroup>
										<Typography
											variant="h6"
											sx={{
												marginRight:'1rem',
												float:'right'
											}}
										>
										Rank: {i + 1}
										</Typography>
									</Card>
								</Flipped>
							)
						})}
					</Stack>
				</Flipper>
			</Box>
		</Container>
	)
}

export default ShiftyList;