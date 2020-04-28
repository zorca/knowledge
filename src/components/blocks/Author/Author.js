import styles from './AuthorStyles';
import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

function Author (props) {
  const classes = styles[props.size]();

  return (
    <div className={ classes.Author }>
      <div className={ classes.Avatar }>
        <div className={ classes.Icon }>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0,435.2V512h512v-76.8C512,263.68,0,263.68,0,435.2z"/>
            <circle cx="256" cy="128" r="128"/>
          </svg>
        </div>
      </div>
      <div className={ classes.Content }>
        <Typography component="span" className={ classes.Name }>{ props.name }</Typography>
        <Typography component="span" className={ classes.Date }>{ props.date }</Typography>
      </div>
    </div>
  );
}

Author.defaultProps = {
  size: 'small',
  name: 'Authors name here',
  date: 'Comment posted date here'
};

export default Author;
