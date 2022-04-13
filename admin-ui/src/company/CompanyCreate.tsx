import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";
import { EquidevTitle } from "../equidev/EquidevTitle";
import { EquipmentSaleTitle } from "../equipmentSale/EquipmentSaleTitle";
import { InstallationTitle } from "../installation/InstallationTitle";
import { MaintRepairTitle } from "../maintRepair/MaintRepairTitle";
import { SparePartTitle } from "../sparePart/SparePartTitle";
import { TicketTitle } from "../ticket/TicketTitle";

export const CompanyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="CompanyAddress" source="companyAddress" />
        <TextInput label="CompanyDepartment" source="companyDepartment" />
        <TextInput label="CompanyName" source="companyName" />
        <NumberInput label="CompanyPhone" source="companyPhone" />
        <SelectInput
          source="companyType"
          label="CompanyType"
          choices={[
            { label: "Customer", value: "Customer" },
            { label: "Supplier", value: "Supplier" },
            { label: "Institution", value: "Institution" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="employees"
          reference="Employee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="equipments"
          reference="Equidev"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EquidevTitle} />
        </ReferenceArrayInput>
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
