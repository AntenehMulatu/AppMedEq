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

export const MaintRepairList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MaintRepairs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ActionTaken" source="actionTaken" />
        <ReferenceField
          label="CompanyId"
          source="company.id"
          reference="Company"
        >
          <TextField source={COMPANY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DateOfCEOApproval" source="dateOfCeoApproval" />
        <ReferenceField
          label="EquipmentId"
          source="equidev.id"
          reference="Equidev"
        >
          <TextField source={EQUIDEV_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="FaultType" source="faultType" />
        <TextField label="ID" source="id" />
        <TextField
          label="LasttimeOfGoodOperation"
          source="lasttimeOfGoodOperation"
        />
        <TextField
          label="NameOfBMEApprovedMaintClearance"
          source="nameOfBmeApprovedMaintClearance"
        />
        <TextField label="NameOfTechMaintainEq" source="nameOfTechMaintainEq" />
        <TextField label="PossibleCause" source="possibleCause" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
