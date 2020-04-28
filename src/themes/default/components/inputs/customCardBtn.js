import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { FormattedMessage } from "gatsby-plugin-intl";
import guidGenerator from "../../../../../../fintkit-app/src/helpers/component/guid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  btnColor: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.text.white,
    "&&:hover": {
      background: theme.palette.primary.dark,
      boxShadow: "none"
    }
  }
}));

function CustomCardBtn({ name, type, callback }) {
  const htmlFor = guidGenerator();
  const cssClasses = useStyles();

  return (
    <Button
      id={htmlFor}
      type={type}
      className={cssClasses.btnColor}
      onClick={callback}
      fullWidth={true}
    >
      <FormattedMessage id={name} />
    </Button>
  );
}

CustomCardBtn.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  callback: PropTypes.func
};

export default CustomCardBtn;
