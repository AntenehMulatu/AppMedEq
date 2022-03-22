import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type TaskPlannerWhereInput = {
  employeeAssigned?: StringNullableFilter;
  employeeid?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  priorityLevel?: "High" | "Middium" | "Low";
  taskEndDate?: DateTimeFilter;
  taskStartDate?: DateTimeFilter;
  taskStatus?: "Open" | "Done" | "Closed";
  ticketId?: TicketWhereUniqueInput;
  ticketNumber?: IntFilter;
};
