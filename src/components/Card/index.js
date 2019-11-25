// Rotating card

import React from 'react';

// Custom styles
import useStyles from './style';
// import { mergeClasses } from '@material-ui/styles';

// Material UI
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const Card = ({ front = {}, back = {}, social = {} }) => {
	console.log('TCL: Card -> social', social);

	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.card}>
				{/* Front face*/}
				<div className={classes.front}>
					<div className={classes.header}>
						<div className={classes.cover}>
							<img src={front.cover} alt='Cover' />
						</div>
						<div className={classes.user}>
							<img src={front.user} alt='User' />
						</div>
					</div>
					<div className={classes.content}>
						<p className={classes.title}>{front.title}</p>
						<p className={classes.subtitle}>{front.subtitle}</p>
						<p>
							<em>{front.text}</em>
						</p>
					</div>
					<div className={classes.divider} />
					<div className={classes.footer}>
						<AddIcon />
						More info
					</div>
				</div>

				{/* Back face*/}
				<div className={classes.back}>
					<div className={classes.backHeader}>{back.header}</div>
					<div className={classes.divider} />
					<div className={classes.content}>
						<div>
							<p className={classes.backTitle}>{back.title}</p>
							<p>{back.text}</p>
						</div>
					</div>
					<div className={classes.stats}>
						<div>
							<p>235</p>
							<p>Followers</p>
						</div>
						<div>
							<p>114</p>
							<p>Following</p>
						</div>
						<div>
							<p>35</p>
							<p>Projects</p>
						</div>
					</div>
					<div className={classes.divider} />
					<div className={classes.footer}>
						<IconButton href={social.github} color='primary'>
							<GitHubIcon />
						</IconButton>
						<IconButton href={social.facebook} color='primary'>
							<FacebookIcon />
						</IconButton>
						<IconButton href={social.linkedin} color='primary'>
							<LinkedInIcon />
						</IconButton>
						<IconButton href={social.twitter} color='primary'>
							<TwitterIcon />
						</IconButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;