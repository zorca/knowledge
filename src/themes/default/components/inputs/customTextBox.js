import React from "react";
import { InputLabel, Typography, InputBase } from "@material-ui/core";
import PropTypes from "prop-types";
import { FormattedMessage } from "gatsby-plugin-intl";
import guidGenerator from "../../../../../../fintkit-app/src/helpers/component/guid.js";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";

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
  }
}));

function CustomTextBox({
  value,
  label,
  required,
  onChange,
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
    <div className={cssClasses.customField}>
      <InputLabel htmlFor={htmlFor}>
        <Typography variant="body2">
          <b>
            <FormattedMessage id={label} />
          </b>
          {required ? <span className={cssClasses.error}> *</span> : ""}
        </Typography>
      </InputLabel>
      <InputBase
        className={cssClasses.baseStyle}
        error={error}
        id={htmlFor}
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

CustomTextBox.defaultProps = {
  required: false,
  fullWidth: false
};

CustomTextBox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errorText: PropTypes.string,
  error: PropTypes.bool
};

export default CustomTextBox;
