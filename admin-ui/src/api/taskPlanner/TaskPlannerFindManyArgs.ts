import { TaskPlannerWhereInput } from "./TaskPlannerWhereInput";
import { TaskPlannerOrderByInput } from "./TaskPlannerOrderByInput";

export type TaskPlannerFindManyArgs = {
  where?: TaskPlannerWhereInput;
  orderBy?: Array<TaskPlannerOrderByInput>;
  skip?: number;
  take?: number;
};
