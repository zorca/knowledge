import { createStyles } from "@material-ui/core/styles";

export default theme => {
  const fontSizes = theme.typography.fontSizes;

  return {
    h2: createStyles({
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: `${fontSizes.s24}`,
      [theme.breakpoints.up("sm")]: {
        fontSize: `${fontSizes.s36}`
      },
      [theme.breakpoints.up("md")]: {
        lineHeight: 1.1,
        fontSize: `${fontSizes.s36}`
      }
    }),

    h3: createStyles({
      fontFamily: "Roboto",
      fontWeight: "bold",
      lineHeight: 1,
      fontSize: `${fontSizes.s24}`,
      [theme.breakpoints.up("sm")]: {
        fontSize: `${fontSizes.s24}`,
        lineHeight: 1.3
      },
      [theme.breakpoints.up("md")]: {
        lineHeight: 1.1,
        fontSize: `${fontSizes.s30}`
      }
    }),
    h4: createStyles({
      fontFamily: "Roboto",
      lineHeight: 1,
      fontSize: `${fontSizes.s19}`,
      [theme.breakpoints.up("sm")]: {
        fontSize: `${fontSizes.s24}`,
        lineHeight: 2
      },
      [theme.breakpoints.up("md")]: {
        lineHeight: 1.1,
        fontSize: `${fontSizes.s24}`
      }
    }),
    h5: createStyles({
      fontFamily: "Roboto",
      fontSize: `${fontSizes.s19}`
    }),
    h6: createStyles({
      fontFamily: "Roboto",
      lineHeight: 1.3,
      letterSpacing: "0.5px",
      fontSize: `${fontSizes.s16}`,
      [theme.breakpoints.up("sm")]: {
        fontSize: `${fontSizes.s16}`
      },
      [theme.breakpoints.up("md")]: {
        fontSize: `${fontSizes.s16}`
      }
    }),
    body2: createStyles({
      fontFamily: theme.typography.fontFamily,
      lineHeight: 1.3,
      letterSpacing: "0.2px",
      fontSize: `${fontSizes.s12}`,
      [theme.breakpoints.up("sm")]: {
        fontSize: `${fontSizes.s12}`
      },
      [theme.breakpoints.up("md")]: {
        fontSize: `${fontSizes.s16}`
      }
    }),
    subtitle1: createStyles({
      letterSpacing: "0.2px",
      color: theme.palette.text.blackGray,
      fontSize: `${fontSizes.s14}`,
      fontFamily: "Roboto"
    }),
    //need to check fontfamily not being used globally sometimes
    subtitle2: createStyles({
      letterSpacing: "0.2px",
      color: theme.palette.text.blackGray,
      fontSize: `${fontSizes.s14}`
    }),
    caption: createStyles({
      letterSpacing: "0.2px",
      color: theme.palette.text.blackGray,
      fontSize: `${fontSizes.s10}`,
      [theme.breakpoints.up("sm")]: {
        fontSize: `${fontSizes.s12}`
      }
    })
  };
};
