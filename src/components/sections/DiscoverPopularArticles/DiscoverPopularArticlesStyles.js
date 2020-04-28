import { makeStyles } from "@material-ui/core"

export default makeStyles({
  Section: {
    backgroundColor: "#EDF7EE",
  },
  Container: {
    maxWidth: "1708px",
    margin: "0 auto",
    padding: "30px 0 50px",
  },
  List: {
    margin: "-76px 0 0 -38px",
    padding: 0,
    listStyleType: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  Item: {
    width: "calc(100% / 3 - 38px)",
    margin: "76px 0 0 38px",
  },
})
