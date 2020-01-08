import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout'

const Post = ({ data, pageContext }) => {
    // console.log(data.markdownRemark.html)

    const { frontmatter, html } = data.markdownRemark;
    const { prev, next } = pageContext;

    // console.log(prev, next)

    return (
        <Layout>
            <h2>{frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{__html: html}} />
            <br />
            {prev && <Link to={prev.path}>Prev</Link>} | 
            <Link to={"/"}>Home</Link> | 
            {next && <Link to={next.path}>Next</Link>}
        </Layout>
    )
}

export default Post

export const detailQuery = graphql`
query DetailQuery($path: String!) {
    markdownRemark(frontmatter:{ path:{ eq: $path }}) {
        html
        frontmatter {
            title
        }
    }
}
`;