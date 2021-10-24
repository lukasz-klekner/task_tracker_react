import PropTypes from 'prop-types'

const Task = ({ task }) => (
  <div className='task'>
    <h3>{task.text}</h3>
    <p>{task.day}</p>
  </div>
)

Task.defaultProps = {
  task: {},
}

Task.propTypes = {
  task: PropTypes.object,
}

export default Task
