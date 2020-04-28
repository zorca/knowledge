import React from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import DiscoverPopularArticlesCards from './DiscoverPopularArticlesCards/DiscoverPopularArticlesCards';
import SectionHeader from '../../blocks/SectionHeader/SectionHeader';

const styles = makeStyles(theme => ({
  Section: {
    backgroundColor: theme.palette.background.liteGreen,
    minHeight: '1205px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: "40px"
  },
}));

const DiscoverPopularArticles = props => {
  const classes = styles();

  return (
    <Box component="section" className={ classes.Section }>
      <Container maxWidth='xl'>
        <SectionHeader { ...props }/>
        <DiscoverPopularArticlesCards items={ props.items }/>
      </Container>
    </Box>
  );
};

DiscoverPopularArticles.defaultProps = {
  title: 'Discover',
  titleSecond: 'Popular Articles',
  subTitle: 'Explore Articles and learn best practices from our knowledge base.',
  items: [
    {
      id: 1,
      author: {
        name: 'Sophie McMonagle',
        date: 'Edited 4 months ago'
      },
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed dong',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed dong eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim good veniamig, exercitation ullamco laboris nisi Lorem ipsum, or lipsum as it is sometime dummy text used in laying out print, graphic or web designs passage isgo attri.magna aliqua. Ut enim ad minim veniam. The relationship between you and Taxsmile shall be governed by the Laws of India. You and Taxsmile agree',
      likes: '50'
    },
    {
      key: 2,
      author: {
        name: 'Sophie McMonagle',
        date: 'Edited 4 months ago'
      },
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed dong eiusmod incididunt ut labore et dolore magna aliqua.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed dong eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim good veniamig, exercitation ullamco laboris nisi Lorem ipsum, or lipsum as it is sometime dummy text used in laying out print, graphic or web designs passage isgo attri.magna aliqua. Ut enim ad minim veniam. The relationship between you and Taxsmile shall be governed by the Laws of India. You and Taxsmile agree',
      likes: '150'
    },
    {
      key: 3,
      author: {
        name: 'Sophie McMonagle',
        date: 'Edited 4 months ago'
      },
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed dong eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim good veniamig, exercitation ullamco laboris nisi Lorem ipsum, or lipsum as it is sometime dummy text used in laying out print, graphic or web designs passage isgo attri.magna aliqua. Ut enim ad minim veniam. The relationship between you and Taxsmile shall be governed by the Laws of India. You and Taxsmile agree',
      likes: '650'
    }
  ]
};

export default DiscoverPopularArticles;