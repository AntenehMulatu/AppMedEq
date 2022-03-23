import { Company } from "../company/Company";
import { Equidev } from "../equidev/Equidev";
import { TaskPlanner } from "../taskPlanner/TaskPlanner";

export type Ticket = {
  companyId?: Company | null;
  createdAt: Date;
  equipmentId?: Equidev | null;
  id: string;
  isPrimeCustomer: boolean | null;
  nameOfCustomer: string | null;
  nameOfEquipment: string;
  requisitionDate: Date | null;
  requisitionDetails: string | null;
  requisitionType: string | null;
  taskPlanners?: TaskPlanner;
  ticketStatus?: "Done" | "Open" | "Closed" | null;
  updatedAt: Date;
};
