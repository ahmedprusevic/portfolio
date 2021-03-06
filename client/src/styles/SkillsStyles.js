import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: " 'Cormorant Garamond', serif ",
  },
  top: {},
  header: {
    padding: "0.5rem 0",
    backgroundColor: "black",
    height: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& h3": {
      margin: 0,
      color: "white",
      fontSize: "2rem",
      letterSpacing: "4px",
    },
  },
  logo: {
    width: "6rem",
    height: "6rem",
    margin: "0 1rem",
    [theme.breakpoints.down("sm")]: {
      width: "50px",
      height: "auto",
      margin: "0 auto",
    },
  },
  item: {
    position: "relative",
    "& p": {
      textAlign: "center",
      fontSize: "1.25rem",
    },
  },
  group: {
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 120px)",
      marginTop: "5px",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 120px)",
      marginTop: "5px",
      justifyContent: "center",
    },
  },
  remove: {
    position: "absolute",
    top: "0",
    right: "0",
    cursor: "pointer",
    color: "red",
  },
}));

export default useStyles;
