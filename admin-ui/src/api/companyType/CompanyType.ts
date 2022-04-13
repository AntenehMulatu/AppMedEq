import { Company } from "../company/Company";

export type CompanyType = {
  companies?: Array<Company>;
  companyType?: CompanyType;
  companyTypes?: Array<CompanyType>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
