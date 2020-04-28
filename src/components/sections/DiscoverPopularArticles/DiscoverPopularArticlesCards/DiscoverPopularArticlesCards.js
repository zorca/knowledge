import React from 'react';
import { makeStyles } from '@material-ui/core';
import DiscoverPopularArticlesCard from '../DiscoverPopularArticlesCard/DiscoverPopularArticlesCard';

const styles = makeStyles(theme => ({
  List: {
    margin: '-76px 0 0 -38px',
    padding: 0,
    listStyleType: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  Item: {
    width: 'calc(100% / 3 - 38px)',
    margin: '76px 0 0 38px'
  }
}));

export default props => {
  const classes = styles();

  return (
    <ul className={ classes.List }>
      {
        props.items.map(item => (
          <li key={ item.id } className={ classes.Item }>
            <DiscoverPopularArticlesCard {...item }/>
          </li>
        ))
      }
    </ul>
  );
}
