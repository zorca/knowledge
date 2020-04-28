import React from 'react';
import { Button, Card, makeStyles, Typography } from '@material-ui/core';

const styles = makeStyles(theme => ({
  Card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  CardWrapper: {
    flex: '1 1 auto',
    padding: '30px'
  },
  CardTitle: {
    color: theme.palette.primary.main,
    fontFamily: 'inherit',
    fontSize: theme.typography.fontSizes.s20,
    fontWeight: 'bold',
    marginBottom: '25px'
  },
  CardList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  CardItem: {
    marginBottom: '15px',
    '&:last-child': {
      marginBottom: 0
    }
  },
  CardItemText: {
    fontFamily: 'inherit'
  },
  CardButton: {
    fontFamily: 'inherit',
    fontSize: theme.typography.fontSizes.s20,
    fontWeight: 'bold',
    backgroundColor: '#FAFBFC',
    justifyContent: 'flex-start',
    paddingLeft: '30px',
    minHeight: '65px',
    borderRadius: 0
  }
}));

export default props => {
  const classes = styles();
  console.log(props);
  return (
    <Card className={ classes.Card }>
      <div className={ classes.CardWrapper }>
        <Typography component="h3" className={ classes.CardTitle }>{ props.item.title }</Typography>
        <ul className={ classes.CardList }>
          { props.item.list.map(current => {
            return (
              <li className={ classes.CardItem }>
                <Typography component="span" className={ classes.CardItemText }>{ current }</Typography>
              </li>
            );
          }) }
        </ul>
      </div>
      <Button fullWidth className={ classes.CardButton }>See All</Button>
    </Card>
  );
}
