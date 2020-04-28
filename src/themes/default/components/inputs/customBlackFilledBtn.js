import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { FormattedMessage } from "gatsby-plugin-intl";
import guidGenerator from "../../../../helpers/components/guid.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  btnStyles: {
    backgroundColor: theme.palette.text.default,
    color: theme.palette.text.white,
    borderRadius: theme.spaceSizes.s2,
    "&&:hover": {
      background: theme.palette.text.default,
      boxShadow: "none"
    }
  }
}));

function CustomBlackFilledBtn({ name, type, callback }) {
  const htmlFor = guidGenerator();
  const cssClasses = useStyles();

  return (
    <Button
      id={htmlFor}
      type={type}
      variant="contained"
      className={cssClasses.btnStyles}
      onClick={callback}
    >
      <FormattedMessage id={name} />
    </Button>
  );
}

CustomBlackFilledBtn.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  callback: PropTypes.func
};

export default CustomBlackFilledBtn;
