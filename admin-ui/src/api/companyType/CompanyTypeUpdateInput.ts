import { CompanyUpdateManyWithoutCompanyTypesInput } from "./CompanyUpdateManyWithoutCompanyTypesInput";
import { CompanyTypeWhereUniqueInput } from "./CompanyTypeWhereUniqueInput";
import { CompanyTypeUpdateManyWithoutCompanyTypesInput } from "./CompanyTypeUpdateManyWithoutCompanyTypesInput";

export type CompanyTypeUpdateInput = {
  companies?: CompanyUpdateManyWithoutCompanyTypesInput;
  companyType?: CompanyTypeWhereUniqueInput;
  companyTypes?: CompanyTypeUpdateManyWithoutCompanyTypesInput;
};
