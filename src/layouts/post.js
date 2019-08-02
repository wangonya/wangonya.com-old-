import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import DefaultLayout from "../layouts/default"
import SEO from "../components/seo"

const showSeriesList = seriesList =>
  seriesList.map(series => (
    <div
      key={series.node.id}
      className="timeline-item"
      title={series.node.frontmatter.title}
      to={series.node.fields.slug}
    />
  ))
const PostTemplate = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { next, prev } = pageContext
  return (
    <DefaultLayout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Helmet>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"
          async
        />
      </Helmet>
      <article>
        <div className="center">
          <h1 className="title">{frontmatter.title}</h1>
          <span className="code">
            <small>{frontmatter.date}</small>
          </span>
        </div>
        <div className="divider" />
        {frontmatter.series && (
          <small className="code">
            This blog is part of the "{frontmatter.series}" series.
            <div className="container">
              {showSeriesList(data.allMarkdownRemark.edges)}
            </div>
          </small>
        )}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <div className="page-navigation code">
        {prev && (
          <Link
            className="prev"
            to={prev.fields.slug}
            title={prev.frontmatter.title}
          >
            &lt;&lt;
          </Link>
        )}
        <span> &middot; </span>
        <Link to="/" className="home" title="Back Home">
          {" "}
          Home{" "}
        </Link>
        <span> &middot; </span>
        {next && (
          <Link
            className="next"
            to={next.fields.slug}
            title={next.frontmatter.title}
          >
            &gt;&gt;
          </Link>
        )}
      </div>
    </DefaultLayout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($slug: String!, $series: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        series
      }
    }
    allMarkdownRemark(filter: { frontmatter: { series: { eq: $series } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
