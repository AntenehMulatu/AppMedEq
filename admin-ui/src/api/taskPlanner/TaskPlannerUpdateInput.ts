import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";

export type TaskPlannerUpdateInput = {
  employeeAssigned?: string | null;
  employeeid?: EmployeeWhereUniqueInput | null;
  priorityLevel?: "High" | "Middium" | "Low" | null;
  taskEndDate?: Date;
  taskStartDate?: Date;
  taskStatus?: "Open" | "Done" | "Closed" | null;
  ticketId?: TicketWhereUniqueInput | null;
  ticketNumber?: number;
};
