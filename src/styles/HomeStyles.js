export default {
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
        flexDirection: "column",
        backgroundColor: "#0082DC",
        margin: "0"
    },
    header: {
        color: "#d4d2cf",
        fontFamily: " 'Anton', sans-serif ",
        fontSize: "4rem",
        letterSpacing: "1.5px",
        textAlign: "center",
        "& p": {
            fontSize: "2rem",
        }
    },
    logos: {
        display: "flex"
    },
    logoItem:{
        margin: "1rem",
        width: "5rem",
        height: "5rem",
        "&:hover" : {
            transform: "scale(1.3)",
            transition: "all 0.5s ease-in-out"
        }
    }
}

