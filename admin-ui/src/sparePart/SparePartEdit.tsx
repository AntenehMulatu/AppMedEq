import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { EquidevTitle } from "../equidev/EquidevTitle";

export const SparePartEdit = (props: EditProps): React.ReactElement => {
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
        <DateInput label="EstimatedExpireDate" source="estimatedExpireDate" />
        <BooleanInput label="HasSerialNumber" source="hasSerialNumber" />
        <TextInput label="NameOfSparePart" source="nameOfSparePart" />
        <TextInput label="PartNumber" source="partNumber" />
        <TextInput label="SerialNumber" source="serialNumber" />
      </SimpleForm>
    </Edit>
  );
};
