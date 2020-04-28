import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Card,
  Button,
  Box
} from '@material-ui/core';
import List from '../../../blocks/List/List';

const styles = makeStyles(theme => ({
  Card: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100%',
    border: '1px solid #838383',
    borderRadius: 12,
    padding: '26px 20px',
    textAlign: 'left'
  },
  CardButton: {
    fontSize: theme.typography.fontSizes.s22,
    fontWeight: 600,
    // color: '#5ED291',
    color: theme.palette.secondary.main,
    borderRadius: 10,
    border: '2px solid #5ED291',
    padding: '5px 30px'
  }
}));

const BrowseCommonQuestionsCard = props => {
  const classes = styles();

  return (
    <Card variant="outlined" className={ classes.Card }>
      <List { ...props }/>
      <Box display="flex" justifyContent="center">
        <Button variant="outlined" className={ classes.CardButton }>SEE MORE</Button>
      </Box>
    </Card>
  );
};

BrowseCommonQuestionsCard.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.string.isRequired
  )
};

export default BrowseCommonQuestionsCard;
