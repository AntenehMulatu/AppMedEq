import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { EquidevCreateNestedManyWithoutEquipmentSalesInput } from "./EquidevCreateNestedManyWithoutEquipmentSalesInput";

export type EquipmentSaleCreateInput = {
  companyId?: CompanyWhereUniqueInput | null;
  daysSoldtoCustomer?: Date | null;
  employeeId?: EmployeeWhereUniqueInput | null;
  equipmentId?: EquidevCreateNestedManyWithoutEquipmentSalesInput;
  nameOfSalesPerson?: string | null;
  valueOfTransaction?: number | null;
};
