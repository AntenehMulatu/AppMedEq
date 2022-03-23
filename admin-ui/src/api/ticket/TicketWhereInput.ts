import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EquidevWhereUniqueInput } from "../equidev/EquidevWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TaskPlannerWhereUniqueInput } from "../taskPlanner/TaskPlannerWhereUniqueInput";

export type TicketWhereInput = {
  companyId?: CompanyWhereUniqueInput;
  equipmentId?: EquidevWhereUniqueInput;
  id?: StringFilter;
  isPrimeCustomer?: BooleanNullableFilter;
  nameOfCustomer?: StringNullableFilter;
  nameOfEquipment?: StringFilter;
  requisitionDate?: DateTimeNullableFilter;
  requisitionDetails?: StringNullableFilter;
  requisitionType?: StringNullableFilter;
  taskPlanners?: TaskPlannerWhereUniqueInput;
  ticketStatus?: "Done" | "Open" | "Closed";
};
