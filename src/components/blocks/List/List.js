import React from 'react';
import { makeStyles, List, ListItem, ListItemText, ListSubheader, ListItemIcon } from '@material-ui/core';
import { Folder } from '@material-ui/icons';

const styles = makeStyles(theme => ({
  List: {
    fontFamily: 'Montserrat',
    backgroundColor: theme.palette.background.paper,
    "&:not(:last-child)":{
      marginBottom: theme.typography.fontSizes.s20
    }
  },
  ListSubheader: {
    color: theme.palette.text.default,
    fontFamily: 'inherit',
    fontSize: theme.typography.fontSizes.s20,
    fontWeight: 800
  },
  ListItemText: {
    color: theme.palette.primary.main,
    fontFamily: 'inherit',
    fontSize: theme.typography.fontSizes.s14
  }
}));

const List0 = props => {
  const classes = styles();

  return props.title ? (
    <List subheader={ <ListSubheader classes={ { root: classes.ListSubheader } }>{ props.title }</ListSubheader> }
          className={ classes.List }>
      {
        props.list.map((item, index) => (
          <ListItem key={ index } classes={ { root: classes.ListItem } }>
            <ListItemText classes={ { primary: classes.ListItemText } } id="switch-list-label-wifi" primary={ item }/>
          </ListItem>
        ))
      }
    </List>
  ) : (
    <List className={ classes.List }>
      {
        props.list.map((item, index) => (
          <ListItem key={ index } classes={ { root: classes.ListItem } }>
            <ListItemText classes={ { primary: classes.ListItemText } } id="switch-list-label-wifi" primary={ item }/>
          </ListItem>
        ))
      }
    </List>
  );
};

List0.defaultProps = {
  list: [
    'What is a Flexi SIP?',
    'What are the available mode of payments for SIP?',
    'How to pause/resume the Flexi SIP?',
    'Does the Fund House allotment show it as Flexi SIP/ SIP?',
    'What are the available mode of payments for Flexi SIP?',
    'What are the available mode of payments for Flexi SIP?'
  ]
};

export default List0;