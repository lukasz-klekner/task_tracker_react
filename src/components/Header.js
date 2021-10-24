import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = () => {
    console.log('click')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text='Add' color='green' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Hello Lukasz',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
