import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  companyIdId?: SortOrder;
  createdAt?: SortOrder;
  employeeAge?: SortOrder;
  employeeDepartment?: SortOrder;
  employeeEmail?: SortOrder;
  employeeName?: SortOrder;
  employeePhone?: SortOrder;
  employeePosition?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
