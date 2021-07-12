import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { ThemeContext, themes, useThemes } from './Context/Theme'
import Header from './Header'
import Footer from './Footer'
import './layout.css'

const Layout = ({ children }) => {
  const [theme, handleToggle] = useThemes()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <ThemeContext.Provider value={themes}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        handleToggle={handleToggle}
        theme={theme}
      />
      <div
        style={{
          color: theme.foreground,
          background: theme.background,
          margin: `0 auto`,
          maxWidth: 1280,
          padding: `10rem 2rem 1.45rem`
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
