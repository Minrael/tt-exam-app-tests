import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        'display': 'flex',
        'max-width': 120,
        'margin-left': 450,
        'margin-top': 100,
    }
}));

export default function SubmitButton(props) {
    const classes = useStyles();

    const {
        onSubmit,
    } = props;

    return (
        <Button variant="contained" color="primary" className={classes.button} onClick={onSubmit}>
            Отправить
        </Button>
  );
}