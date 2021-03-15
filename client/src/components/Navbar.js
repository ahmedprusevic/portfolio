import React, { Fragment, useState } from "react";
import clsx from "clsx";
import { Switch, Route, Link } from "react-router-dom";
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
import useStyles from "../styles/NavbarStyles";
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
        {" "}
        <ExtensionIcon /> Add New Project{" "}
      </Link>
      <Link className={classes.icon} to="/addnewskill">
        {" "}
        <BatteryCharging90Icon /> Add New Skill{" "}
      </Link>
      <Link onClick={logout} to="/" className={classes.icon}>
        {" "}
        <ExitToAppIcon />{" "}
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
          <Link to="/" className={classes.link}>
            <ListItem button>
              <ListItemIcon className={classes.navIcon}>
                <AccountCircleIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={"About Me"} />
            </ListItem>
          </Link>
          <Link to="/projects" className={classes.link}>
            <ListItem button>
              <ListItemIcon className={classes.navIcon}>
                <ExtensionIcon />{" "}
              </ListItemIcon>
              <ListItemText primary={"Projects"} />
            </ListItem>
          </Link>
          <Link to="/skills" className={classes.link}>
            <ListItem button>
              <ListItemIcon className={classes.navIcon}>
                <BatteryCharging90Icon />{" "}
              </ListItemIcon>
              <ListItemText primary={"Skills"} />
            </ListItem>
          </Link>
          <a
            href="https://drive.google.com/file/d/1tL37uYi4rzmhXTOsZABV2pecmHDIh7Qr/view?usp=sharing"
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
