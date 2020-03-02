
import React, {useState} from "react";
import { render } from "react-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import clsx from 'clsx';

import {
  Drawer,
  Search,
  IconButton,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  List,
  Button,
} from "@material-ui/core";

import {
  MailIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@material-ui/icons/Mail';

import GoogleMap from './GoogleMaps/GoogleMap.js';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3D5AFE',
    },
    secondary: {
      main: '#f50057',
    },
    success: {
      main: '#00c853',
    },
    info: {
      main: '#00c853',
    },
    warning: {
      main: '#00c853',
    },
  },
  status: {
    danger: 'orange',
  },
  typography: {
    "fontFamily": "\"IMB Plex Sans\", \"Helvetica\", \"Arial\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 400,
    "fontWeightRegular": 500,
    "fontWeightMedium": 700,
    "fontWeightBold": 900,
   }
});

const drawerWidth = 240;


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

function Home(){
  const classes = useStyles();
  const[open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return(
    <div style={{display: 'flex'}}>
      <List>
        <ListItemLink to="/home" primary="Home" />
        <ListItemLink to="/map" primary="Map"/>
      </List>
      <Switch>
        <Route
          path='/home'
          render={(props) => <div>hello</div>}
          exact
        />
        <Route
          path='/map'
          render={(props) => <GoogleMap/>}
          exact
        />
      </Switch>
    </div>
  )
}

export default Home
