import { CompanyTypeWhereUniqueInput } from "../companyType/CompanyTypeWhereUniqueInput";
import { EmployeeUpdateManyWithoutCompaniesInput } from "./EmployeeUpdateManyWithoutCompaniesInput";
import { EquidevUpdateManyWithoutCompaniesInput } from "./EquidevUpdateManyWithoutCompaniesInput";
import { EquipmentSaleUpdateManyWithoutCompaniesInput } from "./EquipmentSaleUpdateManyWithoutCompaniesInput";
import { InstallationUpdateManyWithoutCompaniesInput } from "./InstallationUpdateManyWithoutCompaniesInput";
import { MaintRepairUpdateManyWithoutCompaniesInput } from "./MaintRepairUpdateManyWithoutCompaniesInput";
import { SparePartUpdateManyWithoutCompaniesInput } from "./SparePartUpdateManyWithoutCompaniesInput";
import { TicketUpdateManyWithoutCompaniesInput } from "./TicketUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  companyAddress?: string | null;
  companyDepartment?: string;
  companyName?: string;
  companyPhone?: number;
  companyType?: CompanyTypeWhereUniqueInput | null;
  employees?: EmployeeUpdateManyWithoutCompaniesInput;
  equipments?: EquidevUpdateManyWithoutCompaniesInput;
  equipmentSales?: EquipmentSaleUpdateManyWithoutCompaniesInput;
  installations?: InstallationUpdateManyWithoutCompaniesInput;
  maintRepairs?: MaintRepairUpdateManyWithoutCompaniesInput;
  spareParts?: SparePartUpdateManyWithoutCompaniesInput;
  tickets?: TicketUpdateManyWithoutCompaniesInput;
};
