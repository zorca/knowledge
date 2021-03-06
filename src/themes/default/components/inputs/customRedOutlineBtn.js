import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { FormattedMessage } from "gatsby-plugin-intl";
import guidGenerator from "../../../../helpers/components/guid.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  btnColor: {
    borderColor: theme.palette.text.red,
    color: theme.palette.text.red,
    borderRadius: theme.spaceSizes.s2,
    "&&:hover": {
      background: theme.palette.text.white,
      borderColor: theme.palette.text.red,
      boxShadow: "none"
    }
  }
}));

function CustomRedOutlineBtn({ name, type, callback }) {
  const htmlFor = guidGenerator();
  const cssClasses = useStyles();

  return (
    <Button
      id={htmlFor}
      type={type}
      variant="outlined"
      className={cssClasses.btnColor}
      onClick={callback}
    >
      <FormattedMessage id={name} />
    </Button>
  );
}

CustomRedOutlineBtn.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  callback: PropTypes.func
};

export default CustomRedOutlineBtn;
