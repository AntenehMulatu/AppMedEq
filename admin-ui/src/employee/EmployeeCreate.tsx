import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { EquipmentSaleTitle } from "../equipmentSale/EquipmentSaleTitle";
import { InstallationTitle } from "../installation/InstallationTitle";
import { MaintRepairTitle } from "../maintRepair/MaintRepairTitle";
import { TaskPlannerTitle } from "../taskPlanner/TaskPlannerTitle";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
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
        <TextInput label="EmployeeAge" source="employeeAge" />
        <TextInput label="EmployeeDepartment" source="employeeDepartment" />
        <TextInput label="EmployeeEmail" source="employeeEmail" type="email" />
        <TextInput label="EmployeeName" source="employeeName" />
        <NumberInput step={1} label="EmployeePhone" source="employeePhone" />
        <SelectArrayInput
          label="EmployeePosition"
          source="employeePosition"
          choices={[
            { label: "CEO", value: "Ceo" },
            { label: "Engineer", value: "Engineer" },
            { label: "Technician", value: "Technician" },
            { label: "Sales", value: "Sales" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="equipmentSales"
          reference="EquipmentSale"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EquipmentSaleTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="installations"
          reference="Installation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InstallationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="maintRepairs"
          reference="MaintRepair"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MaintRepairTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="taskPlanners"
          reference="TaskPlanner"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskPlannerTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
