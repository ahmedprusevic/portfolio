export default {
    root: {
        fontFamily: " 'Cormorant Garamond', serif "
    },
    top: {
        height: "25vh",
        marginBottom: "3rem"
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
        margin: "0 1rem"
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
        height: "100%"
    }
}