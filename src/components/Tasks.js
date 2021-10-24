import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({ tasks }) => (
  <>
    {tasks.map((task) => (
      <Task key={task.id} task={task} />
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
