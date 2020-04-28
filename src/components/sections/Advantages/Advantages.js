import React from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import AdvantagesCards from './AdvantagesCards/AdvantagesCards';

const styles = makeStyles(theme => ({
  Wrapper: {
    paddingTop: '30px',
    paddingBottom: '30px'
  },
  Container: {
    maxWidth: '1567px'
  }
}));

const Advantages = props => {
  const classes = styles();

  return (
    <Box component="section" bgcolor="background.liteBlue" className={ classes.Wrapper }>
      <Container className={ classes.Container }>
        <AdvantagesCards items={ props.items }/>
      </Container>
    </Box>
  );
};

Advantages.defaultProps = {
  items: [
    {
      id: 1,
      title: 'Getting Started',
      list: [
        'What Is Piggy?',
        'What Can You Do With Piggy?',
        'How To Invest In A Mutual Fund?',
        'Which All Fund Houses Can I Invest In?'
      ]
    },
    {
      id: 2,
      title: 'Payments Related',
      list: [
        'Premier',
        'Sing Up',
        'Fees',
        'Investing?'
      ]
    },
    {
      id: 3,
      title: 'Tax Filing Process',
      list: [
        'How Are Top Funds Selected?',
        'What Is Quantitive Analysis? How Is It Used To……',
        'What Are The Quantitative Analysis Parameters…..',
        'What Is Qualitative Analysis? How Is It …..?'
      ]
    }
  ]
};

export default Advantages;