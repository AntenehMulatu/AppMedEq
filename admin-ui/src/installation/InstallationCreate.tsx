import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  TextInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { EquidevTitle } from "../equidev/EquidevTitle";

export const InstallationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="CommissionDate" source="commissionDate" />
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
        <DateInput
          label="InstallationStartDate"
          source="installationStartDate"
        />
        <TextInput
          label="NameOfCompanyEqInstalled"
          source="nameOfCompanyEqInstalled"
        />
        <TextInput
          label="NameOfTechnicalEngineerInstalled"
          source="nameOfTechnicalEngineerInstalled"
        />
      </SimpleForm>
    </Create>
  );
};
