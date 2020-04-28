import React from 'react';
import { makeStyles, Input } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const styles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.grey,
    height: '65px',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    backgroundColor: '#fff',
    borderRadius: '41px',
    paddingLeft: '20px'
  },
  input: {
    fontSize: 'inherit'
  },
  svg:{
    fontSize: theme.typography.fontSizes.s28
  }
}));

const Search = (props) => {
  const classes = styles();

  return (
    <Input
      id="search"
      type="search"
      placeholder="Search"
      fullWidth
      disableUnderline={ true }
      classes={ {
        root: classes.root,
        input: classes.input
      } }
      startAdornment={ <SearchIcon color="inherit" classes={{ root: classes.svg}}/> }
    />
  );
};

export default Search;