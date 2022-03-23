import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { EQUIDEV_TITLE_FIELD } from "./EquidevTitle";
import { TASKPLANNER_TITLE_FIELD } from "../taskPlanner/TaskPlannerTitle";
import { EQUIPMENTSALE_TITLE_FIELD } from "../equipmentSale/EquipmentSaleTitle";
import { INSTALLATION_TITLE_FIELD } from "../installation/InstallationTitle";
import { MAINTREPAIR_TITLE_FIELD } from "../maintRepair/MaintRepairTitle";

export const EquidevShow = (props: ShowProps): React.ReactElement => {
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
        <TextField label="CountryOfOrign" source="countryOfOrign" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="EquipmentSales"
          source="equipmentsale.id"
          reference="EquipmentSale"
        >
          <TextField source={EQUIPMENTSALE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="HasSparePart" source="hasSparePart" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Installations"
          source="installation.id"
          reference="Installation"
        >
          <TextField source={INSTALLATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="MaintRepairs"
          source="maintrepair.id"
          reference="MaintRepair"
        >
          <TextField source={MAINTREPAIR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ManufacturerName" source="manufacturerName" />
        <TextField label="Model" source="model" />
        <TextField label="SerialNumber" source="serialNumber" />
        <TextField label="ShipmentArrivalDate" source="shipmentArrivalDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SparePart"
          target="EquidevId"
          label="SpareParts"
        >
          <Datagrid rowClick="show">
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
            <TextField
              label="EstimatedExpireDate"
              source="estimatedExpireDate"
            />
            <BooleanField label="HasSerialNumber" source="hasSerialNumber" />
            <TextField label="ID" source="id" />
            <TextField label="NameOfSparePart" source="nameOfSparePart" />
            <TextField label="PartNumber" source="partNumber" />
            <TextField label="SerialNumber" source="serialNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Ticket"
          target="EquidevId"
          label="Tickets"
        >
          <Datagrid rowClick="show">
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
            <TextField label="ID" source="id" />
            <BooleanField label="isPrimeCustomer" source="isPrimeCustomer" />
            <TextField label="NameOfCustomer" source="nameOfCustomer" />
            <TextField label="NameOfEquipment" source="nameOfEquipment" />
            <TextField label="RequisitionDate" source="requisitionDate" />
            <TextField label="RequisitionDetails" source="requisitionDetails" />
            <TextField label="RequisitionType" source="requisitionType" />
            <ReferenceField
              label="TaskPlanners"
              source="taskplanner.id"
              reference="TaskPlanner"
            >
              <TextField source={TASKPLANNER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TicketStatus" source="ticketStatus" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
