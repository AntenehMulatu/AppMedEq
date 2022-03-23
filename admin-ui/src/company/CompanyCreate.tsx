import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

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
      </SimpleForm>
    </Create>
  );
};
