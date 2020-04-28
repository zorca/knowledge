import React from 'react';
import { makeStyles, Box, Typography, Container } from '@material-ui/core';
import Search from '../../blocks/Search/Search';
import Image from './Banner2Image/Banner2Image';

const styles = makeStyles(theme => ({
  Container: {
    position: 'relative'
  },
  Image: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 870,
    height: 'auto'
  },
  Content: {
    maxWidth: '1640px',
    margin: '0 auto'
  },
  ContentInner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '845px',
    minHeight: '313px',
    padding: '20px 0'
  },
  TitleGutterBottom: {
    marginBottom: '15px'
  },
  SubTitleGutterBottom: {
    marginBottom: '35px'
  }
}));

const Banner2 = props => {
  const classes = styles();

  return (
    <Box component="section" color="text.white" bgcolor="background.blue">
      <Container maxWidth="xl" classes={ { root: classes.Container } }>
        <Box classes={ { root: classes.Image } }>
          <Image/>
        </Box>
        <Box className={ classes.Content }>
          <Box className={ classes.ContentInner }>
            <Typography
              variant="h1"
              element="h1"
              gutterBottom
              classes={ { gutterBottom: classes.TitleGutterBottom } }
            >
              { props.title }
            </Typography>
            <Typography
              variant="subtitle1"
              element="span"
              gutterBottom
              classes={ {
                gutterBottom: classes.SubTitleGutterBottom
              } }
            >
              { props.subTitle }
            </Typography>
            <Search/>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

Banner2.defaultProps = {
  title: 'Taxfox Help',
  subTitle: 'Hi, how can we help?'
};

export default Banner2;