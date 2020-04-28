import React from 'react';
import Card from '../BrowseCommonQuestionsCard/BrowseCommonQuestionsCard';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  CommonQuestions: {
    maxWidth: '1637px',
    margin: '0 auto 90px',
    '&:last-child': {
      marginBottom: 0
    }
  },
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
});

export default props => {
  const classes = styles();

  return (
    <div className={ classes.CommonQuestions }>
      <ul className={ classes.List }>
        {
          props.items.map((item, index) => (
            <li key={ index } className={ classes.Item }>
              <Card { ...item }/>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
