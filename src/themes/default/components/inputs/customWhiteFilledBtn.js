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
    color: theme.palette.text.default,
    borderRadius: theme.spaceSizes.s2,
    backgroundColor: theme.palette.text.white,
    "&&:hover": {
      background: theme.palette.text.white,
      boxShadow: "none"
    }
  }
}));

function CustomWhiteFilledBtn({ name, type, callback }) {
  const htmlFor = guidGenerator();
  const cssClasses = useStyles();

  return (
    <Button
      id={htmlFor}
      type={type}
      variant="contained"
      className={cssClasses.btnColor}
      onClick={callback}
    >
      <FormattedMessage id={name} />
    </Button>
  );
}

CustomWhiteFilledBtn.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  callback: PropTypes.func
};

export default CustomWhiteFilledBtn;
