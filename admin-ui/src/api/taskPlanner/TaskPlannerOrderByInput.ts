import { SortOrder } from "../../util/SortOrder";

export type TaskPlannerOrderByInput = {
  createdAt?: SortOrder;
  employeeAssigned?: SortOrder;
  employeeidId?: SortOrder;
  id?: SortOrder;
  priorityLevel?: SortOrder;
  taskEndDate?: SortOrder;
  taskStartDate?: SortOrder;
  taskStatus?: SortOrder;
  ticketIdId?: SortOrder;
  ticketNumber?: SortOrder;
  updatedAt?: SortOrder;
};
