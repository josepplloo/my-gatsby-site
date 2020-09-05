/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { ThemeContext, themes, useThemes } from './Context/Theme'
import Header from "./Header"
import "./layout.css"

const Layout = ({ children }) => {
  const [theme, handleToggle ] = useThemes();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
console.log(theme.foreground);
  return (
    <ThemeContext.Provider value={themes}>
      <Header siteTitle={data.site.siteMetadata.title} handleToggle={handleToggle} theme={theme}/>
      <div
        style={{
          color: theme.foreground,
          background: theme.background,
          margin: `0 auto`,
          maxWidth: 960,
          padding: `10rem 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </ThemeContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
