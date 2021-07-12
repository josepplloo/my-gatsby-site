export const styles = ({ foreground, background }) => ({
  header: {
    background: background,
    marginBottom: '1.45rem',
    minWidth: '100%',
    position: 'fixed',
    transition: 'all 1s ease-out'
  },
  navbar: {
    boxShadow: `0 0.1rem .4rem ${foreground}`,
    display: 'flex',
    justifyContent: 'space-around',
    margin: '0 auto',
    padding: '1.45rem 1.0875rem',
    transition: 'all 1s ease-out'
  },
  title: {
    margin: 0
  },
  link: {
    color: foreground,
    textDecoration: 'none'
  },
  toggle: {
    backgroundColor: foreground,
    borderRadius: '50%',
    color: background,
    fontSize: '1rem',
    height: '2rem',
    padding: 0,
    transform:
      foreground === 'white' ? 'translateX(1rem)' : 'translateX(-1rem)',
    transition: 'transform 0.5s ease-out',
    width: '2rem'
  },
  buttonContainer: {
    alignItems: 'center',
    border: `0.2rem solid ${foreground}`,
    borderRadius: '25% / 50%',
    display: 'flex',
    height: '1.5rem',
    width: '3rem'
  }
})
