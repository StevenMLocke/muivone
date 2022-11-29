import { Container, Box } from "@mui/material";

const Contents = ({ children }) => {
	return (
		<Container maxWidth="md">
			{children}
		</Container>
	)
}

export default Contents;