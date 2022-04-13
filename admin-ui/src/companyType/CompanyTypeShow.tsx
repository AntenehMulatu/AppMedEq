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
} from "react-admin";

import { COMPANYTYPE_TITLE_FIELD } from "./CompanyTypeTitle";

export const CompanyTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="company_Type"
          source="companytype.id"
          reference="CompanyType"
        >
          <TextField source={COMPANYTYPE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Company"
          target="CompanyTypeId"
          label="Companies"
        >
          <Datagrid rowClick="show">
            <TextField label="CompanyAddress" source="companyAddress" />
            <TextField label="CompanyDepartment" source="companyDepartment" />
            <TextField label="CompanyName" source="companyName" />
            <TextField label="CompanyPhone" source="companyPhone" />
            <ReferenceField
              label="CompanyType"
              source="companytype.id"
              reference="CompanyType"
            >
              <TextField source={COMPANYTYPE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CompanyType"
          target="CompanyTypeId"
          label="CompanyTypes"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="company_Type"
              source="companytype.id"
              reference="CompanyType"
            >
              <TextField source={COMPANYTYPE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
