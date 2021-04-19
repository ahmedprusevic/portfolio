import React, { Fragment, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import PrivateRoute from "./Routing/PrivateRoute";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { logout } from "../actions/auth";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import LoginForm from "./LoginFrom";
import EditProject from "./EditProject";
import AddNewSkill from "./AddNewSkill";
import ContactMe from "./ContactMe";
import Alert from "./Alert";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExtensionIcon from "@material-ui/icons/Extension";
import BatteryCharging90Icon from "@material-ui/icons/BatteryCharging90";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useTheme } from "@material-ui/core";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const authLinks = (
    <div className={classes.icons}>
      <Link className={classes.icon} to="/projects/add">
        <ExtensionIcon /> Add New Project
      </Link>
      <Link className={classes.icon} to="/addnewskill">
        <BatteryCharging90Icon /> Add New Skill
      </Link>
      <Link onClick={logout} to="/" className={classes.icon}>
        <ExitToAppIcon />
      </Link>
    </div>
  );

  const guestLinks = (
    <div className={classes.icons}>
      <Typography>Contact Me</Typography>
      <a
        href="https://github.com/ahmedprusevic"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.icon}
      >
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/ahmed-prusevic-62578576/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.icon}
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://www.facebook.com/ljebac/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.icon}
      >
        <FacebookIcon />
      </a>
      <Link to="/contactme" className={classes.icon}>
        <EmailIcon />
      </Link>
    </div>
  );

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
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
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
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>

        <Divider />
        <List className={classes.list}>
          <NavLink
            exact
            to="/"
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            <ListItem button>
              <ListItemIcon className={classes.navIcon}>
                <AccountCircleIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={"About Me"} />
            </ListItem>
          </NavLink>
          <NavLink
            to="/projects"
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            <ListItem button>
              <ListItemIcon className={classes.navIcon}>
                <ExtensionIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={"Projects"} />
            </ListItem>
          </NavLink>
          <NavLink
            to="/skills"
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            <ListItem button>
              <ListItemIcon className={classes.navIcon}>
                <BatteryCharging90Icon />{" "}
              </ListItemIcon>
              <ListItemText primary={"Skills"} />
            </ListItem>
          </NavLink>

          <a
            href="https://s3.amazonaws.com/attachments.angel.co/5775395-578a4655b93c0c5ce9d13312eee96192.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJS6W3HGZGRJIRBTA%2F20210419%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210419T004408Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=f99aaffa84b15c82165cfc344aa7c00131b91ad9dfdcaa9380b8a1e235bff3bc"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            <ListItem button>
              <ListItemIcon className={classes.navIcon}>
                <ContactMailIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={"Resume"} />
            </ListItem>
          </a>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Alert />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/contactme" component={ContactMe} />
          <PrivateRoute exact path="/projects/:id" component={EditProject} />
          <PrivateRoute exact path="/addnewskill" component={AddNewSkill} />
        </Switch>
      </main>
    </div>
  );
};

Navbar.propTypes = {
  logout: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#317BBE",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    display: "flex",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },
  list: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    color: "#317BBE",
  },
  icons: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  icon: {
    color: "white",
    margin: "0 0.5rem",
    display: "flex",
    textDecoration: "none",
    alignItems: "center",
    "&:hover": {
      color: "#cddefa",
    },
  },
  navIcon: {
    color: "#317BBE",
  },
  activeLink: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderRight: "3px solid #317BBE",
  },
  link: {
    width: "100%",
    textDecoration: "none",
    color: "#317BBE",
  },
}));
