import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import GetHelpContent from './GetHelpContent/GetHelpContent';
import GetHelpCloseButton from './GetHelpCloseButton/GetHelpCloseButton';

const styles = makeStyles((theme) => ({
  Wrapper: {
    position: 'relative',
    // backgroundColor: "red",
    padding: '30px 0 10px 0 ',
    width: "100%",
    maxWidth: "432px"
  },
  CloseButton: {
    position: 'absolute',
    top: 0,
    right: "20px",
    // transform: 'translate(50%, -50%)'
  }
}));

export default () => {
  const classes = styles();

  const handleClose = () => {
    console.log('handleClose');
  };

  return (
    <>
      <Box className={ classes.Wrapper }>
        <GetHelpContent/>
        <Box className={ classes.CloseButton }>
          <GetHelpCloseButton close={ handleClose }/>
        </Box>
      </Box>
    </>
  );
}