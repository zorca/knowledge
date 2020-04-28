import React from 'react';
import { Box, Container, makeStyles, Tabs } from '@material-ui/core';
import Layout from '../components/Layout/layout';
import NoFaqs from '../components/sections/NoFaqs/NoFaqs';
import List2 from '../components/blocks/List2/List2';
import Banner from '../components/sections/Banner2/Banner2';
import Sidebar from '../components/Sidebar/Sidebar';
import Tab from '../components/blocks/Tab/Tab';
import Panel from '../components/blocks/Panel/Panel';
import GetHelp from '../components/blocks/GetHelp';

const styles = makeStyles(theme => ({
  TabsRoot: {
    backgroundColor: theme.palette.background.grey
  },
  shadow: {
    position: 'relative',
    '&:after': {
      content: '""',
      backgroundColor: theme.palette.background.grey,
      position: 'absolute',
      top: 0,
      left: '100%',
      right: '-100%',
      height: '70px'
    }
  }
}));

function a11yProps (index) {
  return {
    id: `simple-tab-${ index }`,
    'aria-controls': `simple-tabpanel-${ index }`
  };
}

const Page = () => {
  const classes = styles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Banner/>
      <Container maxWidth="xl">
        <Box display="flex">
          <Sidebar/>
          <Box width="100%" className={ classes.shadow }>
            <Tabs
              value={ value }
              onChange={ handleChange }
              aria-label="simple tabs example"
              classes={ { root: classes.TabsRoot } }
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="FAQS" { ...a11yProps(0) }/>
              <Tab label="HOW-TOS"{ ...a11yProps(0) }/>
              <Tab label="ARTICLES" { ...a11yProps(0) }/>
              <Tab label="GUIDES" { ...a11yProps(0) }/>
            </Tabs>
            <Panel value={ value } index={ 0 }>
              <NoFaqs/>
              <List2/>
            </Panel>
            <Panel value={ value } index={ 1 }>
              <GetHelp/>
            </Panel>
            <Panel value={ value } index={ 2 }>
              Item Three
            </Panel>
            <Panel value={ value } index={ 3 }>
              Item Three
            </Panel>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Page;
