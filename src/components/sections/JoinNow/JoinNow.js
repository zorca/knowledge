import React from 'react';
import { Container, Box, Typography, makeStyles } from '@material-ui/core';
import Image from './JoinNowImage/JoinNowImage';
import Button from './JoinNowButton/JoinNowButton';

const styles = makeStyles(theme => ({
  Box: {
    color: '#fff',
    backgroundColor: '#3D8BFF',
    fontFamily: 'Open Sans, sans-serif'
  },
  Container: {
    minHeight: '284px',
    maxWidth: '1128px',
    paddingTop: '45px',
    paddingBottom: '45px',
    textAlign: 'left',
    position: 'relative'
  },
  Wrapper: {
    marginBottom: 30
  },
  Title: {},
  TitleGutterBottom: {
    marginBottom: '12px'
  },
  SubTitle: {
    letterSpacing: '1px'
  },

  Image: {
    width: '280px',
    position: 'absolute',
    right: 0,
    bottom: 0
  }
}));

const JoinNow = props => {
  const classes = styles();

  return (
    <Box component="section" className={ classes.Box }>
      <Container classes={ { root: classes.Container } }>
        <div className={ classes.Image }>
          <Image/>
        </div>
        <Box position="relative">
          <Box className={ classes.Wrapper }>
            <Typography component="h3" variant="h3" gutterBottom classes={ { root: classes.TitleGutterBottom } }>
              { props.title }
            </Typography>
            <Typography component="span" variant="subtitle2" className={ classes.SubTitle }>
              { props.subTitle }
            </Typography>
          </Box>
          <Button>JOIN NOW ></Button>
        </Box>
      </Container>
    </Box>
  );
};

JoinNow.defaultProps = {
  title: 'Join the Community of Smart Tax Filers - NOW !',
  subTitle: 'Let Tax Filing process a Breeze for you this season !!'
};

export default JoinNow;
