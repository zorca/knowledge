import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import AdvantagesCard from '../AdvantagesCard/AdvantagesCard';

const styles = makeStyles(theme => ({
  Content: {
    minHeight: '580px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  List: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  Item: {
    width: 'calc(100% / 3 - 76px)',
    margin: '38px'
  }
}));

export default props => {
  const classes = styles();

  return (
    <Box className={ classes.Content }>
      <ul className={ classes.List }>
        {
          props.items.map(item => (
            <li key={ item.id } className={ classes.Item }>
              <AdvantagesCard item={ item }/>
            </li>
          ))
        }
      </ul>
    </Box>
  );
}
