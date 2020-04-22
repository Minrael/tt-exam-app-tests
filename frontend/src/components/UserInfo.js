import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            'margin-bottom': 20,
        },
    },
}));

export default function BasicTextFields(props) {
    const classes = useStyles();

    const {
        label,
        onChange,
    } = props;

    return (
        <form className={classes.root} noValidate autoComplete="off" onChange={onChange}>
            <TextField id="outlined-basic" label={label} variant="outlined" />
        </form>
  );
}
