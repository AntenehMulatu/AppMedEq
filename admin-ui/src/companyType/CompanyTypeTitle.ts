import { CompanyType as TCompanyType } from "../api/companyType/CompanyType";

export const COMPANYTYPE_TITLE_FIELD = "id";

export const CompanyTypeTitle = (record: TCompanyType): string => {
  return record.id || record.id;
};
