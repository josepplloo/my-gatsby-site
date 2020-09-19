import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { styles } from './styles'
import { ThemeContext } from '../Context/Theme'

function Header ({ siteTitle, handleToggle, theme }) {
  const themes = useContext(ThemeContext)

  return (
    <header style={styles(theme).header}>
      <div style={styles(theme).navbar}>
        <h1 style={styles(theme).title}>
          <Link to='/' style={styles(theme).link}>
            {siteTitle}
          </Link>
        </h1>
        <div style={styles(theme).buttonContainer}>
          <button
            type='button'
            onClick={handleToggle}
            style={styles(theme).toggle}
          >
            {theme === themes.light ? '☽' : '☼'}
          </button>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
