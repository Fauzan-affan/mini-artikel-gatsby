const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const postTemplate = path.resolve('./src/templates/post.js');

    return new Promise((resolve, reject) => {
        graphql(`
        {
            allMarkdownRemark(sort: {order: ASC, fields: frontmatter___date}) {
                nodes {
                    frontmatter {
                        date
                        path
                        title
                    }
                    html
                    id
                }
            }
        }
        `).then(({ data }) => {
            const articles = data.allMarkdownRemark.nodes;
            data.allMarkdownRemark.nodes.forEach((article, index) => {
                createPage({
                    path: article.frontmatter.path,
                    component: postTemplate,
                    context: {
                        prev: index === 0 ? null : articles[index - 1].frontmatter,
                        next: index === articles.length - 1 ? null : articles[index + 1].frontmatter
                    }
                })
                resolve();
            });
        }).catch(err => reject(err))
    })
}