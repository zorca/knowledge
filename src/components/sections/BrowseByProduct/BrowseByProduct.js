import React from 'react';
import { Container, Box, makeStyles } from '@material-ui/core';
import BrowseByProductCards from './BrowseByProductCards/BrowseByProductCards';
import BrowseByProductHeader from './BrowseByProductHeader/BrowseByProductHeader';

const styles = makeStyles(theme => ({
  Section: {
    backgroundColor: theme.palette.background.liteGreen
  },
  Container: {
    padding: '75px 0 120px 0'
  }
}));

const BrowseByProduct = (props) => {
  const classes = styles();

  return (
    <Box component="section" className={ classes.Section }>
      <Container maxWidth="lg" className={ classes.Container }>
        <BrowseByProductHeader { ...props.header }/>
        <BrowseByProductCards { ...props } />
      </Container>
    </Box>
  );
};

BrowseByProduct.defaultProps = {
  header: {
    title: 'Browse By',
    titleSecond: 'Product',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
  },
  products: [
    {
      id: 1,
      title: 'TaxFox',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis'
    },
    {
      id: 2,
      title: 'Goalie',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis'
    }
  ]
};

export default BrowseByProduct;


