import React from 'react';
import { makeStyles, ListSubheader, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Folder } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  List: {
    fontFamily: 'Montserrat',
    backgroundColor: theme.palette.background.paper
  },
  ListSubheader: {
    color: theme.palette.primary.main,
    fontFamily: "Muli",
    fontSize: theme.typography.fontSizes.s20,
    fontWeight: 800
  },
  ListItem: {
    paddingLeft: theme.typography.fontSizes.s30
  },
  ListItemIcon: {
    minWidth: 'auto',
    marginRight: theme.typography.fontSizes.s10
  },
  ListItemText: {
    fontFamily: 'inherit',
    fontSize: theme.typography.fontSizes.s14
  },
  Icon: {
    fontSize: theme.typography.fontSizes.s16
  },

}));

const List2 = props => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List subheader={ <ListSubheader classes={{root: classes.ListSubheader }}>{ props.title }</ListSubheader> } className={ classes.List }>
      {
        props.list.map((item, index) => (
          <ListItem key={ index }  classes={ { root: classes.ListItem } }>
            <ListItemIcon classes={ { root: classes.ListItemIcon } }>
              <Folder classes={ { root: classes.Icon } }/>
            </ListItemIcon>
            <ListItemText classes={ { primary: classes.ListItemText } } id="switch-list-label-wifi" primary={ item }/>
          </ListItem>
        ))
      }
    </List>
  );
};

List2.defaultProps = {
  title: 'Sub Categories Under This Category',
  list: [
    'What is a Financial Advisor?',
    'What do I get with TaxFox Premier?',
    'How often do I receive a portfolio performance report?',
    'Can I meet my wealth coach in person?',
    'Are your financial advisors SEBI certified?'
  ]
};

export default List2;