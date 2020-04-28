import React from "react";
import { InputAdornment, InputBase, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { FormattedMessage } from "gatsby-plugin-intl";
import guidGenerator from "../../../../../../fintkit-app/src/helpers/component/guid.js";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { SecondaryButton } from "../buttons";

const useStyles = makeStyles(theme => ({
  textBoxStyle: {
    border: `${theme.spaceSizes.px} solid ${theme.palette.app.inputBoxBorderColor}`,
    borderRadius: theme.spaceSizes.s2,
    width: "100%",
    "& .MuiInputBase-input": {
      padding: `${theme.spaceSizes.s3} 0 !important`
    },
    marginBottom: theme.spaceSizes.s6
  },
  error: {
    color: theme.palette.text.red
  },
  textHighlighter: {
    marginLeft: theme.spaceSizes.s2,
    color: theme.palette.primary.main,
    fontSize: theme.spaceSizes.s8,
    paddingBottom: theme.spaceSizes.s1,
    transform: "rotate(-35deg)"
  },
  btnColor: {
    width: theme.spaceSizes.s24,
    margin: "0",
    marginRight: `-${theme.spaceSizes.s0}`,
    padding: `${theme.spaceSizes.s3} ${theme.spaceSizes.s2}`,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.white,
    borderColor: theme.palette.secondary.main,
    borderRadius: theme.spaceSizes.s2,
    "&&:hover": {
      background: theme.palette.text.default,
      boxShadow: "none"
    }
  },
  [theme.breakpoints.up("sm")]: {
    btnColor: {
      width: theme.spaceSizes.s40
    },
    textBoxStyle: {
      marginBottom: 0
    }
  },
  [theme.breakpoints.up("md")]: {
    btnColor: {
      width: theme.spaceSizes.s40,
      lineHeight: "initial"
    }
  }
}));

function CustomInviteTextBox({
  name,
  value,
  onChange,
  error,
  errorText,
  callback,
  size
}) {
  const htmlFor = guidGenerator();
  const cssClasses = useStyles();

  return (
    <div>
      <InputBase
        className={cssClasses.textBoxStyle}
        id={htmlFor}
        placeholder="Enter your email address"
        value={value}
        type="text"
        onChange={e => onChange(e.target.value)}
        error={error}
        startAdornment={
          <InputAdornment>
            <SendOutlinedIcon className={cssClasses.textHighlighter} />
          </InputAdornment>
        }
        endAdornment={
          size != "sm" && (
            <InputAdornment>
              <Button className={cssClasses.btnColor} onClick={callback}>
                <FormattedMessage id={name} />
              </Button>
            </InputAdornment>
          )
        }
      />
      {error === true && (
        <FormHelperText className={cssClasses.error} id={htmlFor}>
          {errorText}
        </FormHelperText>
      )}
      {size === "sm" && <SecondaryButton name={name} callback={callback} />}
    </div>
  );
}
CustomInviteTextBox.defaultProps = {
  size: "md"
};

CustomInviteTextBox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errorText: PropTypes.string,
  error: PropTypes.bool,
  size: PropTypes.string
};

export default CustomInviteTextBox;
