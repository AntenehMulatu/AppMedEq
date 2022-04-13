import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { EquidevTitle } from "../equidev/EquidevTitle";

export const MaintRepairEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ActionTaken" multiline source="actionTaken" />
        <ReferenceInput
          source="company.id"
          reference="Company"
          label="CompanyId"
        >
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <DateTimeInput label="DateOfCEOApproval" source="dateOfCeoApproval" />
        <ReferenceArrayInput
          source="employeeId"
          reference="Employee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="equidev.id"
          reference="Equidev"
          label="EquipmentId"
        >
          <SelectInput optionText={EquidevTitle} />
        </ReferenceInput>
        <TextInput label="FaultType" multiline source="faultType" />
        <DateTimeInput
          label="LasttimeOfGoodOperation"
          source="lasttimeOfGoodOperation"
        />
        <TextInput
          label="NameOfBMEApprovedMaintClearance"
          source="nameOfBmeApprovedMaintClearance"
        />
        <TextInput label="NameOfTechMaintainEq" source="nameOfTechMaintainEq" />
        <TextInput label="PossibleCause" multiline source="possibleCause" />
      </SimpleForm>
    </Edit>
  );
};
