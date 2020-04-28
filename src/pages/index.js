import React from 'react';

import Layout from '../components/Layout/layout';
import Banner from '../components/sections/Banner/Banner';
import BrowseByProduct from '../components/sections/BrowseByProduct/BrowseByProduct';
import BrowseCommonQuestions from '../components/sections/BrowseCommonQuestions/BrowseCommonQuestions';
import JoinNow from '../components/sections/JoinNow/JoinNow';
import Community from '../components/sections/Community/Community';

const IndexPage = () => (
  <Layout>
    <Banner/>
    <BrowseByProduct/>
    <BrowseCommonQuestions/>
    <JoinNow/>
    <Community/>
  </Layout>
);

export default IndexPage;
