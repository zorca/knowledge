import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "community.png" }) {
        childImageSharp {
          fluid(maxWidth: 796) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={ data.image.childImageSharp.fluid }/>;
}
