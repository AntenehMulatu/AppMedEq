import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EquidevWhereUniqueInput } from "../equidev/EquidevWhereUniqueInput";
import { TaskPlannerWhereUniqueInput } from "../taskPlanner/TaskPlannerWhereUniqueInput";

export type TicketCreateInput = {
  companyId?: CompanyWhereUniqueInput | null;
  equipmentId?: EquidevWhereUniqueInput | null;
  isPrimeCustomer?: boolean | null;
  nameOfCustomer?: string | null;
  nameOfEquipment: string;
  requisitionDate?: Date | null;
  requisitionDetails?: string | null;
  requisitionType?: string | null;
  taskPlanners?: TaskPlannerWhereUniqueInput;
  ticketStatus?: "Done" | "Open" | "Closed" | null;
};
