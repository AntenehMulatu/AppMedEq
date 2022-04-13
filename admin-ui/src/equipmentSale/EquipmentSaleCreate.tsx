import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { EquidevTitle } from "../equidev/EquidevTitle";

export const EquipmentSaleCreate = (props: CreateProps): React.ReactElement => {
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
        <DateInput label="DaysSoldtoCustomer" source="daysSoldtoCustomer" />
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="EmployeeId"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="equipmentId"
          reference="Equidev"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EquidevTitle} />
        </ReferenceArrayInput>
        <TextInput label="NameOfSalesPerson" source="nameOfSalesPerson" />
        <NumberInput label="ValueOfTransaction" source="valueOfTransaction" />
      </SimpleForm>
    </Create>
  );
};
