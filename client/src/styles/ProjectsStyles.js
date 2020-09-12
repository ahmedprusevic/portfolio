const styles = theme => ({
    main: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      [theme.breakpoints.down("md")]: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)"
    },
    [theme.breakpoints.down("sm")]: {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)"
  },
    },
    root: {
        maxWidth: 345
      },
    media: {
        height: 140,
      },
    card: {
        margin: "3rem auto",
        minWidth: "345px"
      },
    action: {
        display: "flex",
        justifyContent: "space-between"
    },
    link: {
      textDecoration: "none"
    },
    description: {
      maxHeight: "5rem",
      overflow: "auto",
      "&::-webkit-scrollbar-track":{
        webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
        backgroundColor: "#F5F5F5"
      },
      "&::-webkit-scrollbar":{
        width: "5px",
        backgroundColor: "#317BBE"
    },
    "&::-webkit-scrollbar-thumb":{
      backgroundColor: "#317BBE"
    }
  }
})

export default styles;