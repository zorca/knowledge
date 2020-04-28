import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { FormattedMessage } from "gatsby-plugin-intl";
import guidGenerator from "../../../../../../fintkit-app/src/helpers/component/guid.js";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  btnStyles: {
    paddingTop: theme.spaceSizes.s2,
    paddingBottom: theme.spaceSizes.s2,
    // minWidth: theme.spaceSizes.s32,
    border: `${theme.spaceSizes.s0} solid`,
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.transparent,
    boxShadow: `0 ${theme.spaceSizes.s0} ${theme.spaceSizes.s2} ${theme.palette.secondary.light}`,
    color: theme.palette.primary.main,
    borderRadius: theme.spaceSizes.s2,
    "&&:hover": {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.transparent,
      color: theme.palette.primary.main
    }
  }
}));

function CustomBlueOutlineBtn({ name, type, callback, btnClass }) {
  const htmlFor = guidGenerator();
  const cssClasses = useStyles();

  return (
    <Button
      id={htmlFor}
      type={type}
      variant="outlined"
      className={clsx(cssClasses.btnStyles, { [btnClass]: btnClass })}
      onClick={callback}
    >
      <FormattedMessage id={name} />
    </Button>
  );
}

CustomBlueOutlineBtn.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  callback: PropTypes.func
};

export default CustomBlueOutlineBtn;
