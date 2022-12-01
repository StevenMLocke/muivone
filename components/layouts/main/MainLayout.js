import Stack from '@mui/material/Stack';
import SideBar from '../nav/SideBar';
import Header from '../nav/Header';
import Contents from '../Contents';

const Main = ({ children }) => {
	return (
		<>
			<Header title = "Any title will do"></Header>
			<Contents>
				<Stack spacing={2} >
					{children}
				</Stack>
			</Contents>
		</>
	)
}

export default Main;