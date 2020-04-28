import React from 'react';
import { Container, Box, makeStyles } from '@material-ui/core';
import CardList from './FaqCardList/FaqCardList';
import Breadcrumbs from '../../blocks/Breadcrumbs/Breadcrumbs';

const styles = makeStyles(theme => ({
  Container: {
    maxWidth: '1708px',
    paddingTop: '30px',
    paddingBottom: '50px',
  },
  Breadcrumbs: {
    margin: '0 auto 30px',
    maxWidth: '90%'
  },
  Content: {}
}));

const Faq = props => {
  const classes = styles();

  return (
    <Box component="section" bgcolor="background.default">
      <Container maxWidth="xl" className={ classes.Container }>
        <div className={ classes.Breadcrumbs }>
          <Breadcrumbs links={ props.breadcrumbs }/>
        </div>
        <div className={ classes.Content }>
          <CardList data={ props.items }/>
        </div>
      </Container>
    </Box>
  );
};

Faq.defaultProps = {
  breadcrumbs: [
    { href: '/', text: 'Help' },
    { href: '/', text: 'Taxfox' }
  ],
  items: [
    {
      title: 'FAQs',
      text: 'Get your question answered by an expert. Ask us.'
    },
    {
      title: 'How-Tos',
      text: 'Have a query? Read articles written by Team TaxFox'
    },
    {
      title: 'Articles',
      text: 'Have a query? Read articles written by Team TaxFox'
    },
    {
      title: 'Guides',
      text: 'Have a query? Read articles written by Team TaxFox'
    },
    {
      title: 'Quick Links',
      text: 'Have a query? Read articles written by Team TaxFox'
    }
  ]
};

export default Faq;