import { Company as TCompany } from "../api/company/Company";

export const COMPANY_TITLE_FIELD = "companyName";

export const CompanyTitle = (record: TCompany): string => {
  return record.companyName || record.id;
};
