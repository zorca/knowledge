import React from "react";
import { InputLabel, Typography, InputBase } from "@material-ui/core";
import PropTypes from "prop-types";
import { FormattedMessage } from "gatsby-plugin-intl";
import guidGenerator from "../../../../../../fintkit-app/src/helpers/component/guid.js";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles(theme => ({
  baseStyle: {
    background: theme.palette.text.white,
    padding: theme.spaceSizes.s1,
    borderRadius: "0.625rem",
    color: theme.palette.app.default,
    "&.MuiInputBase-root": {
      borderColor: `${theme.palette.app.inputBoxBorderColor}`
    }
  },
  error: {
    color: theme.palette.text.red
  }
}));

function CustomTextFieldWithoutLabel({
  value,
  required,
  multiline,
  rows,
  onChange,
  placeholder,
  onBlur,
  error,
  errorText,
  type
}) {
  const htmlFor = guidGenerator();
  const cssClasses = useStyles();

  function handleBlur() {
    if (onBlur) {
      onBlur();
    }
  }

  return (
    <div>
      <InputLabel htmlFor={htmlFor}></InputLabel>
      <InputBase
        className={cssClasses.baseStyle}
        error={error}
        id={htmlFor}
        placeholder={placeholder}
        rows={rows}
        multiline={multiline}
        value={value}
        type={type}
        onChange={e => onChange(e.target.value)}
        onBlur={handleBlur}
      />
      {error === true && (
        <FormHelperText className={cssClasses.error} id={htmlFor}>
          {errorText}
        </FormHelperText>
      )}
    </div>
  );
}

CustomTextFieldWithoutLabel.defaultProps = {
  required: false,
  fullWidth: false
};

CustomTextFieldWithoutLabel.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errorText: PropTypes.string,
  error: PropTypes.bool
};

export default CustomTextFieldWithoutLabel;
