import React from 'react';
import { Container, Box, Typography, makeStyles } from '@material-ui/core';
import Image from './CommunityImage/CommunityImage';
import Button from './CommunityButton/CommunityButton';

const styles = makeStyles({
  Section: {
    // fontFamily: "Montserrat, sans-serif",
  },
  Container: {
    // display: "flex",
    maxWidth: '1724px',
    paddingTop: '80px',
    paddingBottom: '100px'
  },
  Wrapper: {
    display: 'flex',
    minHeight: '468px',
    backgroundColor: '#FAFBFC',
    padding: '0 44px 0',
    borderRadius: '50px'
  },
  Item: {
    '&:nth-child(1)': {
      alignSelf: 'flex-end',
      width: '100%',
      maxWidth: '796px',
      marginRight: '93px'
    },
    '&:nth-child(2)': {
      alignSelf: 'center',
      flex: '1 1 auto',
      padding: '25px 0 0'
    }
  },
  Image: {
    // width: "796px",
    width: '100%',
    maxWidth: '796px'
  },
  Title: {
    fontFamily: 'inherit',
    fontSize: '2.777777rem',
    lineHeight: '1.2',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  SubTitle: {
    fontFamily: 'inherit',
    fontSize: '1.11111rem',
    lineHeight: '2',
    width: '28em',
    marginBottom: '23px'
  }
});

const Community = props => {
  const classes = styles();

  return (
    <Box component="section" className={ classes.Section }>
      <Container classes={ { root: classes.Container } }>
        <Box className={ classes.Wrapper }>
          <Box className={ classes.Item }>
            <Box className={ classes.Image }>
              <Image/>
            </Box>
          </Box>
          <Box className={ classes.Item }>
            <Typography component="h2" variant="h3" className={ classes.Title }>{ props.title }</Typography>
            <Typography component="p" className={ classes.SubTitle }>{ props.subTitle }</Typography>
            <Button>Ask the Community</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

Community.defaultProps = {
  title: 'Take A Hand, Lend A Hand',
  subTitle: 'Join our worldwide community to ask expert users for advice or share your own.'
};

export default Community;