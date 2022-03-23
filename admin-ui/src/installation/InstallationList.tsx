import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { EQUIDEV_TITLE_FIELD } from "../equidev/EquidevTitle";

export const InstallationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Installations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="CommissionDate" source="commissionDate" />
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
        <TextField
          label="InstallationStartDate"
          source="installationStartDate"
        />
        <TextField
          label="NameOfCompanyEqInstalled"
          source="nameOfCompanyEqInstalled"
        />
        <TextField
          label="NameOfTechnicalEngineerInstalled"
          source="nameOfTechnicalEngineerInstalled"
        />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
