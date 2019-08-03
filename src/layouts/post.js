import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import DefaultLayout from "../layouts/default"
import SEO from "../components/seo"
import Claps from "../components/clap"

const styles = {
  fontWeight: "bold",
}

const showSeriesList = (seriesList, frontmatter) =>
  seriesList.map(series => (
    <Link to={series.node.fields.slug} key={series.node.id}>
      <div
        title={series.node.frontmatter.title}
        className="timeline-item"
        style={
          frontmatter.title === series.node.frontmatter.title ? styles : {}
        }
      />
    </Link>
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
              {showSeriesList(data.allMarkdownRemark.edges, frontmatter)}
            </div>
          </small>
        )}
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <br />
        {frontmatter.date && <Claps slug={pageContext.slug.slice(6, -1)} />}
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
