import { CompanyCreateNestedManyWithoutCompanyTypesInput } from "./CompanyCreateNestedManyWithoutCompanyTypesInput";
import { CompanyTypeWhereUniqueInput } from "./CompanyTypeWhereUniqueInput";
import { CompanyTypeCreateNestedManyWithoutCompanyTypesInput } from "./CompanyTypeCreateNestedManyWithoutCompanyTypesInput";

export type CompanyTypeCreateInput = {
  companies?: CompanyCreateNestedManyWithoutCompanyTypesInput;
  companyType: CompanyTypeWhereUniqueInput;
  companyTypes?: CompanyTypeCreateNestedManyWithoutCompanyTypesInput;
};
