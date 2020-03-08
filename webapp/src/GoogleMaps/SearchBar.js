import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  IconButton,
  Paper,
  InputBase,
  Divider,
  CircularProgress
} from "@material-ui/core";

import {
  Search,
  MyLocation,
  Menu
} from '@material-ui/icons';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    minWidth: 400,
    width: '40%',
    zIndex: 999,
    position: 'absolute',
    top: '25px',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();
  const getCurrentLocation = props.getCurrentLocation
  const loadLocation = props.loadLocation
  const openMenu = props.openMenu

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu" onClick={() => openMenu()}>
        <Menu />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <Search />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      {
        loadLocation == null ?
        <CircularProgress color="primary" className={classes.iconButton} />
        :
        <IconButton color="primary" className={classes.iconButton} aria-label="directions" onClick={() => getCurrentLocation()}>
          <MyLocation />
        </IconButton>
      }

    </Paper>
  );
}
