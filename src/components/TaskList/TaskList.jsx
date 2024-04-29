import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constans";
import { getStatusFilter } from "../../redux/selectors";
const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};
export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

// const getVi = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilter.active:
//       return tasks.filter((task) => !task.completed);
//     case statusFilter.completed:
//       return tasks.filter((task) => task.completed);
//     default:
//       return tasks;
//   }
// };
