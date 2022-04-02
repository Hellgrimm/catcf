import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <Layout>
    <section className={styles.header}>
      <div className={styles.head}>
        <h2>Main Page</h2>
        <h3>Welcome to the site of Game! </h3>
        <p>There we would place information about characters, locatins, our plans and other. U can check the progress of development here:</p>
        <div className={styles.button}>
          <Link className={styles.btn} to="/about">Development Page</Link>
        </div>
      </div>
      <div className={styles.pic}>
        <Img fluid={data.file.childImageSharp.fluid}/>
      </div>
    </section>
    <section className={styles.main}>
      <div className={styles.firstpar}>
        <h3>First Paragraph</h3>
        <p>Thats another paragraph. Nice to see you!</p>
      </div>
    </section>
    </Layout>
  )
}

//exports page query
export const query = graphql`
query Steven {
  file(relativePath: {eq: "tea.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`