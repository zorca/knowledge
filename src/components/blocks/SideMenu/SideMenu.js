import React from 'react';
import { List } from '@material-ui/core';
import SideMenuItem from '../SideMenuItem/SideMenuItem';

// const styles = makeStyles(theme => ({}));

function sideMenu () {
  // const classes = styles();

  return (
    <List component="nav" aria-label="">
      <SideMenuItem/>
      <SideMenuItem/>
    </List>
  );
}

sideMenu.defaultProps = {};

export default sideMenu;