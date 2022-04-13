import { CompanyTypeWhereUniqueInput } from "../companyType/CompanyTypeWhereUniqueInput";
import { EmployeeCreateNestedManyWithoutCompaniesInput } from "./EmployeeCreateNestedManyWithoutCompaniesInput";
import { EquidevCreateNestedManyWithoutCompaniesInput } from "./EquidevCreateNestedManyWithoutCompaniesInput";
import { EquipmentSaleCreateNestedManyWithoutCompaniesInput } from "./EquipmentSaleCreateNestedManyWithoutCompaniesInput";
import { InstallationCreateNestedManyWithoutCompaniesInput } from "./InstallationCreateNestedManyWithoutCompaniesInput";
import { MaintRepairCreateNestedManyWithoutCompaniesInput } from "./MaintRepairCreateNestedManyWithoutCompaniesInput";
import { SparePartCreateNestedManyWithoutCompaniesInput } from "./SparePartCreateNestedManyWithoutCompaniesInput";
import { TicketCreateNestedManyWithoutCompaniesInput } from "./TicketCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  companyAddress?: string | null;
  companyDepartment: string;
  companyName: string;
  companyPhone: number;
  companyType?: CompanyTypeWhereUniqueInput | null;
  employees?: EmployeeCreateNestedManyWithoutCompaniesInput;
  equipments?: EquidevCreateNestedManyWithoutCompaniesInput;
  equipmentSales?: EquipmentSaleCreateNestedManyWithoutCompaniesInput;
  installations?: InstallationCreateNestedManyWithoutCompaniesInput;
  maintRepairs?: MaintRepairCreateNestedManyWithoutCompaniesInput;
  spareParts?: SparePartCreateNestedManyWithoutCompaniesInput;
  tickets?: TicketCreateNestedManyWithoutCompaniesInput;
};
