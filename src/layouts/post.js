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
            This post is part of the "{frontmatter.series}" series.
            <div className="container">
              <input
                type="checkbox"
                className="show-full-state"
                id="show-full"
              />
              {showSeriesList(data.allMarkdownRemark.edges, frontmatter)}
              <br />
              <br />
              <label htmlFor="show-full" className="show-full-trigger" />
            </div>
          </small>
        )}
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <br />
        {frontmatter.date && (
          <div>
            <Claps slug={pageContext.slug.slice(6, -1)} />
            <br />
            <span className="ad-free">
              <a href="https://www.adfreeblog.org/" target="_blank">
                {" "}
                <img
                  src="https://i.ibb.co/1brQp7P/adfreebanner.jpg"
                  alt="ad free site"
                  width="200"
                />
              </a>
            </span>
          </div>
        )}
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
    allMarkdownRemark(
      filter: { frontmatter: { series: { eq: $series } } }
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
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
