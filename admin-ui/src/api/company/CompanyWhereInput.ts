import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { EquidevListRelationFilter } from "../equidev/EquidevListRelationFilter";
import { EquipmentSaleListRelationFilter } from "../equipmentSale/EquipmentSaleListRelationFilter";
import { InstallationListRelationFilter } from "../installation/InstallationListRelationFilter";
import { MaintRepairListRelationFilter } from "../maintRepair/MaintRepairListRelationFilter";
import { SparePartListRelationFilter } from "../sparePart/SparePartListRelationFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type CompanyWhereInput = {
  companyAddress?: StringNullableFilter;
  companyDepartment?: StringFilter;
  companyName?: StringFilter;
  companyPhone?: FloatFilter;
  companyType?: "Customer" | "Supplier" | "Institution";
  employees?: EmployeeListRelationFilter;
  equipments?: EquidevListRelationFilter;
  equipmentSales?: EquipmentSaleListRelationFilter;
  id?: StringFilter;
  installations?: InstallationListRelationFilter;
  maintRepairs?: MaintRepairListRelationFilter;
  spareParts?: SparePartListRelationFilter;
  tickets?: TicketListRelationFilter;
};
