import { makeStyles } from "@material-ui/core"

export default makeStyles({
  Card: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "red",
    // border: "1px solid black",
  },
  Icon: {
    width: "128px",
    marginBottom: "21px",
  },
  Content: {
    fontFamily: "Montserrat",
    textAlign: "center",
  },
  Title: {
    fontFamily: "inherit",
    fontSize: "20px",
    fontWeight: "bold",
    lineHeight: "30px",
    marginBottom: "18px",
  },
  Text: {
    fontFamily: "inherit",
    fontSize: "15px",
    lineHeight: "24px",
    padding: "0 15px",
  },
})
