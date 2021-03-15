import { makeStyles } from "@material-ui/core";

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
  link: {
    width: "100%",
    textDecoration: "none",
    color: "#317BBE",
  },
}));

export default useStyles;
