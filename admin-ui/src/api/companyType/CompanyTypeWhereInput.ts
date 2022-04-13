import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { CompanyTypeWhereUniqueInput } from "./CompanyTypeWhereUniqueInput";
import { CompanyTypeListRelationFilter } from "./CompanyTypeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CompanyTypeWhereInput = {
  companies?: CompanyListRelationFilter;
  companyType?: CompanyTypeWhereUniqueInput;
  companyTypes?: CompanyTypeListRelationFilter;
  id?: StringFilter;
};
