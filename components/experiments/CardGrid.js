import { Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { createTheme, responsiveFontSizes } from "@mui/system";

const CardGrid = ({ artists, path }) => {
	console.log(path);
	return (
		<Container>
			<Divider variant={'middle'} sx={{ m: 1 }} />
			<Grid2 md display="flex" container columns={{xs:9, sm:12, md:15}} spacing={2} justifyContent="center" alignItems="center">
				{artists.map((artist) => {
					return (
						<Grid2 xs={3} display="flex" justifyContent="center" alignItems="center" key={artist.id}>
							<Card
								key={artist.id}
								sx={{
									width: '100%',
									borderTopRightRadius:'3%',
									borderTopLeftRadius:'30%',
									borderBottomLeftRadius:'0',
									borderBottomRightRadius:'10%',
									boxShadow:'1',
									'&:hover':{
										boxShadow:'20',
										outline:'1px solid yellow',
										transform:'scale(1.07) rotate(0.003turn)'
									}
								}}
							>
								<CardActionArea href={`/${path}/${encodeURI(artist.id)}`}>
									<CardMedia
										component='img'
										src={artist.images.length ? artist.images[1].url : "https://i.insider.com/602ee9ced3ad27001837f2ac?width=750&format=jpeg&auto=webp"}
										sx={{
											height:'10rem',
											objectFit: 'cover',
											objectPosition:'top'
										}}
									></CardMedia>
									<CardContent>
										<Typography
											noWrap
											align="center"
											typography={{xs:'subtitle2', md:'body1'}}
											sx={{
												textDecoration: 'none',
											}}
										>
											{artist.name}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid2>
					)
				})}
			</Grid2>
			<Divider variant={'middle'} sx={{ m: 1 }} />
		</Container>
	);
}

export default CardGrid;