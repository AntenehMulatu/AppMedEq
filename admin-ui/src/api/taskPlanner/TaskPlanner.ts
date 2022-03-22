import { Employee } from "../employee/Employee";
import { Ticket } from "../ticket/Ticket";

export type TaskPlanner = {
  createdAt: Date;
  employeeAssigned: string | null;
  employeeid?: Employee | null;
  id: string;
  priorityLevel?: "High" | "Middium" | "Low" | null;
  taskEndDate: Date;
  taskStartDate: Date;
  taskStatus?: "Open" | "Done" | "Closed" | null;
  ticketId?: Ticket | null;
  ticketNumber: number;
  updatedAt: Date;
};
