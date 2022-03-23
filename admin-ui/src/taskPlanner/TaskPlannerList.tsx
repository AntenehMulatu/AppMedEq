import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { TICKET_TITLE_FIELD } from "../ticket/TicketTitle";

export const TaskPlannerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TaskPlanners"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="TicketId" source="ticket.id" reference="Ticket">
          <TextField source={TICKET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TicketNumber" source="ticketNumber" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
