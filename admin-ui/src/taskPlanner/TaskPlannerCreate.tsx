import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";
import { TicketTitle } from "../ticket/TicketTitle";

export const TaskPlannerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="EmployeeAssigned" source="employeeAssigned" />
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employeeid"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <SelectInput
          source="priorityLevel"
          label="PriorityLevel"
          choices={[
            { label: "High", value: "High" },
            { label: "Middium", value: "Middium" },
            { label: "Low", value: "Low" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="TaskEndDate" source="taskEndDate" />
        <DateTimeInput label="TaskStartDate" source="taskStartDate" />
        <SelectInput
          source="taskStatus"
          label="TaskStatus"
          choices={[
            { label: "Open", value: "Open" },
            { label: "Done", value: "Done" },
            { label: "Closed", value: "Closed" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="ticket.id" reference="Ticket" label="TicketId">
          <SelectInput optionText={TicketTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="TicketNumber" source="ticketNumber" />
      </SimpleForm>
    </Create>
  );
};
