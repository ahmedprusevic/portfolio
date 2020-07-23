export default {
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
        flexDirection: "column",
        backgroundColor: "#FFEECA",
        margin: "0"
    },
    header: {
        color: "#282936",
        fontFamily: " 'Cormorant Garamond', serif ",
        fontSize: "4rem",
        letterSpacing: "1px",
        textAlign: "center",
        marginBottom: 0,
        "& p": {
            fontSize: "2rem",
        }
    },
    logos: {
        display: "flex"
    },
    logoItem:{
        margin: "0.5rem 1rem",
        width: "5rem",
        height: "5rem",
        "&:hover" : {
            transform: "scale(1.3)",
            transition: "all 0.5s ease-in-out"
        }
    },
    button: {
        marginTop: "1rem"
    }
}
