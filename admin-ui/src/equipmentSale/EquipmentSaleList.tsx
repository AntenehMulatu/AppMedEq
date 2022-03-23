import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const EquipmentSaleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EquipmentSales"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="CompanyId"
          source="company.id"
          reference="Company"
        >
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DaysSoldtoCustomer" source="daysSoldtoCustomer" />
        <ReferenceField
          label="EmployeeId"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="NameOfSalesPerson" source="nameOfSalesPerson" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ValueOfTransaction" source="valueOfTransaction" />
      </Datagrid>
    </List>
  );
};
