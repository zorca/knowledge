import { createStyles } from "@material-ui/core/styles";

export default theme => {
  const fontSizes = theme.typography.fontSizes;

  return createStyles({
    root: {
      fontWeight: "bold",
      margin: theme.spacing(1),
      fontSize: `${fontSizes.s12}`,
      boxShadow: "none",
      zIndex: 1,
      [theme.breakpoints.up("sm")]: {
        fontSize: `${fontSizes.s14}`
      },
      [theme.breakpoints.up("md")]: {
        fontSize: `${fontSizes.s16}`
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: `${fontSizes.s16}`
      }
    }
  });
};
