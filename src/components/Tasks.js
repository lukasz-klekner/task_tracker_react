import PropTypes from 'prop-types'

const Tasks = ({ tasks }) => (
  <>
    {tasks.map(({ text, id }) => (
      <h3 key={id}>{text}</h3>
    ))}
  </>
)

Tasks.defaultProps = {
  tasks: [],
}

Tasks.propTypes = {
  taks: PropTypes.array,
}

export default Tasks
