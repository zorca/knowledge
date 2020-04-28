import React from "react";
import {
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

function ShowPasswordAdornment({ onChange, showPassword }) {

  return (
    <div>
      <InputAdornment position="end">
        <IconButton onClick={() => onChange(!showPassword)}>
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    </div>
  );
}

export default ShowPasswordAdornment;
