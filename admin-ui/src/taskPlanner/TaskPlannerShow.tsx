import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { TICKET_TITLE_FIELD } from "../ticket/TicketTitle";

export const TaskPlannerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
