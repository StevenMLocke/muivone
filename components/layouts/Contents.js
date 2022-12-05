import { Container, Box } from "@mui/material";

const Contents = ({ children }) => {
	return (
		<Container maxWidth="md" sx={{
			display: 'flex',
			justifyContent: 'center',
			px:{xs:0}
		}}>
			{children}
		</Container>
	)
}

export default Contents;