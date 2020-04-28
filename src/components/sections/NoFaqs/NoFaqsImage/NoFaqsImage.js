import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "no-faq.png" }) {
        childImageSharp {
          fluid(maxWidth: 376) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={ data.image.childImageSharp.fluid }/>;
}

