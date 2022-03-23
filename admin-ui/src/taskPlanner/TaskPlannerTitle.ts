import { TaskPlanner as TTaskPlanner } from "../api/taskPlanner/TaskPlanner";

export const TASKPLANNER_TITLE_FIELD = "employeeAssigned";

export const TaskPlannerTitle = (record: TTaskPlanner): string => {
  return record.employeeAssigned || record.id;
};
