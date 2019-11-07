import React, { useState, useEffect } from 'react';

// Material UI
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// Custom styles
import useStyles from './style';

const SensorMeter = ({ title, value, simbol, size, textVariant, valueError, elevation }) => {
	const classes = useStyles();
	const [min, setMin] = useState(value);
	const [max, setMax] = useState(value);

	useEffect(() => {
		if (value < min) setMin(value);
		else if (value > max) setMax(value);
	}, [value]);

	return (
		<Paper
			// style={{ height: size * 2.4, width: size * 2.4 }}
			style={{ height: size, width: size }}
			elevation={elevation}
			className={classes.paper}
		>
			<Typography variant='subtitle1' className={classes.textTitle}>
				{title}
			</Typography>

			{/* <div className={classes.wrapper}> */}
			<div className={classes.progress}>
				<CircularProgress
					variant='static'
					thickness={2}
					style={{ top: size * 0.01, left: size * 0.01, height: size * 0.48, width: size * 0.48 }}
					value={100}
					className={classes.progressBack}
				/>
				<CircularProgress
					variant='static'
					color={(value >= valueError && 'secondary') || 'primary'}
					size={size * 0.5}
					value={value}
					className={classes.progressFront}
				></CircularProgress>
				<Typography
					variant='h4'
					color={(value >= valueError && 'secondary') || 'primary'}
					className={classes.textValue}
				>
					{value + String.fromCharCode(simbol)}
				</Typography>
			</div>
			{/* </div> */}
			<Grid container justify='space-around'>
				<Grid item className={classes.minmax}>
					<Typography variant='body1'>{max + String.fromCharCode(simbol)}</Typography>
					<Typography variant='body2'>Max</Typography>
				</Grid>
				<Grid item className={classes.minmax}>
					<Typography variant='body1'>{min + String.fromCharCode(simbol)}</Typography>
					<Typography variant='body2'>Min</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default SensorMeter;
