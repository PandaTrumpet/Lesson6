import { Button } from "../Button/Button";

import css from "./StatusFilter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/action";
import { statusFilters } from "../../redux/constans";
export const StatusFilter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));
  const filter = useSelector(getStatusFilter);
  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        onClick={() => handleFilterChange(statusFilters.active)}
        selected={filter === statusFilters.active}
      >
        Active
      </Button>
      <Button
        onClick={() => handleFilterChange(statusFilters.completed)}
        selected={filter === statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
};
