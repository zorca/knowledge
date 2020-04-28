import React from 'react';
import { Container, Box, Typography, makeStyles } from '@material-ui/core';
import Image from './NoFaqsImage/NoFaqsImage';

const styles = makeStyles(theme => ({
  Wrapper: {
    minHeight: '460px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  Image: {
    width: '100%',
    maxWidth: '187px',
    marginBottom: '50px'
  },
  Text: {
    color: theme.palette.text.grey,
    fontFamily: 'Montserrat',
    fontSize: '1.375rem', // 22px
    fontWeight: 800,
    lineHeight: 1.2,
    textTransform: 'uppercase'
  }
}));

const NoFaq = props => {
  const classes = styles();

  return (
    <Box component="section" className={ classes.Wrapper }>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box className={ classes.Image }>
          <Image/>
        </Box>
        <Typography classes={ { root: classes.Text } }>{ props.text }</Typography>
      </Box>
    </Box>
  );
};

NoFaq.defaultProps = {
  text: 'SORRY no faqs under this Category'
};

export default NoFaq;
