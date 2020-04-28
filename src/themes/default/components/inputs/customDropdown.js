import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { NativeSelect, InputBase } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import guidGenerator from "../../../../../../fintkit-app/src/helpers/component/guid.js";
import { useIntl } from "gatsby-plugin-intl";

const useStyles = makeStyles(theme => ({
  select: {
    "& .MuiNativeSelect-select": {
      borderRadius: theme.spaceSizes.s4,
      background: theme.palette.app.backgroundLightBlue1
    }
  },
  option: {
    background: theme.palette.app.backgroundLightBlue1,
    color: theme.palette.primary.main,
    width: "auto"
  },
  iconStyle: {
    color: theme.palette.primary.main,
    position: "absolute",
    right: theme.spaceSizes.s1
  }
}));

function CustomDropdown({ value, onChange, placeholder, list }) {
  const htmlFor = guidGenerator();
  const classes = useStyles();
  const intl = useIntl();

  return (
    <NativeSelect
      id={htmlFor}
      className={classes.select}
      value={value || ""}
      onChange={onChange}
      input={<InputBase />}
      IconComponent={() => <ExpandMoreIcon className={classes.iconStyle} />}
    >
      <option value="" className={classes.option}>
        {intl.messages[placeholder] || "Select one"}
      </option>
      {list.map((item, index) => (
        <option key={index} className={classes.option} value={item.value}>
          {intl.messages[item.label]}
        </option>
      ))}
    </NativeSelect>
  );
}

CustomDropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  placeholder: PropTypes.any,
  list: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default CustomDropdown;
