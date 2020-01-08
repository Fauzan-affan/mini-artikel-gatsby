import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Daftar Artikel</h1>
      <ul>
        {
          data.allMarkdownRemark.nodes.map(article => (
            <li key={article.frontmatter.path}>
              <Link to={article.frontmatter.path}>
                {article.frontmatter.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const indexQuery = graphql`
{
  allMarkdownRemark(sort: { order: ASC, fields: frontmatter___date }) {
    nodes {
      frontmatter {
        date
        path
        title
      }
    }
  }
}
`

export default IndexPage