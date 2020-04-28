import React from 'react';

import Layout from '../components/Layout/layout';
import Banner from '../components/sections/Banner2/Banner2';
import Faq from '../components/sections/Faq/Faq';
import Advantages from '../components/sections/Advantages/Advantages';
import BrowseCommonQuestions from '../components/sections/BrowseCommonQuestions/BrowseCommonQuestions';
import DiscoverPopularArticles from '../components/sections/DiscoverPopularArticles/DiscoverPopularArticles';
import JoinNow from '../components/sections/JoinNow/JoinNow';
import Community from '../components/sections/Community/Community';

const IndexPage = () => (
  <Layout>
    <Banner/>
    <Faq/>
    <Advantages/>
    <BrowseCommonQuestions/>
    <DiscoverPopularArticles/>
    <Community/>
    <JoinNow/>
  </Layout>
);

export default IndexPage;
