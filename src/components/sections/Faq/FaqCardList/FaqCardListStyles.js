import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
  List: {
    margin: "0",
    padding: 0,
    listStyleType: "none",
    display: "flex",
    flexWrap: "wrap",
    // borderRight: "1px solid Green",
  },
  Item: {
    // backgroundColor: "yellow",
    // borderLeft: "1px solid Green",
    flexBasis: "calc(100% / 5)",
    // minWidth: "270px",
    // paddingLeft: "1.5625vw",
    // paddingRight: "1.5625vw",
    padding: "1.5625vw",
    [theme.breakpoints.up("xl")]: {
      // paddingLeft: "30px",
      // paddingRight: "30px",
      padding: "30px",
    },
  },
}))
