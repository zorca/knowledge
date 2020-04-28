import styles from "./FaqCardListStyles"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Card from "../FaqCard/FaqCard"
import Img from "gatsby-image"

export default props => {
  const classes = styles()
  const data = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "1.png" }) {
        childImageSharp {
          fluid(maxWidth: 270) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "2.png" }) {
        childImageSharp {
          fluid(maxWidth: 270) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tree: file(relativePath: { eq: "3.png" }) {
        childImageSharp {
          fluid(maxWidth: 270) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      four: file(relativePath: { eq: "2.png" }) {
        childImageSharp {
          fluid(maxWidth: 270) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      five: file(relativePath: { eq: "3.png" }) {
        childImageSharp {
          fluid(maxWidth: 270) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const arr = ["one", "two", "tree", "four", "five"]

  return (
    <ul className={classes.List}>
      {props.data.map((item, index) => {
        return (
          <li className={classes.Item}>
            <Card title={item.title} text={item.text}>
              <Img fluid={data[arr[index]].childImageSharp.fluid} />
            </Card>
          </li>
        )
      })}
    </ul>
  )
}
