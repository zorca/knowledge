import React from 'react';
import { Typography, Breadcrumbs, Link, makeStyles } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const styles = makeStyles(theme => ({
  Breadcrumbs: {
    fontFamily: 'Montserrat',
    fontSize: theme.typography.fontSizes.s16,
    fontWeight: 'bold',
    padding: '0',
    marginBottom: '30px',
    '&:last-child': {
      marginBottom: 0
    },
    '& a': {
      color: theme.palette.text.grey,
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'inherit'
    },
    '& p': {
      color: theme.palette.primary.main,
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'inherit'
    }
  }
}));

function handleClick (event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function breadcrumbs (props) {
  const classes = styles();

  return (
    <Breadcrumbs
      className={ classes.Breadcrumbs }
      separator={ <NavigateNextIcon fontSize="small"/> }
      aria-label="breadcrumb"
    >
      {
        props.links.map((link, index) => {
          if (props.links.length - 1 === index) {
            return <Typography key={ index }>{ link.text }</Typography>;
          }

          return (
            <Link key={ index } href={ link.href } onClick={ handleClick }>
              { link.text }
            </Link>
          );
        })
      }
    </Breadcrumbs>
  );
}

breadcrumbs.defaultProps = {
  links: [
    { href: '#', text: 'Help' },
    { href: '#', text: 'Taxfox' },
    { href: '#', text: 'Category' },
    { href: '#', text: 'Sub Category' }
  ]
};

export default breadcrumbs;