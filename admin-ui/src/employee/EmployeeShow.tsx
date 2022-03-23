import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { EMPLOYEE_TITLE_FIELD } from "./EmployeeTitle";
import { TICKET_TITLE_FIELD } from "../ticket/TicketTitle";

export const EmployeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="CompanyId"
          source="company.id"
          reference="Company"
        >
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="EmployeeAge" source="employeeAge" />
        <TextField label="EmployeeDepartment" source="employeeDepartment" />
        <TextField label="EmployeeEmail" source="employeeEmail" />
        <TextField label="EmployeeName" source="employeeName" />
        <TextField label="EmployeePhone" source="employeePhone" />
        <TextField label="EmployeePosition" source="employeePosition" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="EquipmentSale"
          target="EmployeeId"
          label="EquipmentSales"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="TaskPlanner"
          target="EmployeeId"
          label="TaskPlanners"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="EmployeeAssigned" source="employeeAssigned" />
            <ReferenceField
              label="Employeeid"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="PriorityLevel" source="priorityLevel" />
            <TextField label="TaskEndDate" source="taskEndDate" />
            <TextField label="TaskStartDate" source="taskStartDate" />
            <TextField label="TaskStatus" source="taskStatus" />
            <ReferenceField
              label="TicketId"
              source="ticket.id"
              reference="Ticket"
            >
              <TextField source={TICKET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TicketNumber" source="ticketNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
