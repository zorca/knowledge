import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, List, ListItem, Typography, ListItemText } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  ListTitle: {
    fontFamily: 'Montserrat',
    color: theme.palette.text.grey,
    fontSize: theme.typography.fontSizes.s13
  },
  List: {
    fontFamily: 'Montserrat',
    color: theme.palette.text.grey,
    height: '400px'
    // overflowY: 'scroll',
    // paddingRight: '14px',
    // marginRight: '-32px'
  },
  ListItem: {
    backgroundColor: theme.palette.primary.lite,
    borderRadius: '10px',
    padding: '15px 15px',
    minHeight: '76px',
    alignItems: 'flex-start',
    '&:not(:last-child)': {
      marginBottom: '13px'
    }
  },
  ListItemText: {
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: theme.typography.fontSizes.s15
  }

}));

const getHelp = ({ list }) => {
  const classes = styles();

  return (
    <>
      <Typography classes={ { root: classes.ListTitle } }>Most viewed</Typography>
      <List className={ classes.List }>
        {
          list.map((item, index) => (
            <ListItem key={ index } disableGutters={ true } classes={ { root: classes.ListItem } }>
              <ListItemText classes={ { primary: classes.ListItemText } } id="ListItemText" primary={ item }/>
            </ListItem>
          ))
        }
      </List>
    </>
  );
};

getHelp.propTypes = {
  list: PropTypes.array.isRequired
};

export default getHelp;