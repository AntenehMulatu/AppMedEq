import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { EquipmentSaleTitle } from "../equipmentSale/EquipmentSaleTitle";
import { InstallationTitle } from "../installation/InstallationTitle";
import { MaintRepairTitle } from "../maintRepair/MaintRepairTitle";
import { SparePartTitle } from "../sparePart/SparePartTitle";
import { TicketTitle } from "../ticket/TicketTitle";

export const EquidevCreate = (props: CreateProps): React.ReactElement => {
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
        <ReferenceArrayInput
          source="maintRepairs"
          reference="MaintRepair"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MaintRepairTitle} />
        </ReferenceArrayInput>
        <TextInput label="ManufacturerName" source="manufacturerName" />
        <TextInput label="Model" source="model" />
        <TextInput label="SerialNumber" source="serialNumber" />
        <DateTimeInput
          label="ShipmentArrivalDate"
          source="shipmentArrivalDate"
        />
        <ReferenceArrayInput
          source="spareParts"
          reference="SparePart"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SparePartTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tickets"
          reference="Ticket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TicketTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
