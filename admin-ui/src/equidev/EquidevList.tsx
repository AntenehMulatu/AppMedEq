import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { EQUIPMENTSALE_TITLE_FIELD } from "../equipmentSale/EquipmentSaleTitle";
import { INSTALLATION_TITLE_FIELD } from "../installation/InstallationTitle";

export const EquidevList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Equidevs"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="ShipmentArrivalDate" source="shipmentArrivalDate" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
