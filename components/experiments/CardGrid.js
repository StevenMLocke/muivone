import { Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Link from "next/link";

const CardGrid = ({ artists }) => {
	return (
		<Container sx={{ outline: '1px solid black' }}>
			<Divider
				variant={'middle'}
				sx={{ m: 1 }}
			></Divider>
			<Grid2 display="flex" container columns={15} spacing={2} justifyContent="center" alignItems="center">
				{artists.map((artist) => {
					return (
						<Grid2 xs={3} display="flex" justifyContent="center" alignItems="center" key={artist.id}>
							<Card
								elevation={5}
								key={artist.id}
								sx={{
									width: '100%',
									borderTopRightRadius:'3%',
									borderTopLeftRadius:'30%',
									borderBottomLeftRadius:'0',
									borderBottomRightRadius:'10%',
								}}
							>
								<CardActionArea href={`/band/${encodeURI(artist.id)}`}>
									<CardMedia
										component='img'
										src={artist.images.length ? artist.images[1].url : "https://i.insider.com/602ee9ced3ad27001837f2ac?width=750&format=jpeg&auto=webp"}
										height='160'
										width='320'
										sx={{
											objectFit: 'cover'
										}}
									>
									</CardMedia>
									<CardContent >
										<Typography
											zIndex={-1}
											align="center"
											sx={{ fontWeight: 'bold', textDecoration: 'none' }}>{artist.name}</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid2>
					)
				})}
			</Grid2>
			<Divider variant={'middle'}></Divider>
		</Container>
	);
}

export default CardGrid;