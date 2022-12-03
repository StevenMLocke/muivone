const fourbythree = () => {
	return (
		<Container style={{ marginTop: '1rem' }}>
			<Grid2 container spacing={4}>
				<Grid2 xs={3} justifyContent="center" alignItems="center">
					<Card raised sx={{ minHeight: '100px', textAlign: 'center' }} >
						<Typography>
							a thing
						</Typography>
					</Card>
				</Grid2>
				<Grid2 xs={3} justifyContent="center" alignItems="center">
					<Card raised sx={{ minHeight: '100px', textAlign: 'center' }} >
						Another thing
					</Card>
				</Grid2>
				<Grid2 xs={3} justifyContent="center" alignItems="center">
					<Card raised sx={{ minHeight: '100px', textAlign: 'center' }} >
						a third thing
					</Card>
				</Grid2>
				<Grid2 xs={3} justifyContent="center" alignItems="center">
					<Card raised sx={{ minHeight: '100px', textAlign: 'center' }} >
						The last thing
					</Card>
				</Grid2>

				<Grid2 item xs={3} style={{ outline: 'solid blue' }}>
					<Card raised sx={{ minHeight: '100px', textAlign: 'center' }} >
						<Typography>
							a thing
						</Typography>
					</Card>
				</Grid2>
				<Grid2 item xs={3} style={{ outline: 'solid red' }}>
					<Card raised sx={{ minHeight: '100px', textAlign: 'center' }} >
						Another thing
					</Card>
				</Grid2>
				<Grid2 item xs={3} style={{ outline: 'solid yellow' }}>
					<Card raised sx={{ minHeight: '100px', textAlign: 'center' }} >
						a third thing
					</Card>
				</Grid2>
				<Grid2 item xs={3} style={{ outline: 'solid purple' }}>
					<Card raised sx={{ minHeight: '100px', textAlign: 'center' }} >
						The last thing
					</Card>
				</Grid2>

				<Grid2 item xs={3} style={{ outline: 'solid blue' }}>
					<Card raised sx={{ minHeight: '100px', textAlign: 'center' }} >
						<Typography>
							a thing
						</Typography>
					</Card>
				</Grid2>
				<Grid2 item xs={3} style={{ outline: 'solid red' }}>
					<Card raised sx={{ minHeight: '100px', textAlign: 'center' }} >
						Another thing
					</Card>
				</Grid2>
				<Grid2 item xs={3} style={{ outline: 'solid yellow' }}>
					<Card raised sx={{ minHeight: '100px', textAlign: 'center' }} >
						a third thing
					</Card>
				</Grid2>
				<Grid2 item xs={3} style={{ outline: 'solid purple' }}>
					<Card raised sx={{ minHeight: '100px', textAlign: 'center' }} >
						The last thing
					</Card>
				</Grid2>
			</Grid2>
		</Container>
	);
}

export default fourbythree;