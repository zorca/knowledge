import React from 'react';
import { makeStyles, Popover } from '@material-ui/core';
import { HelpOutline } from '@material-ui/icons';
import Button from './GetHelpButton/GetHelpButton';
import GetHelpContent from './GetHelpContent/GetHelpContent';

const styles = makeStyles((theme) => ({
  Popover: {
    backgroundColor: theme.palette.layout,
    // pointerEvents: 'none',
    '& .MuiPaper-rounded': {
      // borderRadius: '30px',
      borderRadius: 0
    },
    '& .MuiPaper-root': {
      overflow: 'initial',
      // width: '100%',
      // maxWidth: '432px',
      // minHeight: '380px',
    }
  },
  paper: {
    // padding: theme.spacing(1)
  }
}));

export default () => {
  const classes = styles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log('handleClick');
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log('handleClose');
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button
        aria-describedby={ id }
        onClick={ handleClick }
        startIcon={ <HelpOutline/> }
      >
        Get Help
      </Button>
      <Popover
        elevation={ 0 }
        id={ id }
        open={ open }
        anchorEl={ anchorEl }
        onClose={ handleClose }
        classes={ { root: classes.Popover } }
        anchorOrigin={ {
          vertical: 'bottom',
          horizontal: 'center'
        } }
        transformOrigin={ {
          vertical: 'bottom',
          horizontal: 'center'
        } }
      >
        <GetHelpContent close={ handleClose }/>
      </Popover>
    </>
  );
}