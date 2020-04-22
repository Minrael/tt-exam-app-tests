import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        display: 'flex',
        margin: theme.spacing(1),
        minWidth: 240,
        maxWidth: 240,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function InputFormSelect(props) {
    const classes = useStyles();

    const {
        label,
        value,
        onChange,
        options,
    } = props;

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              onChange={onChange}
            >
            {options.map(option => <MenuItem value={option}>{option}</MenuItem>)}
            </Select>
        </FormControl>
    );
}

export default InputFormSelect;