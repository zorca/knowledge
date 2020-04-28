import React, { useState } from 'react';
import { makeStyles, withStyles, Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const styles = makeStyles(theme => ({
  root: {
    borderRight: "8px solid transparent",
    '&:hover': {
      backgroundColor: theme.palette.app.backgroundLightBlue
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.app.backgroundLightBlue,
      borderRightColor: `${theme.palette.primary.main}`
    },
    "&.Mui-selected:hover": {
      backgroundColor: theme.palette.app.backgroundLightBlue
    },
    "&.Mui-selected::after": {
      content: '""',
      // height: "10px",
      width: "8px",
      // backgroundColor: theme.palette.primary.main,
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0
    },
  },
  selected: {
    backgroundColor: theme.palette.app.backgroundLightBlue
  }
}));

const ChevronIcon = props => (
  props.open ? <ExpandLess color="primary"/> : <ExpandMore color="primary"/>
);

const sideMenuItem = () => {
  const classes = styles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={ handleClick } selected={open} classes={{
        root: classes.root
      }}>
        <ListItemText primary="Category"/>
        <ChevronIcon open={ open }/>
      </ListItem>
      <Collapse in={ open } timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            [0, 1, 2, 3].map((item, index) => (
              <ListItem button key={ index }>
                <ListItemText primary="Sub Category"/>
              </ListItem>
            ))
          }
        </List>
      </Collapse>
    </>
  );
};

sideMenuItem.defaultProps = {};

export default sideMenuItem;