import React from 'react';
import clsx from 'clsx';
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import LoginForm from "./LoginFrom"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExtensionIcon from '@material-ui/icons/Extension';
import BatteryCharging90Icon from '@material-ui/icons/BatteryCharging90';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';




const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#317BBE",
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
    display: 'flex',
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
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1
  },
  list: {
      height:"100%",
      alignItems: "center",
      justifyContent:"center",
      display: "flex",
      flexDirection: "column",
      color: "#317BBE"
  },
  icons: {
    width: "100%",
    display:"flex",
    justifyContent: "flex-end"
  },
  icon: {
      color:"white",
      margin: "0 0.5rem"
  },
  navIcon: {
      color: "#317BBE"
  },
  navLink: {
     textDecoration: "none",
     color: "#317BBE"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <div></div>
          <div className={classes.icons}>
            <Typography>Contact Me</Typography>
            <a href="https://github.com/ahmedprusevic" target="_blank" rel="noopener noreferrer" className={classes.icon}><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/ahmed-prusevic-62578576/" target="_blank" rel="noopener noreferrer" className={classes.icon}><LinkedInIcon /></a>
            <a href="https://www.facebook.com/ljebac/" target="_blank" rel="noopener noreferrer" className={classes.icon}><FacebookIcon /></a>
            <a href="https://www.facebook.com/ljebac/" target="_blank" rel="noopener noreferrer" className={classes.icon}><EmailIcon /></a>
          </div>
         
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Typography variant="h6">Ahmed Prusevic</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
      
        <Divider />
        <List className={classes.list}>
            <ListItem button>
            <Link to='/'>
            <ListItemIcon className={classes.navIcon}><AccountCircleIcon /> </ListItemIcon>
            </Link>
            <Link to="/" className={classes.navLink}>
              <ListItemText primary={'About Me'}/>
            </Link>
            </ListItem>
            <ListItem button>
              <Link to="/projects">
                <ListItemIcon className={classes.navIcon}><ExtensionIcon /> </ListItemIcon>
              </Link>
              <Link to="/projects" className={classes.navLink}>
                <ListItemText primary={'Projects'}/>
              </Link>
              
            </ListItem>

            <ListItem button>
              <Link to="/skills">
                <ListItemIcon className={classes.navIcon}><BatteryCharging90Icon /> </ListItemIcon>
              </Link>
              <Link to="/skills" className={classes.navLink}>
                <ListItemText primary={'Skills'}/>
              </Link>
            </ListItem>

            <ListItem button>
                <ListItemIcon className={classes.navIcon}><ContactMailIcon /> </ListItemIcon>
                <ListItemText primary={'Resume'}/>
            </ListItem>
        </List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
            <Route exact path = "/" component= { Home } />
            <Route exact path = "/projects" component= { Projects } />
            <Route exact path = "/skills" component= { Skills } />
            <Route exact path = "/login" component= { LoginForm } />
      </Switch>
      </main>
    </div>
  );
}