import PropTypes from 'prop-types'
import { useLocation } from 'react-router'

import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const { pathname } = useLocation()
  return (
    <header className='header'>
      <h1>{title}</h1>
      {pathname === '/' && (
        <Button
          text={showAdd ? 'Close' : 'Add'}
          color={showAdd ? 'red' : 'green'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Hello Lukasz',
}

Header.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func,
  showAdd: PropTypes.bool,
}

export default Header
