import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { EquipmentSaleTitle } from "../equipmentSale/EquipmentSaleTitle";
import { InstallationTitle } from "../installation/InstallationTitle";
import { MaintRepairTitle } from "../maintRepair/MaintRepairTitle";

export const EquidevEdit = (props: EditProps): React.ReactElement => {
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
        <TextInput label="CountryOfOrign" source="countryOfOrign" />
        <ReferenceInput
          source="equipmentsale.id"
          reference="EquipmentSale"
          label="EquipmentSales"
        >
          <SelectInput optionText={EquipmentSaleTitle} />
        </ReferenceInput>
        <BooleanInput label="HasSparePart" source="hasSparePart" />
        <ReferenceInput
          source="installation.id"
          reference="Installation"
          label="Installations"
        >
          <SelectInput optionText={InstallationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="maintrepair.id"
          reference="MaintRepair"
          label="MaintRepairs"
        >
          <SelectInput optionText={MaintRepairTitle} />
        </ReferenceInput>
        <TextInput label="ManufacturerName" source="manufacturerName" />
        <TextInput label="Model" source="model" />
        <TextInput label="SerialNumber" source="serialNumber" />
        <DateTimeInput
          label="ShipmentArrivalDate"
          source="shipmentArrivalDate"
        />
      </SimpleForm>
    </Edit>
  );
};
