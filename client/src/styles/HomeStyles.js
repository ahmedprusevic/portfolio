import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "95vh",
    flexDirection: "column",
    backgroundColor: "#FAFAFA",
    margin: "0",
  },
  header: {
    color: "#282936",
    fontFamily: " 'Russo One', sans-serif ",
    fontSize: "4rem",
    letterSpacing: "1px",
    textAlign: "center",
    marginBottom: 0,
    "& p": {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      "& p": {
        fontSize: "1rem",
      },
    },
  },
  p: {
    fontFamily: " 'Cormorant Garamond', sans-serif ",
  },
  logos: {
    display: "flex",
  },
  logoItem: {
    margin: "0.5rem 1rem",
    width: "5rem",
    height: "5rem",
    "&:hover": {
      transform: "scale(1.3)",
      transition: "all 0.5s ease-in-out",
    },
    [theme.breakpoints.down("sm")]: {
      width: "3rem",
      height: "3rem",
    },
  },
  button: {
    marginTop: "1rem",
  },
}));

export default useStyles;
