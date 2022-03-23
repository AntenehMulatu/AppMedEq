import { Employee as TEmployee } from "../api/employee/Employee";

export const EMPLOYEE_TITLE_FIELD = "employeeName";

export const EmployeeTitle = (record: TEmployee): string => {
  return record.employeeName || record.id;
};
