import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  SelectArrayInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="company.id"
          reference="Company"
          label="CompanyId"
        >
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="EmployeeAge" source="employeeAge" />
        <TextInput label="EmployeeDepartment" source="employeeDepartment" />
        <TextInput label="EmployeeEmail" source="employeeEmail" type="email" />
        <TextInput label="EmployeeName" source="employeeName" />
        <NumberInput step={1} label="EmployeePhone" source="employeePhone" />
        <SelectArrayInput
          label="EmployeePosition"
          source="employeePosition"
          choices={[
            { label: "CEO", value: "Ceo" },
            { label: "Engineer", value: "Engineer" },
            { label: "Technician", value: "Technician" },
            { label: "Sales", value: "Sales" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
