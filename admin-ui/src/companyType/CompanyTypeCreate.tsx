import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { CompanyTypeTitle } from "./CompanyTypeTitle";

export const CompanyTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="companies"
          reference="Company"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanyTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="companytype.id"
          reference="CompanyType"
          label="company_Type"
        >
          <SelectInput optionText={CompanyTypeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="companyTypes"
          reference="CompanyType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanyTypeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
