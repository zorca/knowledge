import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, makeStyles } from '@material-ui/core';
import Button from '../BrowseByProductButton/BrowseByProductButton';

const CircleWidth = '170';
const ButtonHeight = '65';

const styles = makeStyles(theme => ({
  Card: {
    position: 'relative',
    padding: `${ CircleWidth / 2 }px 0 ${ ButtonHeight / 2 }px`
  },
  CardPlaque: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    top: 0
  },
  CardPlaqueCircle: {
    width: `${ CircleWidth }px`,
    height: `${ CircleWidth }px`,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  CardPlaqueText: {
    fontSize: '35px',
    fontWeight: 'bold',
    color: theme.palette.primary.main
  },
  CardContent: {
    border: `2px solid ${ theme.palette.primary.main }`,
    padding: `${ CircleWidth / 2 }px 30px ${ ButtonHeight / 2 }px 35px`,
    borderRadius: '10px'
  },
  CardContentInner: {
    padding: '20px 0 38px',
    textAlign: 'left'
  },
  CardTitle: {
    fontFamily: 'inherit',
    fontSize: '1.375rem',
    fontWeight: 'bold',
    marginBottom: 20
  },
  CardText: {
    fontFamily: 'inherit',
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: 0
  },
  CardButtonWrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const BrowseByProductCard = props => {
  const classes = styles();

  return (
    <div className={ classes.Card }>
      <div className={ classes.CardPlaque }>
        <Card elevation={ 2 } className={ classes.CardPlaqueCircle }>
          <Typography component="span" className={ classes.CardPlaqueText }>{ props.title }</Typography>
        </Card>
      </div>
      <Card elevation={ 8 } className={ classes.CardContent }>
        <div className={ classes.CardContentInner }>
          <Typography variant="h5" className={ classes.CardTitle }>{ props.title }</Typography>
          <Typography element="p" className={ classes.CardText }>{ props.text }</Typography>
        </div>
      </Card>
      <div className={ classes.CardButtonWrapper }>
        <Button>KNOW MORE</Button>
      </div>
    </div>
  );
};

BrowseByProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default BrowseByProductCard;