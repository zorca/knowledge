import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { FavoriteBorder } from '@material-ui/icons';

const styles = makeStyles(theme => ({
  Footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  Button: {
    color: '#3D8BFF',
    fontFamily: 'inherit',
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: '34px',
    '& .MuiSvgIcon-root': {
      fontSize: '1.72rem',
      marginRight: '.43rem'
    }
  }
}));

export default props => {
  const classes = styles();

  return (
    <div className={ classes.Footer }>
      <div className={ classes.Likes }>
        <Button className={ classes.Button }>
          <FavoriteBorder/>
          { props.likes }
        </Button>
      </div>
      <Button className={ classes.Button }>share</Button>
    </div>
  );
}
