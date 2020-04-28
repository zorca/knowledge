import React, { useState, useEffect } from "react";
import {
  Button,
  Avatar,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
  Typography
} from "@material-ui/core";
import PropTypes from "prop-types";
import guidGenerator from "../../../../../../fintkit-app/src/helpers/component/guid";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { useDispatch } from "react-redux";
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { getAuthenticationModule } from "../../../../../../fintkit-app/src/redux/modules/authentication";
import { FormattedMessage, navigate } from "gatsby-plugin-intl";
import { validateEmail } from "../../../../../../fintkit-app/src/configs/validations.js";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles(theme => ({
  wrapperGroup: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.text.highlight,
    borderRadius: theme.spaceSizes.s2,
    border: '2px solid',
    margin: 0,
    boxShadow: 'none',
    position: 'relative',
    "&&:hover": {
      background: 'transparent',
      borderColor: theme.palette.primary.main,
      boxShadow: "none",
      border: '2px solid',
    },
    '& .MuiButtonGroup-groupedContainedHorizontal:not(:last-child)': {
      borderRight: 'none',
    },
    '& .MuiButton-root': {
      margin: 0,
    }
  },
  userName: {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  dropDownButton: {
    background: 'transparent',
    color: theme.palette.primary.main,
    "&&:hover": {
      boxShadow: 'none',
      background: 'transparent'
    }
  },
  btnStyles: {
    border: 'none',
    "&&:hover": {
      background: 'transparent'
    }
  },
  menuPopper: {
    width: '100%',
    zIndex: 1,
  }
}));

function AvatarBtn({ name, type, imgSrc, imgAlt }) {
  const htmlFor = guidGenerator();
  const cssClasses = useStyles();
  const anchorRef = React.useRef(null);
  const [open, setOpen] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setDisplayName(getDisplayName(name));
  }, [name]);

  const handleGotoDashboard = () => {
    setOpen(false);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT_USER"
    });
  }

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <DynamicModuleLoader modules={[getAuthenticationModule()]}>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
        className={cssClasses.wrapperGroup}
        disableFocusRipple
        disableRipple
      >
        <Button
          id={htmlFor}
          ref={anchorRef}
          type={type}
          variant="outlined"
          onClick={handleToggle}
          startIcon={<Avatar alt={imgAlt} src={imgSrc} />}
        >
          <Typography
            variant="subtitle2"
            className={cssClasses.iconColor}
          >
            {displayName}
          </Typography>
        </Button>

        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          className={cssClasses.dropDownButton}
        >
          <ArrowDropDownIcon />
        </Button>


        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          placement='bottom-start'
          container={anchorRef.current}
          className={cssClasses.menuPopper}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList id="split-button-menu">
                <MenuItem
                  key={1}
                  onClick={() => handleGotoDashboard()}
                >
                  <FormattedMessage id={'buttons_and_links.dashboard'} />
                </MenuItem>
                <MenuItem
                  key={2}
                  onClick={event => handleLogout(event)}
                >
                  <FormattedMessage id={'buttons_and_links.logout'} />
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>

      </ButtonGroup>
    </DynamicModuleLoader>
  );
}

function getDisplayName(name) {
  if (validateEmail(name)) {
    return name.substring(0, name.lastIndexOf("@"));
  }

  return name;
}

AvatarBtn.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  type: PropTypes.string,
  callback: PropTypes.func
};

export default AvatarBtn;
