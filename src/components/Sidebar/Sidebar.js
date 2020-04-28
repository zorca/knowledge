import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

import SideMenu from '../blocks/SideMenu/SideMenu';


const styles = makeStyles(theme => ({
  Sidebar: {
    overflow: 'hidden',
    minHeight: '100%',
    flex: '0 0 349px',
    margin: "0 -5px 0 0",
    zIndex: 100
  },
  SidebarInner: {
    boxShadow: '0 0px 5px 0px rgba(0,0,0,0.75)',
    margin: '0 5px 0 0',
    flex: '1 1 auto',
    minHeight: '100%'
  }
}));

export default () => {
  const classes = styles();

  return (
    <aside className={ classes.Sidebar }>
      <Box className={ classes.SidebarInner }>
        <SideMenu/>
      </Box>
    </aside>
  );
};