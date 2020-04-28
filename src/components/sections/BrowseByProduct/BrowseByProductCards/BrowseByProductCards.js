import React from 'react';

import BrowseByProductCard from '../BrowseByProductCard/BrowseByProductCard';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  List: {
    margin: '-20px 0 0 -20px',
    padding: 0,
    listStyleType: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  Item: {
    maxWidth: '460px',
    margin: '20px 0 0 20px'
  }
});

export default ({ products }) => {
  const classes = styles();

  return (
    <ul className={ classes.List }>
      {
        products.map(card => (
          <li key={ card.id } className={ classes.Item }>
            <BrowseByProductCard { ...card }/>
          </li>
        ))
      }
    </ul>
  );
}
