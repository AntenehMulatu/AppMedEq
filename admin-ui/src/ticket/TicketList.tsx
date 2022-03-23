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
import { EQUIDEV_TITLE_FIELD } from "../equidev/EquidevTitle";
import { TASKPLANNER_TITLE_FIELD } from "../taskPlanner/TaskPlannerTitle";

export const TicketList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tickets"}
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
    </List>
  );
};
