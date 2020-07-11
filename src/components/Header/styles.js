export const styles = ({foreground, background}) => ({
  header: {
    background: background,
    marginBottom: '1.45rem',
  },
  navbar: {
    boxShadow: `0 0.1rem .4rem ${foreground}`,
    margin: '0 auto',
    maxWidth: 960,
    padding: '1.45rem 1.0875rem'
  },
  title: {
    margin: 0
  },
  link: {
    color: foreground,
    textDecoration: 'none',
  }
})