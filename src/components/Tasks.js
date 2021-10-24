import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({ tasks, onDelete }) => (
  <>
    {tasks.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete} />
    ))}
  </>
)

Tasks.defaultProps = {
  tasks: [],
}

Tasks.propTypes = {
  taks: PropTypes.array,
  onDelete: PropTypes.func,
}

export default Tasks
