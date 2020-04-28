import React from 'react';
import { Card, Button, makeStyles } from '@material-ui/core';
import DiscoverPopularArticlesCardHeader from '../DiscoverPopularArticlesCardHeader/DiscoverPopularArticlesCardHeader';
import DiscoverPopularArticlesCardContent from '../DiscoverPopularArticlesCardContent/DiscoverPopularArticlesCardContent';
import DiscoverPopularArticlesCardFooter from '../DiscoverPopularArticlesCardFooter/DiscoverPopularArticlesCardFooter';

const styles = makeStyles(theme => ({
  Card: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Montserrat',
    height: '100%'
  },
  Wrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 35px 30px',
    flex: '1 1 auto'
  },
  Header: {
    marginBottom: '25px'
  },
  Content: {
    marginBottom: '30px',
    flex: '1 1 auto'
  },
  Footer: {},
  Button: {
    fontFamily: 'inherit',
    fontSize: '20px',
    fontWeight: 'bold',
    lineHeight: '34px',
    height: '78px',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }
}));

export default props => {
  const classes = styles();
  console.log(props);
  return (
    <Card className={ classes.Card }>
      <div className={ classes.Wrapper }>
        <div className={ classes.Header }>
          <DiscoverPopularArticlesCardHeader { ...props.author } />
        </div>
        <div className={ classes.Content }>
          <DiscoverPopularArticlesCardContent { ...props } />
        </div>
        <div className={ classes.Footer }>
          <DiscoverPopularArticlesCardFooter { ...props } />
        </div>
      </div>
      <Button fullWidth size="large" className={ classes.Button }>
        READ MORE
      </Button>
    </Card>
  );
}
