import React, { useState } from "react";
import { InputLabel, Typography, InputBase, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { FormattedMessage } from "gatsby-plugin-intl";
import guidGenerator from "../../../../../../fintkit-app/src/helpers/component/guid.js";
import ShowPasswordAdornment from "./showPasswordAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import CustomLink from "../customLink";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  customField: {
    "& .MuiFormLabel-root": {
      color: theme.palette.text.default
    }
  },
  baseStyle: {
    background: theme.palette.text.white,
    padding: theme.spaceSizes.s1,
    borderRadius: "0.625rem !important",
    color: theme.palette.app.default,
    "&.MuiInputBase-root": {
      borderColor: `${theme.palette.app.inputBoxBorderColor}`
    }
  },
  error: {
    color: theme.palette.text.red
  },
  listError: {
    color: theme.palette.text.red,
    padding: theme.spaceSizes.px,
    "& div": {
      minWidth: theme.spaceSizes.s8
    }
  },
  listSuccess: {
    color: theme.palette.text.green,
    padding: theme.spaceSizes.px
  },
  rules: {
    fontSize: theme.typography.fontSizes.s12
  },
  labelStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

function PasswordField({
  value,
  error,
  showRules,
  errorText,
  label,
  required,
  onChange,
  adornment,
  link,
  linkValue,
  focusCallback,
  onBlur
}) {
  const cssClasses = useStyles();
  const htmlFor = guidGenerator();
  const [showPassword, handleShowPasswordToggle] = useState(false);
  const [focussed, setFocussed] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [moreThanEightChars, setMoreThanEightChars] = useState(false);
  const [hasUpperAndLowerCase, setHasUpperAndLowerCase] = useState(false);

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  const validatePasswordHasNumber = password => {
    let regEx = new RegExp("^(?=.*[0-9])");
    return regEx.test(password) ? true : false;
    // if (regEx.test(password)) {
    //   return true;
    // } else {
    //   return false;
    // }
  };

  const validatePasswordHasSymbol = password => {
    let regEx = new RegExp("^(?=.*[!@#$%^&*])");
    return regEx.test(password) ? true : false;
    // if (regEx.test(password)) {
    //   return true;
    // } else {
    //   return false;
    // }
  };

  const validatePasswordHasUpperAndLowerCase = password => {
    let regEx = new RegExp("^(?=.*[A-Z])(?=.*[a-z])");
    return regEx.test(password) ? true : false;
    // if (regEx.test(password)) {
    //   return true;
    // } else {
    //   return false;
    // }
  };

  const validatePasswordHasMoreThanEightChars = password => {
    let regEx = new RegExp("^(?=.{8,})");
    return regEx.test(password) ? true : false;
    // if (regEx.test(password)) {
    //   return true;
    // } else {
    //   return false;
    // }
  };

  const validatePasswordRules = password => {
    setHasNumber(validatePasswordHasNumber(password));
    setHasSymbol(validatePasswordHasSymbol(password));
    setHasUpperAndLowerCase(validatePasswordHasUpperAndLowerCase(password));
    setMoreThanEightChars(validatePasswordHasMoreThanEightChars(password));
  };

  const handleFocus = v => {
    setFocussed(true);
    if (focusCallback) {
      focusCallback();
    }
  };

  const handleOnChange = val => {
    onChange(val);
    if (showRules) {
      validatePasswordRules(val);
    }
  };

  return (
    <div className={cssClasses.customField}>
      <InputLabel htmlFor={htmlFor}>
        <Box className={cssClasses.labelStyle}>
          <Typography variant="body2">
            <b>
              <FormattedMessage id={label} />
            </b>
            {required ? <span className={cssClasses.error}> *</span> : ""}
          </Typography>
          {(link = link ? 1 : "") && (
            <CustomLink
              typoVariant="caption"
              to={linkValue.to}
              name={linkValue.name}
            />
          )}
        </Box>
      </InputLabel>
      <InputBase
        className={cssClasses.baseStyle}
        error={error}
        id={htmlFor}
        value={value}
        type={showPassword ? "text" : "password"}
        onChange={e => handleOnChange(e.target.value)}
        onFocus={handleFocus}
        link={link}
        onBlur={handleBlur}
        endAdornment={
          adornment ? (
            <ShowPasswordAdornment
              showPassword={showPassword}
              onChange={handleShowPasswordToggle}
            />
          ) : (
            ""
          )
        }
      />
      {error === true && (
        <FormHelperText className={cssClasses.error} id={htmlFor}>
          {errorText}
        </FormHelperText>
      )}
      {showRules === true && focussed === true && (
        <Box>
          <List className={cssClasses.rules}>
            <ListItem
              className={clsx(
                { [cssClasses.listError]: moreThanEightChars === false },
                { [cssClasses.listSuccess]: moreThanEightChars === true }
              )}
            >
              <ListItemIcon>
                {!moreThanEightChars ? (
                  <CancelIcon className={cssClasses.listError} />
                ) : (
                  <CheckCircleIcon className={cssClasses.listSuccess} />
                )}
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary="Use 8 or more characters"
              />
            </ListItem>
            <ListItem
              className={clsx(
                { [cssClasses.listError]: hasUpperAndLowerCase === false },
                { [cssClasses.listSuccess]: hasUpperAndLowerCase === true }
              )}
            >
              <ListItemIcon>
                {!hasUpperAndLowerCase ? (
                  <CancelIcon className={cssClasses.listError} />
                ) : (
                  <CheckCircleIcon className={cssClasses.listSuccess} />
                )}
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary="Use upper and lower case letters (e.g. Aa)"
              />
            </ListItem>
            <ListItem
              className={clsx(
                { [cssClasses.listError]: hasNumber === false },
                { [cssClasses.listSuccess]: hasNumber === true }
              )}
            >
              <ListItemIcon>
                {!hasNumber ? (
                  <CancelIcon className={cssClasses.listError} />
                ) : (
                  <CheckCircleIcon className={cssClasses.listSuccess} />
                )}
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary="Use a number (e.g. 1234)"
              />
            </ListItem>
            <ListItem
              className={clsx(
                { [cssClasses.listError]: hasSymbol === false },
                { [cssClasses.listSuccess]: hasSymbol === true }
              )}
            >
              <ListItemIcon>
                {!hasSymbol ? (
                  <CancelIcon className={cssClasses.listError} />
                ) : (
                  <CheckCircleIcon className={cssClasses.listSuccess} />
                )}
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary="Use a symbol (e.g. !@#$)"
              />
            </ListItem>
          </List>
        </Box>
      )}
    </div>
  );
}

PasswordField.defaultProps = {
  required: true,
  adornment: false,
  link: false
};

PasswordField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  errorText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  error: PropTypes.bool,
  showRules: PropTypes.bool,
  adornment: PropTypes.bool,
  link: PropTypes.bool,
  focusCallback: PropTypes.func
};

export default PasswordField;
