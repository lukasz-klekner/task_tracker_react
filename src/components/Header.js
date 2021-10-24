import PropTypes from 'prop-types'

const Header = ({ title }) => (
  <header>
    <h1>{title}</h1>
  </header>
)

Header.defaultProps = {
  title: 'Hello Lukasz',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
