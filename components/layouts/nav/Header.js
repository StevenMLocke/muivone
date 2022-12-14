import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';

const Header = ({ title }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Divider orientation="vertical" flexItem />
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						{title}
					</Typography>
					<Divider orientation="vertical" flexItem />
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			<Toolbar sx={{marginBottom:'1rem'}} />
		</Box>
	)
}

export default Header;