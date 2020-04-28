import { createStyles } from "@material-ui/core/styles";

export default theme => {
  return createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(1),
        border: `${theme.spaceSizes.px} solid ${theme.palette.app.inputField}`,
        borderRadius: theme.spaceSizes.s1,
        width: "100%"
      },
      "&.MuiInputBase-root": {
        "&.Mui-error": {
          borderColor: theme.palette.text.red
        }
      }
    },
    input: {
      backgroudColor: theme.palette.text.white,
      position: "relative",
      fontSize: theme.typography.fontSizes.s16,
      padding: `${theme.spaceSizes.s2} ${theme.spaceSizes.s3}`
    }
  });
};
