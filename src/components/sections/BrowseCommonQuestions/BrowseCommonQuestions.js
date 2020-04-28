import React from 'react';
import { makeStyles, Container, Box } from '@material-ui/core';
import SectionHeader from '../../blocks/SectionHeader/SectionHeader';
import Cards from './BrowseCommonQuestionsCards/BrowseCommonQuestionsCards';
import Button from './BrowseCommonQuestionsButton/BrowseCommonQuestionsButton';

const styles = makeStyles({
  Section: {
    fontFamily: 'Montserrat, sans-serif'
  },
  Container: {
    padding: '80px 0 100px 0'
  }
});

const BrowseCommonQuestions = props => {
  const classes = styles();

  return (
    <Box component="section" className={ classes.Section }>
      <Container maxWidth="xl" className={ classes.Container }>
        <SectionHeader { ...props }/>
        <Cards items={ props.items }/>
        <Box display="flex" justifyContent="center">
          <Button>See more</Button>
        </Box>
      </Container>
    </Box>
  );
};

const array = [
  'What is a Flexi SIP?',
  'What are the available mode of payments for SIP?',
  'How to pause/resume the Flexi SIP?',
  'Does the Fund House allotment show it as Flexi SIP/ SIP?',
  'What are the available mode of payments for Flexi SIP?',
  'What are the available mode of payments for Flexi SIP?'
];

BrowseCommonQuestions.defaultProps = {
  title: 'Browse Common',
  titleSecond: 'Questions',
  subTitle: 'Search here for a topic or question',
  items: [
    { title: 'Sub Category 1', list: array },
    { title: 'Sub Category 2', list: array },
    { title: 'Sub Category 3', list: array },
    { title: 'Sub Category 4', list: array },
    { title: 'Sub Category 5', list: array },
    { title: 'Sub Category 6', list: array }
  ]
};
export default BrowseCommonQuestions;
