import React from 'react';
import { Link } from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Create from '@material-ui/icons/Create';
import AlbumIcon from '@material-ui/icons/Album';
import InfoIcon from '@material-ui/icons/Info';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  list: {
    width: 250
  },
  title: {
    flexGrow: 1,
    fontWeight: 300,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}))


export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
    <List>
      <Link className={classes.link} to="/all">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
      </Link>
      <Link className={classes.link} to="/new">
        <ListItem button>
          <ListItemIcon>
            <Create />
          </ListItemIcon>
          <ListItemText>New Vinyl</ListItemText>
        </ListItem>
      </Link>
      <Link className={classes.link} to="/view-albums">
        <ListItem button>
          <ListItemIcon>
            <AlbumIcon />
          </ListItemIcon>
          <ListItemText>View All</ListItemText>
        </ListItem>
      </Link>
    </List>
    <Divider />
    <List>
      <Link className={classes.link} to="/about">
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText>About</ListItemText>
        </ListItem>
      </Link>
      <Link className={classes.link} to="/">
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText>Sign Out</ListItemText>
        </ListItem>
      </Link>
    </List>
    </div>
  );


  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('left', true)}
          >
          <MenuIcon />
        </IconButton>
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
          </Drawer>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link className={classes.link} to="/all">
              Analog Catalog
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

    </div>
  );
}
