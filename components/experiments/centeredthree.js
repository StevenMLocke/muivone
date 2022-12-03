const centeredthree = () => {
	return (
		<Container style={{ outline: 'solid chartreuse', padding: '1rem' }}>
			<Divider variant={'middle'}></Divider>
			<Grid2 xs display="flex" container>
				<Grid2 xs display="flex" justifyContent="center" alignItems="center">
					<Divider orientation="vertical" flexItem variant="middle" />
				</Grid2>
				<Grid2 xs={4} display="flex" justifyContent="center" alignItems="center">
					<Card
						raised
						sx={{
							p: 1,
							m: 1,
							minHeight: '100px',
							width: '100%'
						}}
					>
						<Typography>a thing</Typography>
					</Card>
				</Grid2>
				<Grid2 xs display="flex" justifyContent="center" alignItems="center">
					<Divider orientation="vertical" flexItem variant="middle" />
				</Grid2>
				<Grid2 xs={4} display="flex" justifyContent="center" alignItems="center">
					<Card
						raised
						sx={{
							p: 1,
							m: 1,
							minHeight: '100px',
							width: '100%'
						}}
					>
						<Typography>a thing</Typography>
					</Card>
				</Grid2>
				<Grid2 xs display="flex" justifyContent="center" alignItems="center">
					<Divider orientation="vertical" flexItem variant="middle" />
				</Grid2>
				<Grid2 xs={4} display="flex" justifyContent="center" alignItems="center">
					<Card
						raised
						sx={{
							p: 1,
							m: 1,
							minHeight: '100px',
							width: '100%'
						}}
					>
						<Typography>a thing</Typography>
					</Card>
				</Grid2>
				<Grid2 xs display="flex" justifyContent="center" alignItems="center">
					<Divider orientation="vertical" flexItem variant="middle" />
				</Grid2>
			</Grid2>
			<Divider variant={'middle'}></Divider>
		</Container>
	);
}

export default centeredthree;