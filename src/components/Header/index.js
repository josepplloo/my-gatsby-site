import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext, useState, useCallback } from "react"
import {styles} from './styles'
import { ThemeContext } from "../Context/Theme";

function Header({ siteTitle }) {
  const themes = useContext(ThemeContext);
  const [mode, setMode] = useState(themes.light);

  const handleToggle = useCallback(() => { 
    if (mode === themes.light) {
      setMode(themes.dark);
    } else {
      setMode(themes.light);
    }
  },[setMode, mode, themes]);

  return (
    <header
      style={styles(mode).header}
    >
      <div
        style={styles(mode).navbar}
      >
        <h1 style={styles(mode).title}>
          <Link
            to="/"
            style={styles(mode).link}
          >
            {siteTitle}
          </Link>
        </h1>
        <div style={styles(mode).buttonContainer}>
          <button type="button" onClick={handleToggle} style={styles(mode).toggle}>
            { mode === themes.light ? '☽' : '☼' }
          </button>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
