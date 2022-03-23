import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { EquidevUpdateManyWithoutEquipmentSalesInput } from "./EquidevUpdateManyWithoutEquipmentSalesInput";

export type EquipmentSaleUpdateInput = {
  companyId?: CompanyWhereUniqueInput | null;
  daysSoldtoCustomer?: Date | null;
  employeeId?: EmployeeWhereUniqueInput | null;
  equipmentId?: EquidevUpdateManyWithoutEquipmentSalesInput;
  nameOfSalesPerson?: string | null;
  valueOfTransaction?: number | null;
};
