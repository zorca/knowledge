import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { FormattedMessage } from "gatsby-plugin-intl";
import guidGenerator from "../../../../../../fintkit-app/src/helpers/component/guid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  btnColor: {
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: theme.spaceSizes.s6,
    paddingRight: theme.spaceSizes.s6,
    minWidth: theme.spaceSizes.s32,
    color: theme.palette.text.white,
    boxShadow: `0 ${theme.spaceSizes.s0} ${theme.spaceSizes.s1} ${theme.palette.secondary.main}`,
    borderRadius: theme.spaceSizes.s2,
    backgroundColor: theme.palette.secondary.main,
    "&&:hover": {
      backgroundColor: theme.palette.secondary.main
    }
  }
}));

function SecondaryFilledBtn({ name, type, callback, fullWidth, disabled }) {
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
      disabled={disabled}
    >
      <FormattedMessage id={name} />
    </Button>
  );
}

SecondaryFilledBtn.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  callback: PropTypes.func
};

export default SecondaryFilledBtn;
