import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { EquidevTitle } from "../equidev/EquidevTitle";
import { TaskPlannerTitle } from "../taskPlanner/TaskPlannerTitle";

export const TicketEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="company.id"
          reference="Company"
          label="CompanyId"
        >
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="equidev.id"
          reference="Equidev"
          label="EquipmentId"
        >
          <SelectInput optionText={EquidevTitle} />
        </ReferenceInput>
        <BooleanInput label="isPrimeCustomer" source="isPrimeCustomer" />
        <TextInput label="NameOfCustomer" source="nameOfCustomer" />
        <TextInput label="NameOfEquipment" source="nameOfEquipment" />
        <DateTimeInput label="RequisitionDate" source="requisitionDate" />
        <TextInput
          label="RequisitionDetails"
          multiline
          source="requisitionDetails"
        />
        <TextInput label="RequisitionType" source="requisitionType" />
        <ReferenceInput
          source="taskplanner.id"
          reference="TaskPlanner"
          label="TaskPlanners"
        >
          <SelectInput optionText={TaskPlannerTitle} />
        </ReferenceInput>
        <SelectInput
          source="ticketStatus"
          label="TicketStatus"
          choices={[
            { label: "Done", value: "Done" },
            { label: "Open", value: "Open" },
            { label: "Closed", value: "Closed" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
