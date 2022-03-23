import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { EQUIDEV_TITLE_FIELD } from "../equidev/EquidevTitle";

export const SparePartShow = (props: ShowProps): React.ReactElement => {
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
        <ReferenceField
          label="EquipmentId"
          source="equidev.id"
          reference="Equidev"
        >
          <TextField source={EQUIDEV_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="EstimatedExpireDate" source="estimatedExpireDate" />
        <BooleanField label="HasSerialNumber" source="hasSerialNumber" />
        <TextField label="ID" source="id" />
        <TextField label="NameOfSparePart" source="nameOfSparePart" />
        <TextField label="PartNumber" source="partNumber" />
        <TextField label="SerialNumber" source="serialNumber" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
