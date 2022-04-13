import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { EQUIPMENTSALE_TITLE_FIELD } from "./EquipmentSaleTitle";
import { INSTALLATION_TITLE_FIELD } from "../installation/InstallationTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const EquipmentSaleShow = (props: ShowProps): React.ReactElement => {
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
        <TextField label="DaysSoldtoCustomer" source="daysSoldtoCustomer" />
        <ReferenceField
          label="EmployeeId"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="NameOfSalesPerson" source="nameOfSalesPerson" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ValueOfTransaction" source="valueOfTransaction" />
        <ReferenceManyField
          reference="Equidev"
          target="EquipmentSaleId"
          label="Equidevs"
        >
          <Datagrid rowClick="show">
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
            <TextField label="ManufacturerName" source="manufacturerName" />
            <TextField label="Model" source="model" />
            <TextField label="SerialNumber" source="serialNumber" />
            <TextField
              label="ShipmentArrivalDate"
              source="shipmentArrivalDate"
            />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
