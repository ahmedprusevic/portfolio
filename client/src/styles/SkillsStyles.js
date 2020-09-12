const styles = theme => ({
    root: {
        fontFamily: " 'Cormorant Garamond', serif "
    },
    top: {
        height: "25vh",
        marginBottom: "5rem"
    },
    header: {
        backgroundColor:"black",
        height: "30%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& h3": {
            margin: 0,
            color: "white",
            fontSize: "2rem",
            letterSpacing: "4px"
        }
    },
    logo: {
        width: "6rem",
        height: "6rem",
        margin: "0 1rem",
        [theme.breakpoints.down("sm")]: {
            width: "50px",
            height: "auto",
            margin: "0 auto"
        }
    },
    item: {
        "& p":{
            textAlign: "center",
            fontSize: "1.25rem"
        }
    },
    group: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        [theme.breakpoints.down("sm")]: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 120px)",
            marginTop: "5px",
            justifyContent: "center"
        }
    },
    remove: {
        position: "relative",
        left: "6rem",
        bottom: "11rem",
        cursor: "pointer",
        color: "red"
    }
});

export default styles;