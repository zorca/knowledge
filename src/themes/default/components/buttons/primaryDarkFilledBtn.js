import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { FormattedMessage } from "gatsby-plugin-intl";
import guidGenerator from "../../../../../../fintkit-app/src/helpers/component/guid.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  btnColor: {
    paddingTop: "10px",
    paddingBottom: "10px",
    minWidth: theme.spaceSizes.s32,
    color: theme.palette.text.white,
    boxShadow: `0 ${theme.spaceSizes.s0} ${theme.spaceSizes.s2} ${theme.palette.primary.dark}`,
    borderRadius: theme.spaceSizes.s2,
    backgroundColor: theme.palette.primary.dark,
    "&&:hover": {
      backgroundColor: theme.palette.primary.dark
    }
  }
}));

function PrimaryDarkFilledBtn({ name, type, callback, fullWidth }) {
  const htmlFor = guidGenerator();
  const cssClasses = useStyles();

  return (
    <Button
      id={htmlFor}
      type={type}
      variant="contained"
      fullWidth={fullWidth}
      className={cssClasses.btnColor}
      onClick={callback}
    >
      <FormattedMessage id={name} />
    </Button>
  );
}

PrimaryDarkFilledBtn.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  callback: PropTypes.func
};

export default PrimaryDarkFilledBtn;
