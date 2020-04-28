import React from 'react';
import { Container, Box, makeStyles, Tabs } from '@material-ui/core';
import Layout from '../components/Layout/layout';
import Banner from '../components/sections/Banner2/Banner2';
import Sidebar from '../components/Sidebar/Sidebar';
import Tab from '../components/blocks/Tab/Tab';
import Panel from '../components/blocks/Panel/Panel';
import List from '../components/blocks/List/List';
import List2 from '../components/blocks/List2/List2';

const styles = makeStyles(theme => ({
  Container: {
    position: "relative"
  },
  TabsRoot: {
    backgroundColor: theme.palette.background.grey,
    position: "relative"
  }
}));

function a11yProps (index) {
  return {
    id: `simple-tab-${ index }`,
    'aria-controls': `simple-tabpanel-${ index }`
  };
}

export default () => {
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
          <Box width="100%">
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
              <List/>
            </Panel>
            <Panel value={ value } index={ 1 }>
              <List2/>
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