// Topbar navigation

import clsx from 'clsx';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction, darkThemeAction } from '../../../redux/actions';

// Material UI
import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';

// Styles
import useStyle from './style';

const Topbar = ({ open, drawerWidth, handleDrawerOpen }) => {
	const classes = useStyle({ drawerWidth: drawerWidth });
	const dispatch = useDispatch();
	const login = useSelector(state => state.user.login);
	const details = useSelector(state => state.user.details);
	const darkTheme = useSelector(state => state.ui.settings.darkTheme);

	const createLinks = login => (
		<>
			{(login && (
				<div>
					{/* <Button color='inherit' onClick={() => dispatch(logoutAction())}>
						Log out
					</Button> */}
					<Tooltip title='Logout' placement='bottom'>
						<IconButton color='inherit' onClick={() => dispatch(logoutAction())}>
							<ExitToAppIcon />
						</IconButton>
					</Tooltip>

					<Fab size='small' className={classes.avatar}>
						<Link to='/' component={RouterLink} underline='none' color='inherit' variant='inherit'>
							<Typography variant='h6'>{details.displayName}</Typography>
						</Link>
					</Fab>
				</div>
			)) || (
				<Button component={RouterLink} to={'/login'} color='inherit'>
					Log in
				</Button>
			)}
		</>
	);

	return (
		<AppBar
			position='fixed'
			className={clsx(classes.appBar, {
				[classes.appBarShift]: open
			})}
		>
			<Toolbar>
				{/* Hamburger */}
				<IconButton
					color='inherit'
					aria-label='open drawer'
					onClick={handleDrawerOpen}
					edge='start'
					className={classes.menuButton}
					//className={clsx(classes.menuButton, {
					//	[classes.hide]: false
					//})}
				>
					<MenuIcon />
				</IconButton>

				{/* Title */}
				<Typography variant='h6' noWrap className={classes.title}>
					Arduino Sensors
				</Typography>

				{/* Dark mode */}
				<Tooltip title={(darkTheme && 'Light theme') || 'Dark theme'} placement='bottom'>
					<IconButton color='inherit' onClick={() => dispatch(darkThemeAction(!darkTheme))}>
						{(darkTheme && <Brightness4Icon />) || <Brightness7Icon />}
					</IconButton>
				</Tooltip>

				{/* Links */}
				{createLinks(login)}
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;