import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const styles = makeStyles(theme => ({
  Header: {
    marginBottom: '60px',
    textAlign: 'center'
  },
  Title: {
    fontFamily: 'inherit',
    fontSize: '50px',
    fontWeight: 'bold',
    color: theme.palette.text.default,
    marginBottom: '22px',
    '& span': {
      color: theme.palette.primary.main,
    }
  },
  SubTitle: {
    fontFamily: 'Montserrat',
    fontSize: '20px',
    lineHeight: '40px',
    letterSpacing: '0'
  }
}));

export default props => {
  const classes = styles();

  return (
    <header className={ classes.Header }>
      <Typography variant="h3" className={ classes.Title }>
        { !props.titleSecond ? (
          props.title
        ) : (
          <>
            { props.title } <span>{ props.titleSecond }</span>
          </>
        ) }
      </Typography>
      <Typography variant="subtitle1" component="span" className={ classes.SubTitle }>{ props.subTitle }</Typography>
    </header>
  );
}
